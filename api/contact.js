// Vercel Serverless Function — /api/contact
// Validates Cloudflare Turnstile token (if TURNSTILE_SECRET_KEY env var is set),
// then forwards the submission to Formspree.
//
// Required env var (set in Vercel dashboard):
//   TURNSTILE_SECRET_KEY — from Cloudflare Turnstile dashboard
//
// Optional: leave TURNSTILE_SECRET_KEY unset during initial deploy;
//   the function will still work and forward to Formspree (Turnstile skipped).
//   Set it once you have a site key + secret key from Cloudflare.

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvnrkkq';
const ALLOWED_ORIGIN = 'https://ritvaldi.my.id';

module.exports = async function handler(req, res) {
  // Restrict to known origin in production
  const origin = req.headers.origin || '';
  const isAllowedOrigin = origin === ALLOWED_ORIGIN || origin === '';

  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    if (isAllowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN);
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowedOrigin) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Parse body (Vercel parses JSON automatically when Content-Type is application/json)
  const body = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return null; } })() : req.body;
  if (!body) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const {
    name,
    email,
    message,
    'cf-turnstile-response': turnstileToken,
    _gotcha,
  } = body;

  // Server-side honeypot check — silently succeed to not signal to bots
  if (_gotcha) {
    return res.status(200).json({ ok: true });
  }

  // Basic field presence check
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Turnstile validation — only runs if secret key is configured
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (secretKey) {
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Verification required' });
    }
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretKey, response: turnstileToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return res.status(400).json({ error: 'Verification failed' });
      }
    } catch {
      // Turnstile verify call failed — fail closed
      return res.status(500).json({ error: 'Verification error' });
    }
  }

  // Forward to Formspree (sanitize lengths server-side as well)
  try {
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: String(name).trim().slice(0, 120),
        email: String(email).trim().slice(0, 254),
        message: String(message).trim().slice(0, 3000),
      }),
    });

    if (formspreeRes.ok) {
      return res.status(200).json({ ok: true });
    }
    return res.status(502).json({ error: 'Submission failed' });
  } catch {
    return res.status(500).json({ error: 'Server error' });
  }
};

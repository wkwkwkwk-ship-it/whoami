const ALLOWED_ORIGIN = 'https://ritvaldi.my.id';

module.exports = async function handler(req, res) {
  const origin = req.headers.origin || '';
  const isAllowedOrigin = origin === ALLOWED_ORIGIN || origin === '';

  res.setHeader('Vary', 'Origin');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    if (isAllowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN);
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    return res.status(204).end();
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;
  if (!slug || typeof slug !== 'string' || slug.length > 120 || !/^[\w-]+$/.test(slug)) {
    return res.status(400).json({ error: 'Invalid slug' });
  }

  const base = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  // Graceful fallback — returns 0 if KV store not yet configured
  if (!base || !token) {
    return res.status(200).json({ count: 0 });
  }

  const authHeader = { Authorization: `Bearer ${token}` };

  // Batch GET: ?slugs=slug1,slug2,...
  if (req.method === 'GET' && req.query.slugs) {
    const slugList = String(req.query.slugs).split(',').slice(0, 60)
      .filter(s => /^[\w-]{1,120}$/.test(s));
    if (!slugList.length) return res.status(400).json({ error: 'Invalid slugs' });
    try {
      const keys = slugList.map(s => encodeURIComponent(`views:${s}`));
      const r = await fetch(`${base}/mget/${keys.join('/')}`, { headers: authHeader });
      const data = await r.json();
      const result = {};
      slugList.forEach((s, i) => { result[s] = parseInt(data.result[i]) || 0; });
      return res.status(200).json(result);
    } catch {
      const result = {};
      slugList.forEach(s => { result[s] = 0; });
      return res.status(200).json(result);
    }
  }

  const key = encodeURIComponent(`views:${slug}`);

  try {
    if (req.method === 'POST') {
      const r = await fetch(`${base}/incr/${key}`, { headers: authHeader });
      const data = await r.json();
      return res.status(200).json({ count: data.result || 0 });
    }

    const r = await fetch(`${base}/get/${key}`, { headers: authHeader });
    const data = await r.json();
    return res.status(200).json({ count: data.result || 0 });
  } catch {
    return res.status(200).json({ count: 0 });
  }
};

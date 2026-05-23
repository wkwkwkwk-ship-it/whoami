const SECRET = 'rvld-seed-9f2k';

const COUNTS = {
  'panduan-iot-manufaktur-indonesia-implementasi-roi':              847,
  'agentic-ai-ketika-ai-mulai-bekerja-sendiri-tanpa-disuruh':      694,
  'self-leadership-cara-tetap-driven-saat-motivasi-kerja-hilang':  523,
  'manusia-tidak-digantikan-ai-tapi-harus-upgrade':                478,
  'upgrade-atau-tertinggal-tiga-level-ai-era-baru':                412,
  'tim-kecil-ai-agent-cara-kerja-era-baru':                        387,
  'masa-depan-ai-5-industri-indonesia-manufaktur-mining-energi-smart-city-healthcare': 243,
  'biaya-risiko-transisi-implementasi-iot-ai-industri-cara-mitigasi': 234,
  'agentic-ai-personal-branding-marketing-division-sendiri':        213,
  'roi-langganan-ai-cara-memaksimalkan-claude-chatgpt':            208,
  'kalkulator-oee-pabrik-cara-hitung-overall-equipment-effectiveness': 194,
  'ai-hanya-secerdas-data-yang-diterimanya-iot-big-data':          188,
  'biaya-downtime-pabrik-dan-cara-menghitungnya':                  167,
  'menjadi-profesional-ai-augmented-man-behind-the-gun':           176,
  'era-hype-startup-indonesia-berakhir-zaman-baru':                164,
  'membangun-produk-teknologi-seperti-membuat-nasi-goreng':        159,
  'menyelaraskan-sales-engineering-startup-tech':                   153,
  'belajar-ai-lewat-hp-trik-produktivitas-kerja-pemula':           148,
  'melihat-peluang-ketika-dalam-tekanan-keputusan-terbaik':        141,
  'platform-monitoring-iot-industri-indonesia-panduan-memilih':    136,
  'tiga-titik-lantai-produksi-paling-cepat-meningkat-dengan-ai':  127,
  'forensik-digital-verifikasi-konten-perang-era-ai':              127,
  'potensi-penghematan-miliaran-iot-ai-manufaktur-indonesia':      118,
  'ramadhan-filosofi-golf-menilai-karakter-dan-silaturahmi-bisnis': 119,
  'filosofi-cangkang-telur-menghadapi-ketidaksempurnaan-karir':    108,
  'fokus-hal-yang-bisa-dikendalikan-leadership-ketidakpastian':    104,
  'jangan-bakar-jembatan-peluang-datang-dari-mana-saja':           98,
  'konflik-timur-tengah-peluang-efisiensi-iot-ai-industri-indonesia': 93,
  'bisnis-terlambat-melihat-masalah':                              89,
  'pelajaran-bisnis-dari-lapangan-golf-kepemimpinan':              87,
  'reputasi-satu-satunya-aset-tidak-bisa-dibeli-dipinjam-dipercepat': 83,
  'dari-sensor-ke-strategi-membangun-fondasi-data-industri-indonesia': 82,
  'waktu-tepat-review-karir-bisnis-arah-hidup':                    78,
  'checklist-sebelum-implementasi-iot-industri-panduan-praktis':   143,
  'dari-data-ke-keputusan-cara-ai-bekerja-operasional-industri':   344,
  'mulai-sekarang-mulai-kecil-mulai-benar-transformasi-ai-iot-industri': 319,
  'memimpin-tim-transformasi-ai-tanpa-membuat-mereka-merasa-terancam': 274,
  'konflik-krisis-peluang-tersembunyi-inovasi-industri-indonesia': 251,
  'kenyamanan-vs-keamanan-celah-siber-dari-hal-yang-mempermudah-hidup': 238,
  'ketika-semua-orang-punya-akses-sama-apa-yang-tersisa-sebagai-keunggulan': 71,
  'bisnis-tidak-mati-tiba-tiba-jalur-yang-sering-dilalui':         67,
  'conviction-atau-keras-kepala-pertanyaan-paling-sulit-pemimpin': 54,
};

module.exports = async function handler(req, res) {
  if (req.query.secret !== SECRET) return res.status(403).json({ error: 'Forbidden' });

  const base = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!base || !token) return res.status(500).json({ error: 'KV not configured' });

  const pipeline = Object.entries(COUNTS).map(([slug, n]) => ['SET', `views:${slug}`, String(n)]);

  try {
    const r = await fetch(`${base}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(pipeline),
    });
    await r.json();
    return res.status(200).json({ ok: true, seeded: pipeline.length });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
};

# Implementation Status

## Last updated
2026-09-23 — Session: P0 recon + Publication 1 update

---

## Current objective
P0 selesai. Publication 1 selesai. Berikutnya: P0.4 Sources component ke artikel lain + P1.1 Start Here.

---

## Completed

### Technical fixes (sesi sebelumnya)
- SEO structured data, meta description, entity signals
- Fix syntax error id.min.js (bilingual switch)
- Fix null guard contact-form listener
- Fix hero eyebrow
- Fix conviction hero image path (images/blog/)
- Fix blog.html JSON-LD conviction image URL (article/ → images/blog/)

### Blog
- 42 artikel published — semua ada HTML, ada di blog.html + index.html + sitemap.xml
- Source artikel .md (09–42) committed ke repo

### P0.1 — Repository reconnaissance: SELESAI
- Framework: Static HTML + CSS + JS, no build tool
- Routing: vercel.json rewrites (clean URLs /blog/:slug)
- Content: HTML files di blog/, images di images/blog/
- Styling: CSS custom properties, design tokens di style.css
- Schema: JSON-LD di setiap halaman
- Blog index: blog.html, article template: blog/*.html
- Analytics: GA G-9BFT3PYG3D, Search Console verified
- Bilingual: data-i18n attributes, translations di main.js

### P0.2 — Technical SEO sanity check: SELESAI
Hasil audit (tidak ada issue kritis):

| Item | Status |
|---|---|
| robots.txt | ✅ Benar — disallow .claude/, .git/, article/*.md |
| sitemap.xml | ✅ 44 entries (42 artikel + homepage + /blog) |
| Canonical | ✅ Hadir di semua halaman |
| OG image | ✅ images/og-image.jpg ada |
| og:title / og:description / og:image | ✅ Lengkap di semua halaman |
| twitter:card | ✅ summary_large_image |
| datePublished + dateModified | ✅ 0 artikel yang missing |
| Empty alt text | ✅ 0 instance |
| Person schema | ✅ Ada di index.html dengan sameAs (LinkedIn, Instagram, synapsis.id) |
| vercel.json routing | ✅ Rewrites + redirects .html → clean URL |
| BlogPosting schema | ✅ Di setiap artikel |

### P0.3 — Article freshness metadata: OK
Semua artikel sudah punya datePublished + dateModified. Tidak perlu perubahan.

### P0.5 — Author/entity markup: MOSTLY DONE
Person schema ada, sameAs sudah lengkap untuk platform utama. Tidak ada duplikasi JSON-LD.

---

## In progress
- Tidak ada yang sedang dikerjakan

## Publication 1 — SELESAI (2026-09-23)
- File: `blog/agentic-ai-ketika-ai-mulai-bekerja-sendiri-tanpa-disuruh.html`
- Judul baru: "Agentic AI di 2026: Dari Eksperimen ke ROI yang Terukur"
- URL dipertahankan (preserve SEO equity)
- Ditambahkan: 3 seksi baru (ROI by category, biaya operasional, governance)
- Ditambahkan: observasi lapangan Synapsis tentang IoT data foundation
- Ditambahkan: Sources section (Gartner, McKinsey, MIT Sloan, NVIDIA, Forrester)
- dateModified diperbarui ke 2026-09-23

---

## Verified
- build: N/A (static)
- lint: N/A
- tests: N/A
- links: tidak diaudit secara programatik — cek manual jika ada kekhawatiran
- responsive check: belum dicek sesi ini

---

## Files changed (sesi 2026-09-23)
- `blog.html` — fix JSON-LD conviction image path
- `article/artikel-09–42.md` — added source files
- `article/*.jpg` — added original images (6 files)
- `images/checklist-implementasi-iot-industri-panduan.jpg` — added

---

## Decisions made
- Tidak commit `.claude/settings.local.json` (local config)
- Source .md files di article/ = referensi konten, bukan halaman yang dirender
- sameAs tidak ditambah GitHub/Twitter karena belum diverifikasi profilnya

---

## Known issues
- ~~P0.4~~ **SELESAI** — Sources section sudah ada di 5 artikel: agentic-ai, panduan-iot, penghematan-miliaran, biaya-downtime, checklist-iot
- **P1.1 belum dimulai** — Belum ada "Start Here" / Selected Writing layer
- **P1.2 belum dimulai** — Article template belum diupgrade (dek, updated date visible, CTA)
- **Newsletter** — Formspree ID masih placeholder `YOUR_NEWSLETTER_FORM_ID` di main.js ~590

---

## External verification still needed
- Search Console: re-submit sitemap setelah artikel baru naik
- Core Web Vitals: belum dicek (perlu PageSpeed Insights / Search Console)
- Mobile rendering: belum dicek sesi ini
- Broken external links: belum diaudit

---

## URGENT — Editorial Roadmap

### Publication 1 — **28 September 2026 (5 hari lagi)**
**Working title:** Agentic AI di 2026: Dari Eksperimen ke ROI yang Terukur

**Action:** UPDATE artikel yang sudah ada, jangan buat duplikat.
- Target URL: `/blog/agentic-ai-ketika-ai-mulai-bekerja-sendiri-tanpa-disuruh`
- File: `blog/agentic-ai-ketika-ai-mulai-bekerja-sendiri-tanpa-disuruh.html`
- Perbarui dateModified setelah edit

Core perubahan yang diinginkan:
- Geser framing dari "agents are coming" → "which agents create measurable value?"
- Tambah: domain-specific agents, real workflows, ROI measurement, operating cost, governance, human approval, permissions/security, industrial relevance
- Wajib: primary sources, updated date, setidaknya 1 observasi/framework spesifik Randi

### Jadwal selanjutnya
| # | Tanggal | Judul |
|---|---|---|
| 2 | 19 Okt 2026 | Physical AI: Ketika AI Tidak Lagi Hanya Membaca Data |
| 3 | 9 Nov 2026 | Indonesia Sedang Menyiapkan Kerangka Regulasi AI |
| 4 | 30 Nov 2026 | Memilih Partner IoT Industri: Pertanyaan Sebelum Proyek |
| 5 | 21 Des 2026 | Dari Engineer ke Founder |
| 6 | 11 Jan 2027 | Pilot Berhasil. Kenapa Industrial AI Gagal Di-scale? |
| 7 | 1 Feb 2027 | Sebelum Memasang AI, Data Apa yang Harus Dikumpulkan? |
| 8 | 22 Feb 2027 | Build, Buy, atau Integrate? |
| 9 | 15 Mar 2027 | Keputusan yang Tidak Boleh Diserahkan ke AI |
| 10 | 5 Apr 2027 | Golf dan Mendesain Kompetisi yang Baik |

---

## Next exact task

1. ~~P0.4 SELESAI~~
2. **Publication 2 — 19 Oktober 2026**: Physical AI — persiapkan artikel baru (slug baru, bukan update)
3. **P1.1** — Tambah "Start Here / Selected Writing" section di homepage setelah P0 selesai semua.

---

## Do not redo
- Jangan redesign ulang layout/visual — sudah baik
- Jangan ubah URL/slug artikel lama — ada SEO equity
- Jangan tambah framework/build tool
- Jangan mass-update dateModified tanpa perubahan konten nyata
- Jangan buat artikel baru hanya untuk mengejar jadwal kalau kualitas kurang

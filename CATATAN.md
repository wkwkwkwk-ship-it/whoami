# Catatan Proyek — ritvaldi.my.id

---

## File-file di Project Ini

| File | Fungsi |
|---|---|
| `index.html` | Halaman utama CV/portfolio |
| `blog.html` | Halaman blog |
| `style.css` | Semua styling (dark/light, responsive, animasi) |
| `main.js` | Logika: tema, bahasa, form, animasi — termasuk semua teks EN/ID |
| `sitemap.xml` | Untuk Google Search Console |
| `robots.txt` | Arahan crawling untuk search engine |
| `favicon.svg` | Icon tab browser |
| `images/` | Foto profil dan OG image |

---

## Apa yang Sudah Ada

- [x] CV lengkap (About, Experience, Synapsis, Skills, Education, AI, Leadership, Beyond Work, Contact)
- [x] Dark/light mode toggle
- [x] Bilingual EN / ID
- [x] Contact form (Formspree)
- [x] Google Analytics
- [x] SEO (meta tags, sitemap, robots.txt, Google Search Console)
- [x] LinkedIn di contact section dan footer
- [x] **Blog page** dengan 4 post placeholder
- [x] **Preview 3 post terbaru** di halaman utama
- [x] **Form subscription newsletter** (belum aktif — lihat TODO di bawah)

---

## TODO — Yang Belum Selesai

### 1. Aktifkan Form Newsletter
Form subscription ada di `blog.html`, tapi belum tersambung ke mana-mana.

**Cara termudah (pakai Formspree):**
1. Login ke [formspree.io](https://formspree.io)
2. Buat form baru, kasih nama "Newsletter"
3. Salin form ID-nya (format: `xxxxxxxx`)
4. Buka `main.js`, cari teks `YOUR_NEWSLETTER_FORM_ID` (sekitar baris 590)
5. Ganti dengan ID form Anda

**Kalau mau yang lebih proper** (bisa kirim email blast ke subscriber):
- [Mailchimp](https://mailchimp.com) — gratis sampai 500 subscriber
- [ConvertKit](https://convertkit.com) — lebih bagus untuk blogger/creator

---

### 2. Ganti Isi Artikel Blog (Placeholder)
Post 2–4 di `blog.html` masih draft placeholder. Post 1 sudah berisi artikel nyata.

**Artikel sudah tayang:**
| # | Judul | Kategori | File sumber |
|---|---|---|---|
| 1 | Seni Menyelaraskan Ambisi Sales & Realitas Engineering di Startup Tech | Tech Leadership | `article/artikel-01-sales-vs-engineering.md` |

**Masih placeholder:**
- Post 2: AI as a Co-Founder
- Post 3: IoT Meets AI
- Post 4: Golf, Business, and Strategy

Kalau artikel baru sudah siap, minta Claude: *"naikkan artikel ini"* — cukup kirim/attach filenya.

---

## Struktur Blog (Arsitektur Halaman Individual)

Setiap artikel punya halaman sendiri. Struktur folder:
```
blog.html                          ← halaman daftar semua artikel
blog/
  menyelaraskan-sales-...html      ← artikel 01 (sudah tayang)
  [slug-artikel-02].html           ← artikel 02 (nanti)
  ...
images/blog/
  post-01-[nama].jpg               ← gambar untuk artikel 01
  ...
article/
  artikel-01-sales-vs-engineering.md   ← file sumber artikel 01
  artikel-02-[judul].md                ← file sumber artikel 02 (nanti)
```

## Cara Naikkan Artikel Baru

1. Simpan file artikel di folder `article/` dengan nama `artikel-0N-[judul].md`
2. Minta Claude: *"naikkan artikel ini"* dan attach/kirim file markdown-nya

Yang akan dibuatkan/diupdate otomatis:
- File HTML artikel baru di `blog/[slug].html`
- Entry kartu di `blog.html`
- Preview card di `index.html` (section Blog)
- Update navigasi prev/next di artikel sebelumnya
- Entry baru di `sitemap.xml`

**Navigasi antar artikel:**
Setiap artikel punya tombol ← Artikel Sebelumnya dan Artikel Berikutnya → di bagian bawah.
Saat ini tombol ini masih disabled karena baru 1 artikel. Begitu artikel ke-2 naik, keduanya akan terhubung.

**Kategori yang tersedia:**
- Tech Leadership
- Leadership / Kepemimpinan
- AI
- Technology / Teknologi
- Beyond Work / Di Luar Kerja

---

## Cara Deploy

Website ini static — tidak perlu build. Cukup **upload semua file** ke hosting Anda.

Kalau pakai hosting yang sama (asumsi file upload/FTP):
1. Upload semua file yang berubah
2. Kalau tambah halaman baru, pastikan `sitemap.xml` juga ikut diupload

File yang berubah di session terakhir:
- `index.html` ← diupdate
- `style.css` ← diupdate
- `main.js` ← diupdate
- `blog.html` ← **baru**
- `sitemap.xml` ← diupdate

---

## Layanan yang Dipakai

| Layanan | Keterangan |
|---|---|
| Google Analytics | ID: `G-9BFT3PYG3D` |
| Formspree (contact) | Form ID: `mwvnrkkq` |
| Formspree (newsletter) | **Belum diisi** — lihat TODO |
| Google Search Console | Sudah terverifikasi |
| Google Fonts | Inter + Playfair Display |

---

## Ide Pengembangan ke Depan

- [ ] Halaman individual per artikel (`/blog/judul-artikel.html`) — lebih baik untuk SEO dan bisa di-share langsung
- [ ] OG image per artikel blog (supaya preview link di WhatsApp/LinkedIn lebih menarik)
- [ ] Filter/tag di halaman blog (filter berdasarkan kategori)
- [ ] Integrasi dengan platform newsletter proper (Mailchimp/ConvertKit)

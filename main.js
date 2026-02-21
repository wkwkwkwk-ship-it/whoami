/* =====================================================
   Muhamad Randi Ritvaldi — main.js
   Multilingual · Dark/Light theme · Responsive
   ===================================================== */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    /* Nav */
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.synapsis':   'Synapsis',
    'nav.skills':     'Skills',
    'nav.ai':         'AI',
    'nav.leadership': 'Leadership',
    'nav.beyond':     'Beyond Work',
    'nav.contact':    'Contact',
    'nav.education':  'Education',
    'section.skills': 'Skills & Recognition',

    /* Hero */
    'hero.headline':    'Founder.<br /><em>Engineer.</em><br />AI-Powered.',
    'hero.desc':        'I founded <strong>Synapsis.Id</strong> — Indonesia\'s leading IoT solutions provider. Today I\'m harnessing the power of AI to build smarter products, sharper teams, and a more intelligent future for technology companies.',
    'hero.btn.journey': 'My Journey',
    'hero.btn.contact': 'Get In Touch',

    /* Meta card */
    'meta.role.label':  'Role',
    'meta.role.value':  'Founder & CEO — Synapsis.Id',
    'meta.focus.label': 'Focus',
    'meta.focus.value': 'AI · IoT · Leadership',
    'meta.edu.label':   'Education',
    'meta.base.label':  'Based In',

    /* About */
    'about.headline': 'Building companies, leading teams, and <em>thinking with AI.</em>',
    'about.p1':       'An IoT engineer-turned-founder based in Jakarta, Indonesia. I hold a <strong>Bachelor\'s in Electrical Engineering (Control Systems) from Universitas Gadjah Mada</strong> and a <strong>Master of Science in Communication Engineering from the University of Manchester</strong>.',
    'about.p2':       'I am the <strong>Founder of Synapsis.Id</strong>, which I built from the hardware bench — writing firmware, wiring sensors, designing IoT devices — before scaling it into one of Indonesia\'s most recognised IoT solution providers. My expertise spans the full stack: embedded hardware, cloud connectivity, and end-to-end IoT framework architecture from physical measurement to user interface.',
    'about.p3':       'Today, I\'m applying the lens of <strong>Artificial Intelligence</strong> to how I build, manage, and lead. I also write, speak, and engage on management, leadership, and entrepreneurship, drawing from over six years of building and running a tech company from scratch.',
    'pillar.1':       'Founder Mindset',
    'pillar.2':       'IoT Architecture',
    'pillar.3':       'AI-Powered Building',
    'pillar.4':       'People Leadership',
    'pillar.5':       'Continuous Learning',

    /* Experience */
    'exp.present':         'Present',
    'exp.tag.founder':     'Founder',
    'exp.months':          'months',
    'exp.years':           'years',
    'exp.syn.ceo.title':   'Founder & Chief Executive Officer',
    'exp.syn.ceo.desc':    'Founded Synapsis.Id and have led it as CEO since January 2020 — growing it from an early-stage IoT hardware venture into Indonesia\'s leading IoT solutions provider.',
    'exp.syn.ceo.bullets': '<li>Built the company from the ground up — from hardware design to a full-service digital transformation provider</li><li>Defined product strategy, technology roadmap, and go-to-market positioning</li><li>Built and led cross-functional teams across hardware, software, and business development</li><li>Established Synapsis as the leading IoT provider in Indonesia</li><li>Currently integrating AI capabilities into the company\'s product and operations strategy</li>',
    'tag.founding':        'Company Founding',
    'tag.team':            'Team Building',
    'exp.syn.hw.title':    'Hardware Engineer',
    'exp.syn.hw.desc':     'The founding engineer at Synapsis — hands-on with every layer of the IoT stack before transitioning to the CEO role. This ground-level technical experience directly informs how I lead engineering direction today.',
    'exp.syn.hw.bullets':  '<li>Designed and built IoT hardware modules for sensor data acquisition and cloud transmission</li><li>Developed full-scale IoT frameworks from physical measurement to user interface</li><li>Programmed embedded systems in C, C++, and Python</li>',
    'exp.beehive.title':   'Co-Founder',
    'exp.beehive.desc':    'Co-founded Beehive Drones during my MSc at the University of Manchester — an IoT-based swarm drone platform for precision agriculture, designed to address global food security through cooperative UAV systems accessible via mobile app.',
    'exp.beehive.bullets': '<li><strong>Microsoft Imagine Cup 2018 — Indonesia National Winner</strong> — selected from 5 national finalists, winning 10,000,000 IDR</li><li><strong>Asia Pacific Finalist</strong> — represented Indonesia at APAC Finals, Kuala Lumpur (April 2018), competing against 15 teams from 8 countries</li><li><strong>World Finals, Redmond WA</strong> — one of 49 teams from 33 countries at the 16th Imagine Cup World Finals at Microsoft HQ</li><li>Won Research Category at <strong>Venture Out 2017</strong>, University of Manchester</li><li>Grew into a multi-sector UAV provider: agriculture, forestry, mining, construction</li>',
    'tag.cofounding':      'Co-Founding',
    'exp.psn.title':       'Engineering Intern',
    'exp.psn.desc':        'Contributed to satellite communications infrastructure at PSN\'s Ground Segment Department, working on systems that connect Indonesia\'s remote regions.',
    'exp.psn.bullets':     '<li>Worked on NOAA-19 satellite ground segment infrastructure</li><li>Encoded and processed Automatic Picture Transmission (APT) signals</li>',

    /* Synapsis */
    'syn.desc1':           'PT Synapsis Sinergi Digital is Indonesia\'s leading end-to-end IoT solutions provider, founded in 2019 and headquartered in East Jakarta. We support partners across industries in solving operational challenges with advanced, reliable Internet of Things technology — from requirements analysis and hardware design, to prototyping, manufacturing, and full installation.',
    'syn.desc2':           'Our flagship product, <strong>Nearon</strong>, is a locally-manufactured IoT gateway and node platform that consolidates data from multiple sensors into a single real-time dashboard — with instant alerts via Email, WhatsApp, and Telegram. Nearon is TKDN-certified, supporting Indonesia\'s national industrial development agenda.',
    'syn.cta':             'Visit synapsis.id →',
    'syn.stat.founded':    'Founded',
    'syn.stat.employees':  'Employees',
    'syn.stat.industries': 'Industries',
    'syn.stat.offices':    'Offices',

    /* Skills */
    'skills.tech.title': 'Technical Skills',
    'skill.iot':         'IoT System Architecture',
    'skill.hw':          'Embedded Hardware Design',
    'skill.ai':          'AI Tools & LLM Applications',
    'skill.plc':         'PLC & SCADA Systems',
    'skills.lang.title': 'Languages',
    'lang.native':       'Native',
    'lang.professional': 'Professional',
    'lang.elementary':   'Elementary',
    'skills.cert.title': 'Certification',
    'cert.plc':          'PLC (Programmable Logic Controller) & SCADA Training',
    'awards.title':      'Honours & Awards',

    /* Awards */
    'award.imagine.title': 'Microsoft Imagine Cup 2018 — World Finalist',
    'award.imagine.sub':   'Indonesia National Winner → APAC Finalist (KL) → World Finals, Redmond WA<br/>49 teams · 33 countries · Microsoft HQ',
    'award.rocket1.title': '1st Winner — National Rocket Competition',
    'award.rocket.sub':    'Rocket Payload Category (Team)',
    'award.rocket2.title': '2nd Winner — National Rocket Competition',
    'award.bronze.title':  'Bronze Medal — National Science Week XVIII',
    'award.bronze.sub':    'Entrepreneurship Category (Team)',
    'award.japan.title':   'Japan-Asia Youth Research Exchange Program',
    'award.japan.sub':     'Awardee in Science · Shizuoka University, Japan',
    'award.venture.title': 'Venture Out 2017 — Research Category Winner',

    /* Education */
    'edu.uom.degree': 'Master of Science — Communication Engineering',
    'edu.uom.desc':   'Postgraduate research in communication engineering. During this period, co-founded Beehive Drones — winning the Indonesia national Imagine Cup, advancing to APAC Finals, and representing Indonesia at the World Finals in Redmond, Washington.',
    'edu.uom.ach':    'Microsoft Imagine Cup 2018 — Indonesia Winner → APAC Finalist → World Finals (Redmond)',
    'edu.ugm.degree': 'Bachelor\'s Degree — Electrical Engineering, Control Systems',
    'edu.ugm.desc':   'Majored in Control System Engineering at one of Indonesia\'s premier engineering faculties. Competed in multiple national science and technology competitions throughout undergraduate years.',
    'edu.ugm.ach':    'Invited Speaker — Studio Generale JTETI UGM, March 2025 · <em>"Membangun Jiwa Kepemimpinan untuk Sukses Berwirausaha"</em>',
    'edu.sma.degree': 'High School — Science',

    /* AI */
    'ai.headline':   'Using AI as leverage — to build faster, decide sharper, <em>and lead better.</em>',
    'ai.p1':         'Coming from a background of making machines communicate through IoT, I see <strong>Artificial Intelligence</strong> as the next frontier: making those systems not just transmit data, but <strong>reason, predict, and act</strong>. The convergence of IoT infrastructure with intelligent AI agents is what I believe will define the next wave of industrial technology in Indonesia and beyond.',
    'ai.p2':         'But my AI interest goes beyond the technical. I\'m actively exploring how <strong>AI reshapes leadership and management</strong> — from AI-augmented decision-making and automated workflows, to how founders can use LLMs as a thinking partner to move faster and scale more intelligently.',
    'ai.card1.title':'LLMs & Agentic AI',
    'ai.card1.desc': 'Exploring how language models automate complex workflows and act as intelligent business agents',
    'ai.card2.title':'AI × IoT Convergence',
    'ai.card2.desc': 'Integrating AI decision layers on top of IoT sensor infrastructure to build truly autonomous systems',
    'ai.card3.title':'AI-Powered Operations',
    'ai.card3.desc': 'Using AI tools to make teams, products, and company decisions faster and more data-driven',

    /* Leadership */
    'lead.headline': 'Leadership isn\'t a title — <em>it\'s a practice.</em>',
    'lead.p1':       'Over six years of building Synapsis from scratch, I\'ve learned that <strong>technology solves problems, but people build companies.</strong> The hardest and most important part of founding a company isn\'t the product — it\'s creating a team with shared vision, the resilience to push through uncertainty, and the culture to keep improving.',
    'lead.p2':       'I write and speak about the management and leadership lessons I\'ve gathered as a founder: from navigating the chaos of early-stage startups to building structured teams as a company scales. My framework is grounded in five pillars that I believe define effective entrepreneurial leaders.',
    'lp.1.title':    'Visionary Thinking',
    'lp.1.desc':     'Recognising market opportunities and adapting ahead of technological change',
    'lp.2.title':    'Risk Management',
    'lp.2.desc':     'Making strategic decisions under uncertainty without being paralysed by it',
    'lp.3.title':    'Innovation Mindset',
    'lp.3.desc':     'Thinking unconventionally to find solutions others don\'t see',
    'lp.4.title':    'Resource Management',
    'lp.4.desc':     'Getting the most from people, capital, and time — especially when all three are scarce',
    'lp.5.title':    'Resilience',
    'lp.5.desc':     'The mental toughness to keep building when things don\'t go as planned',
    'sh.badge':      'Speaker',
    'sh.date':       '13 March 2025 · Yogyakarta',
    'sh.venue':      'Studio Generale — Dept. of Electrical Engineering & Information Technology, Universitas Gadjah Mada',
    'sh.link':       'Read full article →',

    /* Beyond Work */
    'golf.label':    'Golf Enthusiast & Brand Ambassador',
    'golf.title':    'Break 80 Challenge',
    'golf.challenge':'12 courses · 12 months · with <strong>@asiagolfindonesia</strong>',
    'golf.desc':     'Documenting the pursuit of breaking 80 across 12 different courses in Indonesia over 12 months. For me, golf is more than a sport — it\'s a space for meaningful conversations, strategic thinking, and building the kind of relationships that matter.',
    'brands.label':  'Brand Ambassador',
    'writing.label': 'International Publications',
    'writing.desc':  'As an independent analyst on Indonesian politics and society, I contribute to international publications — bringing an on-the-ground perspective on Indonesian elections, Islamic political dynamics, and governance.',
    'article1.title':'Indonesia\'s Presidential Elections Could Set Jakarta Back',
    'article2.title':'Muslims versus Muslims in the 2019 Indonesian Presidential Election',
    'speaker.title': 'Speaker & Mentor',
    'speaker.desc':  'Invited guest speaker at Universitas Gadjah Mada\'s Studio Generale (JTETI Department, March 2025), sharing lessons from building Synapsis with the next generation of engineers — on vision, resilience, risk, and what it actually takes to become an entrepreneurial leader.',

    /* Contact */
    'contact.headline': 'Let\'s Connect',
    'contact.desc':     'Whether you\'re exploring IoT or AI solutions, looking for a collaboration, want to talk leadership, or just need a golf partner in Jakarta — reach out.',
    'contact.email':    'Email',
    'contact.company':  'Company',
    'form.name.label':  'Name',
    'form.name.ph':     'Your full name',
    'form.email.label': 'Email',
    'form.email.ph':    'your@email.com',
    'form.msg.label':   'Message',
    'form.msg.ph':      'What would you like to discuss?',
    'form.submit':      'Send Message',
    'form.sending':     'Sending…',
    'form.sent':        'Message sent. I\'ll be in touch soon.',
    'form.error':       'Something went wrong. Please try again or email me directly.',

    /* Nearon */
    'nearon.badge':            'Flagship Product',
    'nearon.desc':             'The technological core that connects all Synapsis solutions — integrating sensors, gateways, and dashboards into one unified system that captures real-time data. Modular, scalable, and built for Indonesian industry.',
    'nearon.tag1':             '⚡ Real-time Data',
    'nearon.tag2':             '🔗 Open API',
    'nearon.tag3':             '📡 Scalable',
    'nearon.tag4':             '🇮🇩 TKDN Certified',
    'nearon.solutions.label':  'Solutions Powered by Nearon IoT',
    'nearon.dms.title':        'Driver Monitoring System',
    'nearon.dms.desc':         'Detects driver fatigue and tracks operator behaviour in real time to prevent accidents and maintain route compliance.',
    'nearon.ppe.title':        'PPE Detection',
    'nearon.ppe.desc':         'AI-powered identification of helmets, vests, and gloves across work sites — with instant alerts and visual documentation.',
    'nearon.gps.title':        'NearFind — GPS Tracking',
    'nearon.gps.desc':         'Enterprise-grade asset tracking for industrial and logistics operations — full visibility over critical assets, anywhere.',
    'nearon.people.title':     'People Counting',
    'nearon.people.desc':      'AI-driven occupancy tracking via CCTV to optimise energy usage and improve building space utilisation.',
    'nearon.face.title':       'Face Recognition',
    'nearon.face.desc':        'Real-time facial identification through CCTV integration for facility security and unauthorised access prevention.',
    'nearon.dcm.title':        'Data Center Monitoring',
    'nearon.dcm.desc':         'Environmental monitoring for reliable, real-time oversight of data center conditions and infrastructure health.',
    'nearon.solar.title':      'Nearon Solar Mast',
    'nearon.solar.desc':       'Solar-powered portable surveillance platform built for mining sites and remote operations with no grid dependency.',

    /* Footer */
    'footer.copy': '© 2025. Founder & CEO, Synapsis.Id.',
    'footer.top':  '↑ Top',
  },

  id: {
    /* Nav */
    'nav.about':      'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.synapsis':   'Synapsis',
    'nav.skills':     'Keahlian',
    'nav.ai':         'AI',
    'nav.leadership': 'Kepemimpinan',
    'nav.beyond':     'Di Luar Kerja',
    'nav.contact':    'Kontak',
    'nav.education':  'Pendidikan',
    'section.skills': 'Keahlian & Penghargaan',

    /* Hero */
    'hero.headline':    'Pendiri.<br /><em>Insinyur.</em><br />AI-Powered.',
    'hero.desc':        'Saya mendirikan <strong>Synapsis.Id</strong> — penyedia solusi IoT terkemuka di Indonesia. Kini saya memanfaatkan kekuatan AI untuk membangun produk yang lebih cerdas, tim yang lebih tajam, dan masa depan teknologi yang lebih intelligent.',
    'hero.btn.journey': 'Perjalanan Saya',
    'hero.btn.contact': 'Hubungi Saya',

    /* Meta card */
    'meta.role.label':  'Peran',
    'meta.role.value':  'Pendiri & CEO — Synapsis.Id',
    'meta.focus.label': 'Fokus',
    'meta.focus.value': 'AI · IoT · Kepemimpinan',
    'meta.edu.label':   'Pendidikan',
    'meta.base.label':  'Berbasis Di',

    /* About */
    'about.headline': 'Membangun perusahaan, memimpin tim, dan <em>berpikir dengan AI.</em>',
    'about.p1':       'Insinyur IoT yang kini menjadi pendiri perusahaan, berbasis di Jakarta, Indonesia. Saya memiliki gelar <strong>Sarjana Teknik Elektro (Sistem Kendali) dari Universitas Gadjah Mada</strong> dan <strong>Master of Science Teknik Komunikasi dari University of Manchester</strong>.',
    'about.p2':       'Saya adalah <strong>Pendiri Synapsis.Id</strong>, yang saya bangun dari meja hardware — menulis firmware, memasang sensor, merancang perangkat IoT — sebelum mengembangkannya menjadi salah satu penyedia solusi IoT paling dikenal di Indonesia. Keahlian saya mencakup seluruh stack: hardware embedded, konektivitas cloud, dan arsitektur framework IoT end-to-end dari pengukuran fisik hingga antarmuka pengguna.',
    'about.p3':       'Saat ini, saya menerapkan perspektif <strong>Kecerdasan Buatan</strong> dalam cara saya membangun, mengelola, dan memimpin. Saya juga menulis, berbicara, dan terlibat dalam topik manajemen, kepemimpinan, dan kewirausahaan, berdasarkan pengalaman lebih dari enam tahun membangun dan menjalankan perusahaan teknologi dari nol.',
    'pillar.1':       'Pola Pikir Pendiri',
    'pillar.2':       'Arsitektur IoT',
    'pillar.3':       'Membangun dengan AI',
    'pillar.4':       'Kepemimpinan SDM',
    'pillar.5':       'Belajar Berkelanjutan',

    /* Experience */
    'exp.present':         'Sekarang',
    'exp.tag.founder':     'Pendiri',
    'exp.months':          'bulan',
    'exp.years':           'tahun',
    'exp.syn.ceo.title':   'Pendiri & Chief Executive Officer',
    'exp.syn.ceo.desc':    'Mendirikan Synapsis.Id dan memimpinnya sebagai CEO sejak Januari 2020 — mengembangkannya dari venture hardware IoT tahap awal menjadi penyedia solusi IoT terkemuka di Indonesia.',
    'exp.syn.ceo.bullets': '<li>Membangun perusahaan dari nol — dari desain hardware hingga penyedia transformasi digital layanan penuh</li><li>Mendefinisikan strategi produk, roadmap teknologi, dan positioning go-to-market</li><li>Membangun dan memimpin tim lintas fungsi di bidang hardware, software, dan pengembangan bisnis</li><li>Menjadikan Synapsis sebagai penyedia IoT terkemuka di Indonesia</li><li>Saat ini mengintegrasikan kemampuan AI ke dalam strategi produk dan operasi perusahaan</li>',
    'tag.founding':        'Pendirian Perusahaan',
    'tag.team':            'Pengembangan Tim',
    'exp.syn.hw.title':    'Hardware Engineer',
    'exp.syn.hw.desc':     'Insinyur pendiri di Synapsis — terlibat langsung di setiap lapisan stack IoT sebelum beralih ke peran CEO. Pengalaman teknis di lapangan ini langsung membentuk cara saya memimpin arah engineering saat ini.',
    'exp.syn.hw.bullets':  '<li>Merancang dan membangun modul hardware IoT untuk akuisisi data sensor dan transmisi cloud</li><li>Mengembangkan framework IoT skala penuh dari pengukuran fisik hingga antarmuka pengguna</li><li>Memprogram sistem embedded dalam C, C++, dan Python</li>',
    'exp.beehive.title':   'Co-Founder',
    'exp.beehive.desc':    'Co-founder Beehive Drones saat menempuh MSc di University of Manchester — platform drone swarm berbasis IoT untuk pertanian presisi, dirancang untuk mengatasi ketahanan pangan global melalui sistem UAV kooperatif yang dapat diakses via aplikasi mobile.',
    'exp.beehive.bullets': '<li><strong>Microsoft Imagine Cup 2018 — Pemenang Nasional Indonesia</strong> — dipilih dari 5 finalis nasional, memenangkan Rp 10.000.000</li><li><strong>Finalis Asia Pasifik</strong> — mewakili Indonesia di Final APAC, Kuala Lumpur (April 2018), bersaing dengan 15 tim dari 8 negara</li><li><strong>World Finals, Redmond WA</strong> — salah satu dari 49 tim dari 33 negara di Imagine Cup World Finals ke-16 di Microsoft HQ</li><li>Menang Kategori Riset di <strong>Venture Out 2017</strong>, University of Manchester</li><li>Berkembang menjadi penyedia UAV multi-sektor: pertanian, kehutanan, pertambangan, konstruksi</li>',
    'tag.cofounding':      'Co-Founding',
    'exp.psn.title':       'Magang Teknik',
    'exp.psn.desc':        'Berkontribusi pada infrastruktur komunikasi satelit di Departemen Ground Segment PSN, bekerja pada sistem yang menghubungkan daerah terpencil Indonesia.',
    'exp.psn.bullets':     '<li>Bekerja pada infrastruktur ground segment satelit NOAA-19</li><li>Mengenkode dan memproses sinyal Automatic Picture Transmission (APT)</li>',

    /* Synapsis */
    'syn.desc1':           'PT Synapsis Sinergi Digital adalah penyedia solusi IoT end-to-end terkemuka di Indonesia, didirikan pada 2019 dan berkantor pusat di Jakarta Timur. Kami mendukung mitra di berbagai industri dalam mengatasi tantangan operasional dengan teknologi Internet of Things yang canggih dan andal — dari analisis kebutuhan dan desain hardware, hingga prototyping, manufaktur, dan instalasi penuh.',
    'syn.desc2':           'Produk unggulan kami, <strong>Nearon</strong>, adalah platform gateway dan node IoT buatan lokal yang mengkonsolidasikan data dari berbagai sensor ke dalam satu dashboard real-time — dengan notifikasi instan via Email, WhatsApp, dan Telegram. Nearon telah bersertifikasi TKDN, mendukung agenda pengembangan industri nasional Indonesia.',
    'syn.cta':             'Kunjungi synapsis.id →',
    'syn.stat.founded':    'Didirikan',
    'syn.stat.employees':  'Karyawan',
    'syn.stat.industries': 'Industri',
    'syn.stat.offices':    'Kantor',

    /* Skills */
    'skills.tech.title': 'Keahlian Teknis',
    'skill.iot':         'Arsitektur Sistem IoT',
    'skill.hw':          'Desain Hardware Embedded',
    'skill.ai':          'Alat AI & Aplikasi LLM',
    'skill.plc':         'Sistem PLC & SCADA',
    'skills.lang.title': 'Bahasa',
    'lang.native':       'Asli',
    'lang.professional': 'Profesional',
    'lang.elementary':   'Dasar',
    'skills.cert.title': 'Sertifikasi',
    'cert.plc':          'Pelatihan PLC (Programmable Logic Controller) & SCADA',
    'awards.title':      'Penghargaan',

    /* Awards */
    'award.imagine.title': 'Microsoft Imagine Cup 2018 — World Finalist',
    'award.imagine.sub':   'Pemenang Nasional Indonesia → Finalis APAC (KL) → World Finals, Redmond WA<br/>49 tim · 33 negara · Microsoft HQ',
    'award.rocket1.title': 'Juara 1 — Kompetisi Roket Nasional',
    'award.rocket.sub':    'Kategori Muatan Roket (Tim)',
    'award.rocket2.title': 'Juara 2 — Kompetisi Roket Nasional',
    'award.bronze.title':  'Medali Perunggu — Pekan Ilmiah Nasional XVIII',
    'award.bronze.sub':    'Kategori Kewirausahaan (Tim)',
    'award.japan.title':   'Program Pertukaran Penelitian Pemuda Jepang-Asia',
    'award.japan.sub':     'Penerima Beasiswa Ilmu Pengetahuan · Universitas Shizuoka, Jepang',
    'award.venture.title': 'Venture Out 2017 — Pemenang Kategori Riset',

    /* Education */
    'edu.uom.degree': 'Master of Science — Teknik Komunikasi',
    'edu.uom.desc':   'Penelitian pascasarjana di bidang teknik komunikasi. Selama periode ini, co-founder Beehive Drones — memenangkan Imagine Cup tingkat nasional Indonesia, maju ke Final APAC, dan mewakili Indonesia di World Finals di Redmond, Washington.',
    'edu.uom.ach':    'Microsoft Imagine Cup 2018 — Pemenang Indonesia → Finalis APAC → World Finals (Redmond)',
    'edu.ugm.degree': 'Sarjana Teknik — Teknik Elektro, Sistem Kendali',
    'edu.ugm.desc':   'Jurusan Teknik Sistem Kendali di salah satu fakultas teknik terkemuka Indonesia. Mengikuti berbagai kompetisi sains dan teknologi nasional selama tahun sarjana.',
    'edu.ugm.ach':    'Pembicara Tamu — Studio Generale JTETI UGM, Maret 2025 · <em>"Membangun Jiwa Kepemimpinan untuk Sukses Berwirausaha"</em>',
    'edu.sma.degree': 'SMA — IPA',

    /* AI */
    'ai.headline':   'Menggunakan AI sebagai leverage — untuk membangun lebih cepat, memutuskan lebih tajam, <em>dan memimpin lebih baik.</em>',
    'ai.p1':         'Berasal dari latar belakang membuat mesin berkomunikasi melalui IoT, saya melihat <strong>Kecerdasan Buatan</strong> sebagai frontier berikutnya: membuat sistem tersebut tidak hanya mengirimkan data, tetapi <strong>bernalar, memprediksi, dan bertindak</strong>. Konvergensi infrastruktur IoT dengan agen AI yang cerdas adalah apa yang saya yakini akan mendefinisikan gelombang berikutnya dari teknologi industri di Indonesia dan sekitarnya.',
    'ai.p2':         'Namun minat AI saya melampaui aspek teknis. Saya secara aktif mengeksplorasi bagaimana <strong>AI mengubah kepemimpinan dan manajemen</strong> — dari pengambilan keputusan berbasis AI dan alur kerja otomatis, hingga bagaimana para founder dapat menggunakan LLM sebagai mitra berpikir untuk bergerak lebih cepat dan berkembang lebih cerdas.',
    'ai.card1.title':'LLM & AI Agentik',
    'ai.card1.desc': 'Mengeksplorasi bagaimana model bahasa mengotomatiskan alur kerja kompleks dan bertindak sebagai agen bisnis yang cerdas',
    'ai.card2.title':'Konvergensi AI × IoT',
    'ai.card2.desc': 'Mengintegrasikan lapisan keputusan AI di atas infrastruktur sensor IoT untuk membangun sistem yang benar-benar otonom',
    'ai.card3.title':'Operasi Bertenaga AI',
    'ai.card3.desc': 'Menggunakan alat AI untuk membuat tim, produk, dan keputusan perusahaan lebih cepat dan berbasis data',

    /* Leadership */
    'lead.headline': 'Kepemimpinan bukan sebuah jabatan — <em>itu adalah sebuah praktik.</em>',
    'lead.p1':       'Selama enam tahun membangun Synapsis dari nol, saya belajar bahwa <strong>teknologi memecahkan masalah, tetapi manusialah yang membangun perusahaan.</strong> Bagian terberat dan terpenting dari mendirikan perusahaan bukanlah produknya — melainkan menciptakan tim dengan visi bersama, ketangguhan untuk melewati ketidakpastian, dan budaya untuk terus berkembang.',
    'lead.p2':       'Saya menulis dan berbicara tentang pelajaran manajemen dan kepemimpinan yang saya kumpulkan sebagai founder: dari menavigasi kekacauan startup tahap awal hingga membangun tim terstruktur saat perusahaan berkembang. Kerangka saya didasarkan pada lima pilar yang saya yakini mendefinisikan pemimpin entrepreneurial yang efektif.',
    'lp.1.title':    'Pemikiran Visioner',
    'lp.1.desc':     'Mengenali peluang pasar dan beradaptasi mendahului perubahan teknologi',
    'lp.2.title':    'Manajemen Risiko',
    'lp.2.desc':     'Membuat keputusan strategis dalam ketidakpastian tanpa terlumpuhkan olehnya',
    'lp.3.title':    'Pola Pikir Inovasi',
    'lp.3.desc':     'Berpikir secara tidak konvensional untuk menemukan solusi yang tidak dilihat orang lain',
    'lp.4.title':    'Manajemen Sumber Daya',
    'lp.4.desc':     'Memaksimalkan manfaat dari orang, modal, dan waktu — terutama ketika ketiganya langka',
    'lp.5.title':    'Ketangguhan',
    'lp.5.desc':     'Keteguhan mental untuk terus membangun ketika hal-hal tidak berjalan sesuai rencana',
    'sh.badge':      'Pembicara',
    'sh.date':       '13 Maret 2025 · Yogyakarta',
    'sh.venue':      'Studio Generale — Dept. Teknik Elektro & Teknologi Informasi, Universitas Gadjah Mada',
    'sh.link':       'Baca artikel lengkap →',

    /* Beyond Work */
    'golf.label':    'Pecinta Golf & Brand Ambassador',
    'golf.title':    'Break 80 Challenge',
    'golf.challenge':'12 lapangan · 12 bulan · bersama <strong>@asiagolfindonesia</strong>',
    'golf.desc':     'Mendokumentasikan perjalanan memecahkan angka 80 di 12 lapangan golf berbeda di Indonesia dalam 12 bulan. Bagi saya, golf lebih dari sekadar olahraga — ini adalah ruang untuk percakapan bermakna, pemikiran strategis, dan membangun hubungan yang penting.',
    'brands.label':  'Brand Ambassador',
    'writing.label': 'Publikasi Internasional',
    'writing.desc':  'Sebagai analis independen tentang politik dan masyarakat Indonesia, saya berkontribusi pada publikasi internasional — membawa perspektif langsung dari lapangan tentang pemilihan umum Indonesia, dinamika politik Islam, dan tata kelola.',
    'article1.title':'Pemilihan Presiden Indonesia Bisa Menghambat Jakarta',
    'article2.title':'Muslim versus Muslim dalam Pemilihan Presiden Indonesia 2019',
    'speaker.title': 'Pembicara & Mentor',
    'speaker.desc':  'Pembicara tamu undangan di Studio Generale Universitas Gadjah Mada (Departemen JTETI, Maret 2025), berbagi pelajaran dari membangun Synapsis dengan generasi insinyur berikutnya — tentang visi, ketangguhan, risiko, dan apa yang sebenarnya dibutuhkan untuk menjadi pemimpin entrepreneurial.',

    /* Contact */
    'contact.headline': 'Mari Terhubung',
    'contact.desc':     'Apakah Anda sedang mengeksplorasi solusi IoT atau AI, mencari kolaborasi, ingin membicarakan kepemimpinan, atau sekadar membutuhkan partner golf di Jakarta — hubungi saya.',
    'contact.email':    'Email',
    'contact.company':  'Perusahaan',
    'form.name.label':  'Nama',
    'form.name.ph':     'Nama lengkap Anda',
    'form.email.label': 'Email',
    'form.email.ph':    'email@anda.com',
    'form.msg.label':   'Pesan',
    'form.msg.ph':      'Apa yang ingin Anda diskusikan?',
    'form.submit':      'Kirim Pesan',
    'form.sending':     'Mengirim…',
    'form.sent':        'Pesan terkirim. Saya akan segera menghubungi Anda.',
    'form.error':       'Ada kesalahan. Silakan coba lagi atau email saya langsung.',

    /* Nearon */
    'nearon.badge':            'Produk Unggulan',
    'nearon.desc':             'Inti teknologi yang menghubungkan seluruh solusi Synapsis — mengintegrasikan sensor, gateway, dan dashboard ke dalam satu sistem yang menangkap data secara real-time. Modular, skalabel, dan dibangun untuk industri Indonesia.',
    'nearon.tag1':             '⚡ Data Real-time',
    'nearon.tag2':             '🔗 Open API',
    'nearon.tag3':             '📡 Skalabel',
    'nearon.tag4':             '🇮🇩 Bersertifikasi TKDN',
    'nearon.solutions.label':  'Solusi Bertenaga Nearon IoT',
    'nearon.dms.title':        'Driver Monitoring System',
    'nearon.dms.desc':         'Mendeteksi kelelahan pengemudi dan memantau perilaku operator secara real-time untuk mencegah kecelakaan dan memastikan kepatuhan rute.',
    'nearon.ppe.title':        'Deteksi APD',
    'nearon.ppe.desc':         'Identifikasi helm, rompi, dan sarung tangan berbasis AI di seluruh lokasi kerja — dengan peringatan instan dan dokumentasi visual.',
    'nearon.gps.title':        'NearFind — GPS Tracking',
    'nearon.gps.desc':         'Pelacakan aset tingkat enterprise untuk operasi industri dan logistik — visibilitas penuh atas aset penting, di mana saja.',
    'nearon.people.title':     'People Counting',
    'nearon.people.desc':      'Pemantauan hunian berbasis AI melalui CCTV untuk mengoptimalkan penggunaan energi dan utilisasi ruang gedung.',
    'nearon.face.title':       'Face Recognition',
    'nearon.face.desc':        'Identifikasi wajah real-time melalui integrasi CCTV untuk keamanan fasilitas dan pencegahan akses tidak sah.',
    'nearon.dcm.title':        'Data Center Monitoring',
    'nearon.dcm.desc':         'Solusi pemantauan lingkungan untuk pengawasan kondisi dan infrastruktur data center secara real-time yang andal.',
    'nearon.solar.title':      'Nearon Solar Mast',
    'nearon.solar.desc':       'Platform pengawasan portabel bertenaga surya yang dirancang untuk lokasi tambang dan operasi terpencil tanpa ketergantungan jaringan listrik.',

    /* Footer */
    'footer.copy': '© 2025. Pendiri & CEO, Synapsis.Id.',
    'footer.top':  '↑ Atas',
  }
};

/* ── STORAGE (safe wrapper) ── */
function safeGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function safeSet(key, val) { try { localStorage.setItem(key, val); } catch {} }

/* ── STATE ── */
// First visit: respect system color-scheme preference; otherwise use saved pref
const _savedTheme = safeGet('theme');
const _prefDark   = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentLang   = safeGet('lang')  || 'en';
let currentTheme  = _savedTheme || (_prefDark ? 'dark' : 'light');

/* ── APPLY LANGUAGE ── */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Always keep footer year current (survives language re-apply)
  const footerCopyEl = document.querySelector('.footer-copy');
  if (footerCopyEl) {
    footerCopyEl.textContent = footerCopyEl.textContent.replace(/\d{4}/, new Date().getFullYear());
  }

  currentLang = lang;
  safeSet('lang', lang);
}

/* ── APPLY THEME ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  safeSet('theme', theme);
}

/* ── INIT ── */
applyTheme(currentTheme);
applyLanguage(currentLang);

/* ── THEME TOGGLE ── */
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ── LANGUAGE TOGGLE ── */
document.getElementById('langSwitcher').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  const lang = btn.getAttribute('data-lang');
  if (lang && lang !== currentLang) applyLanguage(lang);
});

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── MOBILE NAV ── */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el   = entry.target;
    const sibs = Array.from(el.parentElement.querySelectorAll('.reveal'));
    const idx  = sibs.indexOf(el);
    el.style.transitionDelay = `${idx * 0.07}s`;
    el.classList.add('visible');
    revealObs.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { threshold: 0.45 });

sections.forEach(s => sectionObs.observe(s));

/* ── SKILL BAR ANIMATION ── */
const skillFills = document.querySelectorAll('.skill-fill');
const skillObs   = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('animated');
    skillObs.unobserve(entry.target);
  });
}, { threshold: 0.5 });
skillFills.forEach(el => skillObs.observe(el));

/* ── CONTACT FORM ── */
const form    = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  const t   = translations[currentLang];
  btn.innerHTML = t['form.sending'] || 'Sending…';
  btn.disabled  = true;
  formMsg.textContent = '';
  formMsg.className   = '';

  try {
    const res = await fetch('https://formspree.io/f/mwvnrkkq', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name:    form.querySelector('#fname').value,
        email:   form.querySelector('#femail').value,
        message: form.querySelector('#fmessage').value,
      }),
    });

    if (res.ok) {
      formMsg.textContent = t['form.sent'] || 'Message sent. I\'ll be in touch soon.';
      formMsg.className   = 'form-msg-success';
      form.reset();
      setTimeout(() => { formMsg.textContent = ''; formMsg.className = ''; }, 6000);
    } else {
      const data = await res.json().catch(() => ({}));
      const errText = (data.errors && data.errors.map(err => err.message).join(', ')) ||
                      t['form.error'] || 'Something went wrong. Please try again.';
      formMsg.textContent = errText;
      formMsg.className   = 'form-msg-error';
    }
  } catch {
    formMsg.textContent = t['form.error'] || 'Something went wrong. Please try again.';
    formMsg.className   = 'form-msg-error';
  }

  btn.innerHTML = `<span>${t['form.submit'] || 'Send Message'}</span><span class="btn-arrow">→</span>`;
  btn.disabled  = false;
});

/* ── HERO PARALLAX (desktop / hover-capable only) ── */
const heroSection = document.getElementById('hero');
const canHover    = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
heroSection && heroSection.addEventListener('mousemove', e => {
  if (!canHover()) return;
  const x    = (e.clientX / window.innerWidth  - 0.5) * 20;
  const y    = (e.clientY / window.innerHeight - 0.5) * 12;
  const card = heroSection.querySelector('.hero-card');
  if (card) card.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});
heroSection && heroSection.addEventListener('mouseleave', () => {
  const card = heroSection.querySelector('.hero-card');
  if (card) card.style.transform = '';
});

/* ── SECURITY: rel on all external links ── */
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.setAttribute('rel', 'noopener noreferrer');
});

/* ── SCROLL PROGRESS BAR ── */
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
  }, { passive: true });
}

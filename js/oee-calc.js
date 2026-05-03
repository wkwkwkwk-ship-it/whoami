var OEE_ARC = Math.PI * 80;

function oeeSlider(el) {
  if (typeof el === 'string') el = document.getElementById(el);
  if (!el) return;
  var min = parseFloat(el.min) || 0;
  var max = parseFloat(el.max) || 100;
  var pct = max > min ? ((parseFloat(el.value) - min) / (max - min)) * 100 : 0;
  var cs     = getComputedStyle(document.documentElement);
  var accent = cs.getPropertyValue('--accent').trim() || '#c9a96e';
  var track  = cs.getPropertyValue('--border').trim()  || '#222224';
  el.style.background = 'linear-gradient(to right,' + accent + ' ' + pct + '%,' + track + ' ' + pct + '%)';
}

function oeeCalc() {
  var planned  = parseFloat(document.getElementById('n-planned').value)  || 0;
  var downtime = parseFloat(document.getElementById('n-downtime').value) || 0;
  var idealSpd = parseFloat(document.getElementById('n-ideal').value)    || 0;
  var totalOut = parseFloat(document.getElementById('n-output').value)   || 0;
  var rejects  = parseFloat(document.getElementById('n-rejects').value)  || 0;
  var price    = parseFloat(document.getElementById('n-price').value)    || 0;
  var shifts   = parseFloat(document.getElementById('n-shifts').value)   || 1;

  if (planned <= 0 || idealSpd <= 0) return;

  var runTime = Math.max(0, planned - downtime);
  var avail   = runTime / planned;
  var perfMax = runTime * idealSpd;
  var perf    = perfMax > 0 ? Math.min(1, totalOut / perfMax) : 0;
  var goodOut = Math.max(0, totalOut - rejects);
  var qual    = totalOut > 0 ? goodOut / totalOut : 1;
  var oee     = avail * perf * qual;

  function f1(n) { return n.toFixed(1) + '%'; }
  function fmtRp(n) {
    var abs = Math.abs(Math.round(n));
    if (abs >= 1e12) return 'Rp ' + (n / 1e12).toFixed(1).replace('.', ',') + ' T';
    if (abs >= 1e9)  return 'Rp ' + (n / 1e9).toFixed(1).replace('.', ',') + ' M';
    try { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); }
    catch (e) { return 'Rp ' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  }
  function fmtU(n) {
    try { return Math.round(n).toLocaleString('id-ID') + ' unit'; }
    catch (e) { return Math.round(n) + ' unit'; }
  }

  document.getElementById('res-avail').textContent = f1(avail * 100);
  document.getElementById('res-perf').textContent  = f1(perf  * 100);
  document.getElementById('res-qual').textContent  = f1(qual  * 100);

  var arc    = document.getElementById('gauge-arc');
  var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c9a96e';
  arc.setAttribute('stroke-dasharray', (oee * OEE_ARC).toFixed(1) + ' 252');
  var gaugeColor = oee >= 0.85 ? '#22c55e' : oee >= 0.75 ? accent : oee >= 0.60 ? '#d4a017' : '#ef4444';
  arc.style.stroke = gaugeColor;
  var gVal = document.getElementById('gauge-val');
  gVal.textContent = f1(oee * 100);
  gVal.style.fill  = gaugeColor;

  var badge = document.getElementById('oee-badge');
  var desc  = document.getElementById('oee-benchmark-desc');
  badge.className = 'oee-badge';
  var gap = ((0.85 - oee) * 100).toFixed(1);
  if (oee >= 0.85) {
    badge.classList.add('oee-badge--worldclass');
    badge.textContent = 'World Class';
    desc.textContent  = 'OEE Anda sudah di level world-class (≥85%). Fokus pada stabilisasi dan replikasi praktik terbaik ke lini produksi lainnya.';
  } else if (oee >= 0.75) {
    badge.classList.add('oee-badge--excellent');
    badge.textContent = 'Excellent';
    desc.textContent  = 'Di atas rata-rata industri. Gap ' + gap + ' poin dari world-class — ada ruang optimasi yang bisa memberikan impact signifikan.';
  } else if (oee >= 0.60) {
    badge.classList.add('oee-badge--average');
    badge.textContent = 'Rata-rata';
    desc.textContent  = 'Tipikal untuk manufaktur konvensional. Gap ' + gap + ' poin dari world-class — berpotensi menghasilkan penghematan besar jika dioptimasi.';
  } else {
    badge.classList.add('oee-badge--below');
    badge.textContent = 'Di bawah Rata-rata';
    desc.textContent  = 'Ada masalah sistemik yang perlu diidentifikasi terlebih dahulu. Gap ' + gap + ' poin dari world-class. Prioritaskan root cause analysis sebelum investasi teknologi baru.';
  }

  if (price > 0) {
    var maxOut    = planned * idealSpd;
    var lostUnits = Math.max(0, maxOut - goodOut);
    var lostShift = lostUnits * price;
    var lostYear  = lostShift * shifts * 250;
    document.getElementById('res-lost-units').textContent = fmtU(lostUnits) + '/shift';
    document.getElementById('res-lost-shift').textContent = fmtRp(lostShift) + '/shift';
    document.getElementById('res-lost-year').textContent  = fmtRp(lostYear) + '/tahun';
    document.getElementById('oee-revenue-block').style.display = 'block';
  } else {
    document.getElementById('oee-revenue-block').style.display = 'none';
  }
}

function oeeBind(numId, rangeId) {
  var num = document.getElementById(numId);
  var rng = document.getElementById(rangeId);
  if (!num || !rng) return;
  num.addEventListener('input', function () {
    rng.value = this.value;
    oeeSlider(rng);
    oeeCalc();
  });
  rng.addEventListener('input', function () {
    num.value = this.value;
    oeeSlider(this);
    oeeCalc();
  });
  oeeSlider(rng);
}

document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('n-planned')) return;
  oeeBind('n-planned',  'r-planned');
  oeeBind('n-downtime', 'r-downtime');
  oeeBind('n-ideal',    'r-ideal');
  oeeBind('n-output',   'r-output');
  oeeBind('n-rejects',  'r-rejects');
  oeeBind('n-price',    'r-price');
  oeeBind('n-shifts',   'r-shifts');
  oeeCalc();
});

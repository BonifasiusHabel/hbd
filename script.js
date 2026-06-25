/* ============================================================
   GESTI WEBSITE — script.js
   ============================================================ */

/* ── Dates ── */
const BDAY_DATE  = new Date('2026-06-20T00:00:00+07:00');
const ANNI_DATE  = new Date('2026-06-28T00:00:00+07:00');
const BORN_DATE  = new Date('2008-06-26T00:00:00+07:00');
const ANNI_START = new Date('2024-06-28T00:00:00+07:00');

/* ── 24 Months journey data ── */
const MONTHS = [
  { label:'Juni 2024',      caption:'Awal dari segalanya 🌱',                  photo:'photos/1.jpg' },
  { label:'Juli 2024',      caption:'Masih baru, tapi sudah terasa hangat 🌸', photo:'photos/2.jpg' },
  { label:'Agustus 2024',   caption:'Pelan-pelan saling mengenal 💕',           photo:'photos/3.jpeg' },
  { label:'September 2024', caption:'Setiap hari makin menyenangkan ✨',        photo:'photos/4.jpeg' },
  { label:'Oktober 2024',   caption:'Bulan yang penuh kejutan kecil 🍂',        photo:'photos/5.jpeg' },
  { label:'November 2024',  caption:'Tetap bersama meski hujan 🌧️',             photo:'photos/6.jpeg' },
  { label:'Desember 2024',  caption:'Akhir tahun yang hangat bersamamu 🎄',     photo:'photos/7.jpeg' },
  { label:'Januari 2025',   caption:'Tahun baru, bersama orang yang sama 🥂',   photo:'photos/8.jpeg' },
  { label:'Februari 2025',  caption:'Valentine pertama kita 💝',                photo:'photos/9.jpeg' },
  { label:'Maret 2025',     caption:'Momen-momen kecil yang tak terlupakan 🌼', photo:'photos/10.jpeg' },
  { label:'April 2025',     caption:'Tawa yang selalu aku rindukan 😊',         photo:'photos/11.jpeg' },
  { label:'Mei 2025',       caption:'Bersamamu, semuanya terasa lebih mudah 🌺',photo:'photos/12.jpeg' },
  { label:'Juni 2025',      caption:'Setahun sudah, dan semakin sayang 🎂',     photo:'photos/13.jpeg' },
  { label:'Juli 2025',      caption:'Masih di sini, masih bersama 💑',          photo:'photos/14.jpeg' },
  { label:'Agustus 2025',   caption:'Kenangan demi kenangan yang kita ciptakan 📸', photo:'photos/15.jpeg' },
  { label:'September 2025', caption:'Rumah terasa di mana pun kamu ada 🏠',     photo:'photos/16.jpeg' },
  { label:'Oktober 2025',   caption:'Bersama melewati apa saja 🍁',             photo:'photos/17.jpeg' },
  { label:'November 2025',  caption:'Terima kasih sudah selalu ada 🌙',         photo:'photos/18.mp4' },
  { label:'Desember 2025',  caption:'Dua tahun semakin dekat ❄️',               photo:'photos/19.jpeg' },
  { label:'Januari 2026',   caption:'Awal tahun yang aku syukuri bersamamu 🌅', photo:'photos/20.jpeg' },
  { label:'Februari 2026',  caption:'Valentine kedua, makin dalam rasa ini 💕', photo:'photos/21.jpeg' },
  { label:'Maret 2026',     caption:'Tiap hari bersamamu selalu cukup 🌸',      photo:'photos/22.jpeg' },
  { label:'April 2026',     caption:'Countdown menuju dua tahun yang indah 🌷', photo:'photos/23.mp4' },
  { label:'Mei 2026',       caption:'Satu langkah lagi menuju hari itu ✨',     photo:'photos/24.jpeg' },
];

/* ============================================================
   PAGE STATE
   ============================================================ */
function getState() {
  const now = new Date();
  if (now >= ANNI_DATE) return 'anniversary';
  if (now >= BDAY_DATE) return 'birthday';
  return 'locked';
}

/* ============================================================
   LOCKED SCREEN
   ============================================================ */
function initLocked() {
  document.getElementById('locked-screen').classList.remove('hidden');
  const now = new Date();
  const next = now < BDAY_DATE ? BDAY_DATE : ANNI_DATE;

  document.getElementById('lock-message').textContent = now < BDAY_DATE
    ? 'Website ini akan terbuka pada 26 Juni 2026 — hari ulang tahunmu yang ke-18. Tunggu ya, sayangg! 🎂'
    : 'Ada lanjutannyaa niii, tunggu sebentar lagi ya! 💑';

  const wrap = document.getElementById('lock-hearts');
  ['🌸','💕','🌷','✨','💖','🌺'].forEach(e => {
    for (let j = 0; j < 3; j++) {
      const el = document.createElement('span');
      el.className = 'fheart';
      el.textContent = e;
      el.style.cssText = `left:${Math.random()*100}vw;font-size:${.8+Math.random()*1.2}rem;animation-duration:${5+Math.random()*8}s;animation-delay:${Math.random()*8}s`;
      wrap.appendChild(el);
    }
  });

  const tick = () => {
    const d = next - new Date();
    if (d <= 0) { clearInterval(iv); location.reload(); return; }
    document.getElementById('lt-days').textContent    = pad(Math.floor(d/86400000));
    document.getElementById('lt-hours').textContent   = pad(Math.floor(d%86400000/3600000));
    document.getElementById('lt-minutes').textContent = pad(Math.floor(d%3600000/60000));
    document.getElementById('lt-seconds').textContent = pad(Math.floor(d%60000/1000));
  };
  tick();
  const iv = setInterval(tick, 1000);
}

/* ============================================================
   BIRTHDAY PAGE
   ============================================================ */
function initBirthday() {
  document.getElementById('birthday-page').classList.remove('hidden');
  document.getElementById('days-alive').textContent = Math.floor((new Date()-BORN_DATE)/86400000).toLocaleString('id-ID');
  launchConfetti();
  // renderWishes() dihapus — wishes-grid tidak ada di halaman ini

  const tick = () => {
    const d = ANNI_DATE - new Date();
    if (d <= 0) return;
    document.getElementById('t2-h').textContent = pad(Math.floor(d%86400000/3600000));
    document.getElementById('t2-m').textContent = pad(Math.floor(d%3600000/60000));
    document.getElementById('t2-s').textContent = pad(Math.floor(d%60000/1000));
  };
  tick(); setInterval(tick, 1000);
  initReveal();
}

/* ============================================================
   ANNIVERSARY PAGE
   ============================================================ */
function initAnniversary() {
  document.getElementById('anniversary-page').classList.remove('hidden');

  const diff = new Date() - ANNI_START;
  animNum('st-days',  Math.floor(diff/86400000));
  animNum('st-hours', Math.floor(diff/3600000));
  animNum('st-mins',  Math.floor(diff/60000));

  renderJourney();
  initLightbox();
  initReveal();
}

/* ============================================================
   ZIG-ZAG JOURNEY
   ============================================================ */
function isVideo(src) {
  return typeof src === 'string' && /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(src);
}

function renderJourney() {
  const container = document.getElementById('journey-path');
  if (!container) return;

  MONTHS.forEach((m, i) => {
    const node = document.createElement('div');
    node.className = `month-node${i%2===1?' right':''}`;
    node.style.animationDelay = (i*0.06)+'s';

    const photoInner = m.photo
      ? isVideo(m.photo)
        ? `<video src="${m.photo}" muted loop playsinline preload="metadata"></video>`
        : `<img src="${m.photo}" alt="${m.label}" />`
      : `<div class="node-photo-placeholder"><span>📷</span><small>Bulan ${i+1}</small></div>`;

    node.innerHTML = `
      <div class="node-photo${isVideo(m.photo)?' video':''}" data-idx="${i}"${m.photo?` data-src="${m.photo}"`:''}>
        ${photoInner}
      </div>
      <div class="node-dot"></div>
      <div class="node-info">
        <p class="node-month-num">Bulan ke-${i+1}</p>
        <p class="node-month-name">${m.label}</p>
        <p class="node-caption">${m.caption}</p>
      </div>`;
    container.appendChild(node);
  });
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function initLightbox() {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" id="lb-close">✕</button>
    <div class="lightbox-media" id="lb-media"></div>
    <p class="lightbox-caption" id="lb-caption"></p>
  `;
  document.body.appendChild(lb);

  document.getElementById('lb-close').onclick = closeLB;
  lb.onclick = e => { if (e.target === lb) closeLB(); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

  document.querySelectorAll('.node-photo[data-src]').forEach(el => {
    el.addEventListener('click', () => {
      const m = MONTHS[parseInt(el.dataset.idx)];
      const media = document.getElementById('lb-media');
      if (!media) return;
      media.innerHTML = isVideo(m.photo)
        ? `<video src="${m.photo}" controls autoplay muted playsinline></video>`
        : `<img src="${m.photo}" alt="${m.label}" />`;
      document.getElementById('lb-caption').textContent = `${m.label} — ${m.caption}`;
      document.getElementById('lightbox').classList.add('open');
    });
  });
}

function closeLB() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

/* ============================================================
   HELPERS
   ============================================================ */
function pad(n) { return String(n).padStart(2,'0'); }

function animNum(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const dur = 1800, t0 = performance.now();
  const step = now => {
    const p = Math.min((now-t0)/dur, 1);
    const e = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(e*target).toLocaleString('id-ID');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function launchConfetti() {
  const area = document.getElementById('confetti');
  if (!area) return;
  const cols = ['#f9cfd8','#f0a0b4','#e8738a','#f0e8f8','#fde8e0','#fdeef1','#ffffff'];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.className = 'cp';
    const size = 6 + Math.random() * 8;
    el.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*-20}%;width:${size}px;height:${size}px;background:${cols[Math.floor(Math.random()*cols.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${4+Math.random()*6}s;animation-delay:${Math.random()*6}s;animation-iteration-count:infinite;`;
    area.appendChild(el);
  }
}

function initReveal() {
  document.querySelectorAll('.section,.letter-card,.stat-card,.age-card,.teaser-card,.month-node').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const s = getState();
  if      (s === 'locked')      initLocked();
  else if (s === 'birthday')    initBirthday();
  else if (s === 'anniversary') initAnniversary();
});

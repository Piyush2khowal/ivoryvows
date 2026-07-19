/* ============ Ivory Vows — Interactions ============ */
(function () {
  'use strict';

  const WA_NUMBER = '919354810893';

  /* ---- Shared spec defaults ---- */
  const PAPER_PREMIUM = '300gsm Italian textured cotton, hot-foil ready';
  const PAPER_BOARD   = '5mm acrylic / foam-mounted matte board';
  const DELIVERY      = '10–14 working days (rush available)';
  const CUSTOM_DIGI   = ['Names, dates & venue text', 'Color palette & motifs', 'Language & script', 'Monogram crest', 'Animated reveal (digital)'];
  const CUSTOM_PRINT  = ['Foil colour (gold / rose / silver)', 'Paper finish & weight', 'Envelope liner & seal', 'Edge painting & deckle edge'];

  function img(id, w){ return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||1000}&q=80`; }

  /* ---- Product Catalogue ---- */
  const digital = [
    { slug:'save-the-date', t:'Save The Date', price:999, d:'Announce the date with quiet elegance — a refined digital reveal for your closest circle.',
      hero:'1607190074257-dd4b7af0309f', gal:['1607190074257-dd4b7af0309f','1525772764200-be829a350797','1606800052052-a08af7148866','1511795409834-ef04bbd61622'],
      size:'1080×1920 vertical / 1080×1080 square', paper:'Digital — MP4 / animated PDF', features:['HD animated reveal','Personalised typography','Whatsapp-ready format','Music score included'] },
    { slug:'engagement', t:'Engagement Invitation', price:1499, d:'A tailored invitation to your first celebration — soft florals, gilded edges and modern script.',
      hero:'1525772764200-be829a350797', gal:['1525772764200-be829a350797','1607190074257-dd4b7af0309f','1606293459339-aa5d34a7b0e1','1519225421980-715cb0215aed'],
      size:'1080×1920 digital · 5×7 in print option', paper:PAPER_PREMIUM, features:['Bespoke illustration','Foil-style accents','Couple monogram','Matching RSVP'] },
    { slug:'wedding-invite', t:'Wedding Invitation', price:2499, d:'The centerpiece of your suite — a heirloom-grade invitation crafted with foil, fibre and detail.',
      hero:'1511795409834-ef04bbd61622', gal:['1511795409834-ef04bbd61622','1519225421980-715cb0215aed','1464366400600-7168b8af9bc3','1530023367847-a683933f4172'],
      size:'5×7 in or 6×9 in suite', paper:PAPER_PREMIUM, features:['Hot-foil stamping','Hand-deckled edges','Wax seal & ribbon','Lined envelope'] },
    { slug:'reception', t:'Reception Invite', price:1999, d:'Elevate the evening with a tailored, modern design — perfect for cocktail and sit-down soirées.',
      hero:'1519225421980-715cb0215aed', gal:['1519225421980-715cb0215aed','1530023367847-a683933f4172','1606800052052-a08af7148866','1511795409834-ef04bbd61622'],
      size:'5×7 in print · 1080×1920 digital', paper:PAPER_PREMIUM, features:['Evening-tone palette','Foil monogram','QR for live updates','Coordinated menu'] },
    { slug:'mehendi', t:'Mehendi Invite', price:1299, d:'Vibrant, traditional and beautifully detailed — alive with paisleys, mirror-work motifs and joy.',
      hero:'1610030469983-98e550d6193c', gal:['1610030469983-98e550d6193c','1604017011826-d3b4c23f8914','1525772764200-be829a350797','1606293459339-aa5d34a7b0e1'],
      size:'1080×1920 digital · 5×7 in print', paper:PAPER_PREMIUM, features:['Custom henna motifs','Bright jewel palette','Animated digital option','Matching welcome card'] },
    { slug:'haldi', t:'Haldi Invite', price:1199, d:'A burst of golden warmth for your morning ritual — joyful florals and a sun-drenched palette.',
      hero:'1604017011826-d3b4c23f8914', gal:['1604017011826-d3b4c23f8914','1610030469983-98e550d6193c','1606800052052-a08af7148866','1607190074257-dd4b7af0309f'],
      size:'1080×1920 digital · 5×7 in print', paper:PAPER_PREMIUM, features:['Marigold accents','Golden foil details','Couple illustration','Matching favour tags'] },
    { slug:'rsvp', t:'RSVP Card', price:799, d:'Effortless replies, beautifully presented — a designed companion to your invitation suite.',
      hero:'1606293459339-aa5d34a7b0e1', gal:['1606293459339-aa5d34a7b0e1','1607190074257-dd4b7af0309f','1525772764200-be829a350797','1519225421980-715cb0215aed'],
      size:'3.5×5 in card', paper:PAPER_PREMIUM, features:['Printed reply card','Meal selection lines','QR digital reply','Pre-addressed envelope'] }
  ];

  const stationery = [
    { slug:'welcome-board', t:'Welcome Board', price:799, d:'Greet guests with grandeur — a sculpted entryway statement in acrylic, mirror or wood.',
      hero:'1519741497674-611481863552', gal:['1519741497674-611481863552','1606800052052-a08af7148866','1464366400600-7168b8af9bc3','1530023367847-a683933f4172'],
      size:'24×36 in or 30×48 in', paper:PAPER_BOARD, features:['Vinyl or foil lettering','Acrylic / mirror / wood','Easel or stand included','Florist-ready edges'] },
    { slug:'seating-chart', t:'Seating Chart', price:1499, d:'Calligraphed arrangements, beautifully displayed — a calm welcome to the celebration ahead.',
      hero:'1464366400600-7168b8af9bc3', gal:['1464366400600-7168b8af9bc3','1519741497674-611481863552','1606800052052-a08af7148866','1530023367847-a683933f4172'],
      size:'30×40 in standard', paper:PAPER_BOARD, features:['Alphabetical / table-wise','Calligraphy printing','Easy on-site updates','Frame & stand options'] },
    { slug:'menu-card', t:'Menu Card', price:699, d:'Tableside design that delights — printed on textured stock with optional foil headings.',
      hero:'1530023367847-a683933f4172', gal:['1530023367847-a683933f4172','1606800052052-a08af7148866','1607190074257-dd4b7af0309f','1519225421980-715cb0215aed'],
      size:'4×9 in or 5×7 in', paper:PAPER_PREMIUM, features:['Per-table or per-guest','Multi-course layout','Foil headings','Coordinated palette'] },
    { slug:'thank-you-card', t:'Thank You Card', price:599, d:'A lasting note of gratitude — folded, foiled and presented in matching envelopes.',
      hero:'1606293459339-aa5d34a7b0e1', gal:['1606293459339-aa5d34a7b0e1','1607190074257-dd4b7af0309f','1525772764200-be829a350797','1606800052052-a08af7148866'],
      size:'4×6 in folded', paper:PAPER_PREMIUM, features:['Photo or illustrated','Foil thank-you script','Lined envelope','Bulk pricing available'] },
    { slug:'gift-tag', t:'Gift Tag', price:299, d:'Small details, exquisitely finished — looped with ribbon and ready for return-gift boxes.',
      hero:'1607190074257-dd4b7af0309f', gal:['1607190074257-dd4b7af0309f','1606800052052-a08af7148866','1530023367847-a683933f4172','1519225421980-715cb0215aed'],
      size:'2×3.5 in', paper:'350gsm cotton card, satin ribbon', features:['Foil monogram','Satin ribbon tie','Set of 25 / 50 / 100','Custom shapes'] },
    { slug:'table-number', t:'Table Number', price:499, d:'Sculpted with foil and care — a quiet anchor for every table arrangement.',
      hero:'1478146896981-b80fe463b330', gal:['1478146896981-b80fe463b330','1530023367847-a683933f4172','1606800052052-a08af7148866','1519225421980-715cb0215aed'],
      size:'5×7 in tented or flat', paper:'Acrylic / textured card', features:['Foil numerals','Acrylic or card','Custom naming (e.g. cities)','Stand included'] }
  ];

  const gallery = [
    '1519741497674-611481863552','1606800052052-a08af7148866','1511795409834-ef04bbd61622',
    '1607190074257-dd4b7af0309f','1525772764200-be829a350797','1464366400600-7168b8af9bc3',
    '1519225421980-715cb0215aed','1606293459339-aa5d34a7b0e1','1530023367847-a683933f4172'
  ];

  const allProducts = [...digital, ...stationery];
  const bySlug = Object.fromEntries(allProducts.map(p => [p.slug, p]));

  /* ---- Generate 12 design variants per category (shown in the designs grid) ---- */
  const STYLE_NAMES = [
    { n: 'Blush Floral',     mult: 1.00 },
    { n: 'Gold Elegance',    mult: 1.14 },
    { n: 'Minimal Leaf',     mult: 0.87 },
    { n: 'Royal Velvet',     mult: 1.47 },
    { n: 'Watercolor Dreams',mult: 1.00 },
    { n: 'Acrylic Chic',     mult: 1.27 },
    { n: 'Vintage Charm',    mult: 0.93 },
    { n: 'Garden Romance',   mult: 1.13 },
    { n: 'Boho Pampas',      mult: 1.00 },
    { n: 'Lavender Love',    mult: 1.00 },
    { n: 'Monogram Classic', mult: 1.20 },
    { n: 'Tropical Bliss',   mult: 1.00 },
  ];
  const IMG_POOL = [
    '1607190074257-dd4b7af0309f','1525772764200-be829a350797','1606800052052-a08af7148866',
    '1511795409834-ef04bbd61622','1606293459339-aa5d34a7b0e1','1519225421980-715cb0215aed',
    '1464366400600-7168b8af9bc3','1530023367847-a683933f4172','1610030469983-98e550d6193c',
    '1604017011826-d3b4c23f8914','1519741497674-611481863552','1478146896981-b80fe463b330',
    '1721176487015-5408ae0e9bc2','1632610992723-82d7c212f6d7','1553013983-15241ab69e57',
    '1656104717095-9d062b0d4e8d','1697217866029-2aef7068ecee','1633037773384-27d7ac0491e7',
    '1634055980590-1a44e5a8b3e4','1596751303335-ca42b3ca50c1','1646577132148-bab82662f86c',
    '1612619732485-1ae018b63c55','1633008460512-624a321c15b6','1612619733782-0aab4b31d10f',
    '1641317136698-284db1e10c1b','1674227832118-df9f372bff25','1520245787685-fb1e6732fb76',
    '1684833685209-0f23802f7d40','1509316554658-04f9287cdb78','1563225409-127c18758bd5',
    '1659651224759-67313ffa509c','1684833757559-269b96781804','1710961716370-dfff65e2ba0c',
    '1708601420794-abfc8e8e514b','1758825178518-ca48833a6c57','1710961716482-2e9bbc146e73',
    '1505366055494-2268a382e017','1680090966820-b7d2fae52f5d','1621877504328-8c802bef9614'
  ];
  // Deterministic per-category shuffle so each category draws its own distinct
  // slice of the pool instead of every category showing the same photos.
  function seededShuffle(arr, seed) {
    const a = arr.slice();
    let s = seed % 2147483647 || 1;
    for (let i = a.length - 1; i > 0; i--) {
      s = (s * 48271) % 2147483647;
      const j = Math.floor((s / 2147483647) * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function roundPrice(v){ return Math.round(v / 50) * 50 - 1; } // e.g. 1499, 1699
  allProducts.forEach((p, pi) => {
    const order = seededShuffle(IMG_POOL, pi * 97 + 13);
    p.designs = STYLE_NAMES.map((s, i) => {
      const hero = order[i % order.length];
      const gal = [1,2,3,4].map(k => order[(i + k) % order.length]);
      return {
        id: `${p.slug}-${i + 1}`,
        name: s.n,
        price: Math.max(299, roundPrice(p.price * s.mult)),
        d: `A ${s.n.toLowerCase()} take on the ${p.t.toLowerCase()}, with elegant typography and refined detailing.`,
        hero, gal,
      };
    });
  });

  /* ---- Render cards ---- */
  function renderCards(items, mount) {
    document.getElementById(mount).innerHTML = items.map(i => `
      <article class="card reveal" data-slug="${i.slug}" tabindex="0" role="button" aria-label="${i.t} — view details">
        <div class="card-img"><img src="${img(i.hero, 800)}" alt="${i.t}" loading="lazy"/></div>
        <div class="card-body">
          <span class="card-tag">Ivory Vows</span>
          <h3>${i.t}</h3>
          <p>${i.d}</p>
          <span class="card-price">From ₹${i.price.toLocaleString('en-IN')}</span>
        </div>
      </article>`).join('');
  }
  renderCards(digital, 'digitalGrid');
  renderCards(stationery, 'stationeryGrid');

  /* ---- Gallery removed ---- */


  /* ---- Lightbox ---- */
  const lb = document.getElementById('lightbox'),
        lbImg = document.getElementById('lbImg'),
        lbClose = document.getElementById('lbClose');
  document.querySelectorAll('.masonry img').forEach(im => {
    im.addEventListener('click', () => { lbImg.src = im.src; lb.classList.add('open'); });
  });
  const closeLB = () => lb.classList.remove('open');
  lbClose.addEventListener('click', closeLB);
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });

  /* ---- Category Designs Grid Modal ---- */
  const cm = document.getElementById('categoryModal'),
        cmClose = document.getElementById('cmClose'),
        cmBreadcrumb = document.getElementById('cmBreadcrumb'),
        cmTitle = document.getElementById('cmTitle'),
        cmSubtitle = document.getElementById('cmSubtitle'),
        cmCount = document.getElementById('cmCount'),
        cmGrid = document.getElementById('cmGrid'),
        cmSortSelect = document.getElementById('cmSortSelect'),
        cmLoadMore = document.getElementById('cmLoadMore');

  const PAGE_SIZE = 9;
  let cmState = { slug: null, sort: 'popular', shown: PAGE_SIZE };

  function sortedDesigns(p, sort) {
    const list = p.designs.slice();
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }

  function renderCmGrid() {
    const p = bySlug[cmState.slug];
    if (!p) return;
    const list = sortedDesigns(p, cmState.sort);
    const visible = list.slice(0, cmState.shown);
    cmGrid.innerHTML = visible.map(d => `
      <article class="cm-card" data-slug="${p.slug}" data-design="${d.id}" tabindex="0" role="button" aria-label="${d.name} — view design">
        <div class="cm-card-img"><img src="${img(d.hero, 600)}" alt="${d.name}" loading="lazy"/></div>
        <span class="cm-card-heart" aria-hidden="true">♡</span>
        <div class="cm-card-body">
          <h4>${d.name}</h4>
          <span class="cm-card-price">From ₹${d.price.toLocaleString('en-IN')}</span>
        </div>
      </article>`).join('');
    cmCount.textContent = `${list.length} designs`;
    cmLoadMore.classList.toggle('is-hidden', cmState.shown >= list.length);
  }

  function openCategory(slug, opts) {
    const p = bySlug[slug];
    if (!p) return;
    const isDigital = digital.includes(p);
    cmState = { slug, sort: 'popular', shown: PAGE_SIZE };
    cmSortSelect.value = 'popular';
    cmBreadcrumb.innerHTML = `Home &gt; ${isDigital ? 'Digital Invitations' : 'Wedding Stationery'} &gt; ${p.t}`;
    cmTitle.textContent = p.t;
    cmSubtitle.textContent = p.d;
    renderCmGrid();
    cm.classList.add('open');
    document.body.classList.add('pm-open');
    cm.setAttribute('aria-hidden', 'false');
    if (!(opts && opts.silent)) location.hash = `#category/${slug}`;
  }

  function closeCM() {
    cm.classList.remove('open');
    if (!pm.classList.contains('open')) document.body.classList.remove('pm-open');
    cm.setAttribute('aria-hidden', 'true');
  }
  cmClose.addEventListener('click', closeCM);
  cm.addEventListener('click', e => { if (e.target.hasAttribute('data-close-cm')) closeCM(); });
  cmSortSelect.addEventListener('change', () => { cmState.sort = cmSortSelect.value; cmState.shown = PAGE_SIZE; renderCmGrid(); });
  cmLoadMore.addEventListener('click', () => { cmState.shown += PAGE_SIZE; renderCmGrid(); });

  /* ---- Product Modal (single design view) ---- */
  const pm = document.getElementById('productModal'),
        pmContent = document.getElementById('pmContent'),
        pmClose = document.getElementById('pmClose');

  function openProduct(slug, designId) {
    const p = bySlug[slug];
    if (!p) return;
    const design = (designId && p.designs.find(d => d.id === designId)) || null;
    const isDigital = digital.includes(p);
    const customs = isDigital ? CUSTOM_DIGI : CUSTOM_PRINT;

    const title = design ? `${design.name} ${p.t}` : p.t;
    const price = design ? design.price : p.price;
    const desc = design ? design.d : p.d;
    const hero = design ? design.hero : p.hero;
    const gal = design ? design.gal : p.gal;
    const waMsg = encodeURIComponent(`Hi Ivory Vows, I'd like to enquire about the "${title}" (starting ₹${price}).`);

    pmContent.innerHTML = `
      <div class="pm-grid">
        <div class="pm-media">
          <img class="pm-hero" id="pmHero" src="${img(hero, 1200)}" alt="${title}"/>
          <div class="pm-thumbs">
            ${gal.map((g,i) => `<img data-src="${img(g,1200)}" src="${img(g,400)}" alt="${title} ${i+1}" class="${i===0?'active':''}"/>`).join('')}
          </div>
        </div>
        <div class="pm-info">
          ${design ? `<button class="pm-back" data-back-slug="${p.slug}">← All ${p.t} Designs</button>` : ''}
          <span class="pm-tag">${isDigital ? 'Digital Invite' : 'Stationery'}</span>
          <h2>${title}</h2>
          <div class="pm-price">From ₹${price.toLocaleString('en-IN')}</div>
          <p class="pm-desc">${desc} Each piece is hand-crafted by our atelier and tailored to your story, palette and rituals.</p>

          <div class="pm-specs">
            <div><strong>Paper / Material</strong>${p.paper}</div>
            <div><strong>Size</strong>${p.size}</div>
            <div><strong>Delivery</strong>${DELIVERY}</div>
            <div><strong>Starting Price</strong>₹${price.toLocaleString('en-IN')}</div>
          </div>

          <div class="pm-section">
            <h4>Features Included</h4>
            <ul class="pm-list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
          </div>

          <div class="pm-section">
            <h4>Customization</h4>
            <ul class="pm-list">${customs.map(f => `<li>${f}</li>`).join('')}</ul>
          </div>

          <div class="pm-cta">
            <a class="pm-enquire" href="#contact" data-close>Enquire Now</a>
            <a class="pm-wa" href="https://wa.me/${WA_NUMBER}?text=${waMsg}" target="_blank" rel="noopener">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.8 5.5 2.2 7.9L.5 31.5l7.8-2.1c2.3 1.3 4.9 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>`;

    // Thumb swap
    const heroEl = pmContent.querySelector('#pmHero');
    pmContent.querySelectorAll('.pm-thumbs img').forEach(th => {
      th.addEventListener('click', () => {
        heroEl.src = th.dataset.src;
        pmContent.querySelectorAll('.pm-thumbs img').forEach(x => x.classList.remove('active'));
        th.classList.add('active');
      });
    });

    // Back to designs grid
    const backBtn = pmContent.querySelector('.pm-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        closePM();
        openCategory(backBtn.dataset.backSlug);
      });
    }

    pm.classList.add('open');
    document.body.classList.add('pm-open');
    pm.setAttribute('aria-hidden', 'false');
  }

  function closePM() {
    pm.classList.remove('open');
    if (!cm.classList.contains('open')) document.body.classList.remove('pm-open');
    pm.setAttribute('aria-hidden', 'true');
  }
  pmClose.addEventListener('click', closePM);
  pm.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) closePM(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePM(); closeCM(); closeLB(); }
  });

  // Click delegation: designs-grid card opens single product view; homepage category card opens designs grid
  document.body.addEventListener('click', e => {
    const designCard = e.target.closest('.cm-card[data-design]');
    if (designCard) { openProduct(designCard.dataset.slug, designCard.dataset.design); return; }
    const catCard = e.target.closest('.card[data-slug]');
    if (catCard) { openCategory(catCard.dataset.slug); return; }
  });
  document.body.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('cm-card')) {
      e.preventDefault();
      openProduct(e.target.dataset.slug, e.target.dataset.design);
    } else if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
      e.preventDefault();
      openCategory(e.target.dataset.slug);
    }
  });

  // Open via hash: #category/save-the-date  or  #design/save-the-date/save-the-date-3
  function checkHash(){
    let m = location.hash.match(/^#design\/([^/]+)\/(.+)$/);
    if (m) { openCategory(m[1], { silent: true }); openProduct(m[1], m[2]); return; }
    m = location.hash.match(/^#category\/(.+)$/);
    if (m) { openCategory(m[1], { silent: true }); return; }
    m = location.hash.match(/^#product\/(.+)$/); // legacy links
    if (m) { openCategory(m[1], { silent: true }); }
  }
  window.addEventListener('hashchange', checkHash);
  checkHash();

  /* ---- Navbar scroll + mobile menu ---- */
  const nav = document.getElementById('navbar'),
        toggle = document.getElementById('menuToggle'),
        links = document.getElementById('navLinks');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));

  /* ---- Reveal on scroll ---- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---- Stats counter ---- */
  const statIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target, dur = 1800, start = performance.now();
      (function tick(now){
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toLocaleString() + (p === 1 ? '+' : '');
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
      statIO.unobserve(el);
    });
  }, { threshold: .5 });
  document.querySelectorAll('.num').forEach(n => statIO.observe(n));

/* ---- Contact form ---- */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {

  form.addEventListener('submit', () => {
    status.textContent = 'Sending...';
  });

  const params = new URLSearchParams(window.location.search);

  if (params.get('success') === '1') {
    status.textContent = 'Thank you — we will be in touch within 24 hours.';
    form.reset();

    window.history.replaceState(
      {},
      document.title,
      window.location.pathname + '#contact'
    );
  }

  if (params.get('error') === '1') {
    status.textContent = 'Sorry! Something went wrong. Please try again.';

    window.history.replaceState(
      {},
      document.title,
      window.location.pathname + '#contact'
    );
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
})();
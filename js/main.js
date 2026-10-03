// ============================================================
// MOBILE MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// ============================================================
// RENDER A SINGLE PRODUCT CARD
// ============================================================
function renderProductCard(p) {
  const waMsg = encodeURIComponent(`I want to order: ${p.name} (${p.price})`);
  const waLink = `https://wa.me/${BUSINESS.whatsapp1}?text=${waMsg}`;

  return `
    <div class="product-card" data-cat="${p.cat}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <a href="${waLink}" class="btn btn-primary btn-sm" target="_blank">Order on WhatsApp</a>
      </div>
    </div>
  `;
}

// ============================================================
// RENDER A SINGLE PACKAGE CARD
// ============================================================
function renderPackageCard(pkg) {
  const waMsg = encodeURIComponent(`I want to order: ${pkg.name} (${pkg.price})`);
  const waLink = `https://wa.me/${BUSINESS.whatsapp1}?text=${waMsg}`;
  const resKey = pkg.resolution.toLowerCase();      // "2mp" or "5mp"
  const camKey = `${pkg.cameras}cam`;               // "4cam" or "8cam"

  return `
    <div class="package-card" data-res="${resKey}" data-cam="${camKey}">
      <div class="package-img">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        <span class="package-badge">${pkg.cameras} Cameras</span>
      </div>
      <div class="package-info">
        <span class="tag">${pkg.resolution} Resolution</span>
        <h3>${pkg.name}</h3>
        <p class="price">${pkg.price}</p>
        <ul class="package-list">
          ${pkg.includes.map(item => `<li>✔ ${item}</li>`).join('')}
        </ul>
        <a href="${waLink}" class="btn btn-primary btn-sm" target="_blank">Order on WhatsApp</a>
      </div>
    </div>
  `;
}

// ============================================================
// HOMEPAGE — render featured products
// ============================================================
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid && typeof PRODUCTS !== 'undefined') {
  const featured = PRODUCTS.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(renderProductCard).join('');
}

// ============================================================
// HOMEPAGE — render featured packages
// ============================================================
const featuredPackagesGrid = document.getElementById('featuredPackagesGrid');
if (featuredPackagesGrid && typeof PACKAGES !== 'undefined') {
  const featuredPkgs = PACKAGES.filter(p => p.featured);
  featuredPackagesGrid.innerHTML = featuredPkgs.map(renderPackageCard).join('');
}

// ============================================================
// PRODUCTS PAGE — render all products + filter
// ============================================================
const productGrid = document.getElementById('productGrid');
if (productGrid && typeof PRODUCTS !== 'undefined') {
  productGrid.innerHTML = PRODUCTS.map(renderProductCard).join('');

  const filterBtns = document.querySelectorAll('.filters .filter-btn');
  const cards = productGrid.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Handle URL hash (e.g., products.html#camera)
  const hash = window.location.hash.replace('#','');
  if (hash) {
    const target = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
    if (target) target.click();
  }
}

// ============================================================
// PACKAGES PAGE — render all packages + filter
// ============================================================
const packageGrid = document.getElementById('packageGrid');
if (packageGrid && typeof PACKAGES !== 'undefined') {
  packageGrid.innerHTML = PACKAGES.map(renderPackageCard).join('');

  const pkgFilterBtns = document.querySelectorAll('.filters .filter-btn');
  const pkgCards = packageGrid.querySelectorAll('.package-card');

  pkgFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pkgFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;

      pkgCards.forEach(card => {
        let show = false;
        if (f === 'all') show = true;
        else if (f === '2mp' || f === '5mp') show = card.dataset.res === f;
        else if (f === '4cam' || f === '8cam') show = card.dataset.cam === f;

        card.style.display = show ? 'flex' : 'none';
      });
    });
  });
}

// ============================================================
// CONTACT FORM → WHATSAPP
// ============================================================
function sendToWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const text =
    `*New Enquiry — CAMNET Website*%0A%0A` +
    `*Name:* ${encodeURIComponent(name)}%0A` +
    `*Phone:* ${encodeURIComponent(phone)}%0A` +
    `*Service:* ${encodeURIComponent(service)}%0A` +
    `*Message:* ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${BUSINESS.whatsapp1}?text=${text}`, '_blank');
}

const NAV_TEMPLATE = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="./index.html" class="nav-logo" aria-label="MC3 Tech Labs home">
        <img src="./assets/icons/mc3-tech-logo.svg" alt="MC3 Tech Labs logo" class="brand-logo-img" />
        MC3 Tech Labs
      </a>
      <ul class="nav-links">
        <li class="nav-dropdown">
          <button class="nav-link dropdown-trigger" type="button" aria-expanded="false">
            Products <span class="chevron">▾</span>
          </button>
          <div class="dropdown-menu">
            <a href="./missionledger.html">
              <span class="dropdown-label">MissionLedger</span>
              <span class="dropdown-sub">Accounting for nonprofits</span>
            </a>
            <a href="./ministryledger.html">
              <span class="dropdown-label">MinistryLedger</span>
              <span class="dropdown-sub">Finance tools for churches</span>
            </a>
            <a href="./xallo.html">
              <span class="dropdown-label">Xallo</span>
              <span class="dropdown-sub">Personal finance, simplified</span>
            </a>
          </div>
        </li>
        <li><a href="./services.html" class="nav-link">Services</a></li>
        <li><a href="./index.html#about" class="nav-link">About</a></li>
        <li><a href="./index.html#contact" class="nav-link">Contact</a></li>
      </ul>
      <a href="./index.html#contact" class="btn btn-accent">Get Started</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" type="button">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu"></div>
  </nav>
`;

function renderNav() {
  const root = document.getElementById("nav-root");
  if (!root) return;

  root.innerHTML = NAV_TEMPLATE;

  const navbar = document.getElementById("navbar");
  const dropdown = navbar.querySelector(".nav-dropdown");
  const dropdownTrigger = navbar.querySelector(".dropdown-trigger");
  const hamburger = navbar.querySelector("#hamburger");
  const mobileMenu = navbar.querySelector("#mobile-menu");
  const page = document.body.getAttribute("data-page");

  mobileMenu.innerHTML = `
    <div class="mobile-menu-inner">
      <a href="./index.html" class="mobile-link">Home</a>
      <div class="mobile-products">
        <button class="mobile-products-trigger" type="button" aria-expanded="false">
          Products <span class="chevron">▾</span>
        </button>
        <div class="mobile-products-panel">
          <a href="./missionledger.html">MissionLedger</a>
          <a href="./ministryledger.html">MinistryLedger</a>
          <a href="./xallo.html">Xallo</a>
        </div>
      </div>
      <a href="./services.html" class="mobile-link">Services</a>
      <a href="./index.html#about" class="mobile-link">About</a>
      <a href="./index.html#contact" class="mobile-link">Contact</a>
      <a href="./index.html#contact" class="btn btn-accent">Get Started</a>
    </div>
  `;

  const pageMap = {
    missionledger: 'a[href="./missionledger.html"]',
    ministryledger: 'a[href="./ministryledger.html"]',
    xallo: 'a[href="./xallo.html"]',
    services: 'a[href="./services.html"]'
  };

  const activeSelector = pageMap[page];
  if (activeSelector) {
    const activeDesktopLink = navbar.querySelector(activeSelector);
    if (activeDesktopLink) activeDesktopLink.classList.add("active");

    const activeMobileLink = mobileMenu.querySelector(activeSelector);
    if (activeMobileLink) activeMobileLink.classList.add("active");

    if (["missionledger", "ministryledger", "xallo"].includes(page)) {
      dropdownTrigger.classList.add("active");
    }
  }

  const setStickyState = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  };

  const closeDesktopDropdown = () => {
    dropdown.classList.remove("open");
    dropdownTrigger.setAttribute("aria-expanded", "false");
  };

  const toggleDesktopDropdown = () => {
    const open = !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", open);
    dropdownTrigger.setAttribute("aria-expanded", String(open));
  };

  const mobileProducts = mobileMenu.querySelector(".mobile-products");
  const mobileProductsTrigger = mobileMenu.querySelector(".mobile-products-trigger");

  const closeMobileMenu = () => {
    mobileMenu.classList.remove("menu-open");
    hamburger.classList.remove("is-active");
    mobileProducts.classList.remove("open");
    mobileProductsTrigger.setAttribute("aria-expanded", "false");
  };

  dropdownTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDesktopDropdown();
  });

  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileMenu.classList.toggle("menu-open");
    hamburger.classList.toggle("is-active");
  });

  mobileProductsTrigger.addEventListener("click", () => {
    const open = !mobileProducts.classList.contains("open");
    mobileProducts.classList.toggle("open", open);
    mobileProductsTrigger.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  navbar.querySelectorAll(".dropdown-menu a").forEach((link) => {
    link.addEventListener("click", closeDesktopDropdown);
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      closeDesktopDropdown();
    }
    if (!navbar.contains(event.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMobileMenu();
  });

  window.addEventListener("scroll", setStickyState, { passive: true });
  setStickyState();
}

document.addEventListener("DOMContentLoaded", renderNav);

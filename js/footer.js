(() => {
  const footerRoot = document.getElementById("footer-root");

  if (!footerRoot) {
    return;
  }

  const logoSvg = `
    <svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="mc3GradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00C48C"></stop>
          <stop offset="100%" stop-color="#5B5EA6"></stop>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#mc3GradientFooter)"></rect>
      <path d="M14 30V18h4.5l5.5 7 5.5-7H34v12h-3.8v-6l-6.2 7.8L17.8 24v6H14z" fill="#FFFFFF"></path>
    </svg>
  `;

  const socialIcons = {
    linkedin: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4zM20.44 12.95c0-3.36-1.79-4.92-4.17-4.92-1.92 0-2.77 1.06-3.25 1.8V8.5H9.64c.05.88 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.67.12-.91.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.03 1.88 2.54V20h3.38v-7.05z"></path>
      </svg>
    `,
    twitter: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 3H22l-6.78 7.74L23 21h-6.17l-4.83-6.32L6.34 21H3.23l7.25-8.28L1 3h6.32l4.37 5.77L18.9 3zm-1.08 16.14h1.71L6.41 4.76H4.58l13.24 14.38z"></path>
      </svg>
    `,
    instagram: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7.35A4.65 4.65 0 1 0 12 16.65 4.65 4.65 0 1 0 12 7.35zm0 7.66A3 3 0 1 1 12 9a3 3 0 0 1 0 6.01zm5.92-7.85a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 1 0 0 2.16zM21 7.38c0-1.5-.04-2.53-.34-3.45a4.95 4.95 0 0 0-2.8-2.8C16.94.84 15.91.8 14.41.8h-4.82C8.09.8 7.06.84 6.14 1.13a4.95 4.95 0 0 0-2.8 2.8C3.04 4.85 3 5.88 3 7.38v9.24c0 1.5.04 2.53.34 3.45a4.95 4.95 0 0 0 2.8 2.8c.92.29 1.95.33 3.45.33h4.82c1.5 0 2.53-.04 3.45-.33a4.95 4.95 0 0 0 2.8-2.8c.3-.92.34-1.95.34-3.45V7.38zm-1.62 9.2c0 1.38-.03 2.13-.24 2.76a3.34 3.34 0 0 1-1.9 1.9c-.63.21-1.38.24-2.76.24H9.52c-1.38 0-2.13-.03-2.76-.24a3.34 3.34 0 0 1-1.9-1.9c-.21-.63-.24-1.38-.24-2.76V7.42c0-1.38.03-2.13.24-2.76a3.34 3.34 0 0 1 1.9-1.9c.63-.21 1.38-.24 2.76-.24h4.96c1.38 0 2.13.03 2.76.24a3.34 3.34 0 0 1 1.9 1.9c.21.63.24 1.38.24 2.76v9.16z"></path>
      </svg>
    `,
    facebook: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-8h2.9l.44-3.47H13.5V7.3c0-1 .27-1.68 1.7-1.68H17V2.5c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.18 1.51-4.18 4.29v2.87H7.5V13h2.82v8h3.18z"></path>
      </svg>
    `
  };

  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="/index.html" class="footer-logo">
            ${logoSvg}
            <span>MC3 Tech Labs</span>
          </a>
          <p>
            Smarter Finance. Stronger Presence. Built for Purpose.
          </p>
          <div class="social-links" aria-label="Social media links">
            <a href="#" aria-label="LinkedIn">${socialIcons.linkedin}</a>
            <a href="#" aria-label="Twitter X">${socialIcons.twitter}</a>
            <a href="#" aria-label="Instagram">${socialIcons.instagram}</a>
            <a href="#" aria-label="Facebook">${socialIcons.facebook}</a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Our Products</h3>
          <a href="/missionledger.html">MissionLedger</a>
          <a href="/ministryledger.html">MinistryLedger</a>
          <a href="/xallo.html">Xallo</a>
        </div>

        <div class="footer-col">
          <h3>Services</h3>
          <a href="/services.html#website">Website Design</a>
          <a href="/services.html#seo">SEO Services</a>
          <a href="/index.html#contact">Free Consultation</a>
        </div>

        <div class="footer-col">
          <h3>Company</h3>
          <a href="/index.html#about">About Us</a>
          <a href="/index.html#pricing">Pricing</a>
          <a href="/index.html#contact">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>&copy; 2025 MC3 Tech Labs. All rights reserved.</p>
          <p>A product of MC3 Interests LLC</p>
        </div>
      </div>
    </footer>
  `;
})();

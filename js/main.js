(function () {
  // --- Mobile navigation toggle ---
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  // --- Auto-update footer year ---
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // --- Donation amount sync (PayFast + PayPal) ---
  const amt = document.getElementById("amount");
  const pfAmt = document.getElementById("pf_amount");
  const ppBtn = document.getElementById("paypalBtn");

  function syncDonationAmount() {
    if (!amt) return;
    const value = Math.max(10, parseFloat(amt.value || 0) || 0).toFixed(2);
    if (pfAmt) pfAmt.value = value;
    if (ppBtn) {
      try {
        const url = new URL(ppBtn.href);
        url.searchParams.set("amount", value);
        ppBtn.href = url.toString();
      } catch (err) {
        console.error("PayPal link update error:", err);
      }
    }
  }

  if (amt) {
    amt.addEventListener("input", syncDonationAmount);
    syncDonationAmount();
  }

  // --- Universal Header & Footer Loader ---
  document.addEventListener("DOMContentLoaded", () => {
    const base = window.location.origin;

    // Load Header
    fetch(`${base}/partials/header.html`)
      .then(res => res.ok ? res.text() : Promise.reject(res))
      .then(html => document.body.insertAdjacentHTML("afterbegin", html))
      .catch(err => console.error("Header load error:", err));

    // Load Footer
    fetch(`${base}/partials/footer.html`)
      .then(res => res.ok ? res.text() : Promise.reject(res))
      .then(html => document.body.insertAdjacentHTML("beforeend", html))
      .catch(err => console.error("Footer load error:", err));
  });
})();

// --- Cookie Notice Loader (optional) ---
fetch(`${window.location.origin}/partials/cookie-notice.html`)
  .then(res => res.ok ? res.text() : Promise.reject(res))
  .then(html => document.body.insertAdjacentHTML("beforeend", html))
  .catch(err => console.error("Cookie notice load error:", err));

// --- Fix broken relative images like logo.svg on index page ---
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("img[src*='logo.svg']");
  if (logo && !logo.src.startsWith(window.location.origin)) {
    logo.src = `${window.location.origin}/img/logo.svg`;
  }
});
// ===== MOBILE MENU BUBBLE =====
document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("menuBubble");
  const menu = document.getElementById("bubbleMenu");
  const icon = document.getElementById("hamburger");

  if (bubble) {
    bubble.addEventListener("click", (e) => {
      e.stopPropagation();
      bubble.classList.toggle("open");
      menu.classList.toggle("show");
    });
  }

  document.addEventListener("click", (e) => {
    if (menu && !menu.contains(e.target) && !bubble.contains(e.target)) {
      menu.classList.remove("show");
      bubble.classList.remove("open");
    }
  });
});

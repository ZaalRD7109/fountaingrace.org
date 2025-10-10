(function () {
  // --- Navigation toggle (mobile menu) ---
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const exp = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!exp));
      nav.classList.toggle("open");
    });
  }

  // --- Auto-update year (for copyright) ---
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
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
  // Automatically loads the shared header.html and footer.html on every page
  document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("/partials/header.html")
      .then((response) => response.text())
      .then((html) => {
        document.body.insertAdjacentHTML("afterbegin", html);
      })
      .catch((err) => console.error("Header load error:", err));

    // Load footer
    fetch("/partials/footer.html")
      .then((response) => response.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);
      })
      .catch((err) => console.error("Footer load error:", err));
  });
})();

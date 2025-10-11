(() => {
  "use strict";

  // ---------- UTIL: safe query ----------
  const $ = (s, ctx = document) => ctx.querySelector(s);

  // ---------- YEAR ----------
  const setYear = () => {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  };

  // ---------- DONATION: Sync amount across PayFast / PayPal ----------
  const initDonationSync = () => {
    const amt   = $("#amount");
    const pfAmt = $("#pf_amount");
    const ppBtn = $("#paypalBtn");

    if (!amt) return;

    const sync = () => {
      const value = Math.max(10, parseFloat(amt.value || 0) || 0).toFixed(2);
      if (pfAmt) pfAmt.value = value;
      if (ppBtn && ppBtn.href) {
        try {
          const url = new URL(ppBtn.href);
          url.searchParams.set("amount", value);
          ppBtn.href = url.toString();
        } catch (e) {
          console.warn("PayPal link update error:", e);
        }
      }
    };

    amt.addEventListener("input", sync);
    sync();
  };

  // ---------- PARTIAL LOADER ----------
  const loadPartial = async (url, where = "afterbegin") => {
    const container = document.createElement("div");
    container.dataset.partial = url;

    // Avoid duplicate insertions if main.js runs twice
    if ([...document.querySelectorAll("[data-partial]")].some(el => el.dataset.partial === url)) {
      return null;
    }

    document.body.insertAdjacentElement(where, container);
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const html = await res.text();
      container.innerHTML = html;
      return container;
    } catch (e) {
      console.error(`Failed to load ${url}:`, e);
      container.remove();
      return null;
    }
  };

  // ---------- NAV TOGGLE (desktop collapsible if present) ----------
  const initNavToggle = () => {
    const navToggle = $(".nav-toggle");
    const nav = $("#nav");
    if (!navToggle || !nav) return;

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  };

  // ---------- MOBILE BUBBLE MENU (<= 900px) ----------
  const initBubbleMenu = () => {
    const mm = window.matchMedia("(max-width: 900px)");
    const bubble = $("#menuBubble");
    const menu   = $("#bubbleMenu");

    // Only wire up if bubble menu exists in header partial
    if (!bubble || !menu) return;

    const close = () => {
      bubble.classList.remove("open");
      menu.classList.remove("show");
      bubble.setAttribute("aria-expanded", "false");
    };

    const toggle = (e) => {
      e?.stopPropagation();
      const opening = !bubble.classList.contains("open");
      bubble.classList.toggle("open", opening);
      menu.classList.toggle("show", opening);
      bubble.setAttribute("aria-expanded", String(opening));
    };

    // Enable bubble only on mobile widths
    const applyMode = () => {
      if (mm.matches) {
        bubble.style.display = "";
      } else {
        close();
        bubble.style.display = "none";
      }
    };

    bubble.addEventListener("click", toggle);
    document.addEventListener("click", (e) => {
      if (!mm.matches) return;                // ignore on desktop
      if (menu.contains(e.target) || bubble.contains(e.target)) return;
      close();
    });

    mm.addEventListener("change", applyMode);
    applyMode();
  };

  // ---------- OPTIONAL: Cookie Notice ----------
  const loadCookieNotice = async () => {
    try {
      const res = await fetch("/partials/cookie-notice.html", { cache: "no-cache" });
      if (!res.ok) return;
      const html = await res.text();
      document.body.insertAdjacentHTML("beforeend", html);
    } catch (e) {
      console.warn("Cookie notice load error:", e);
    }
  };

  // ---------- OPTIONAL: Keep logo path robust (only if ever broken) ----------
  const fixLooseLogo = () => {
    const logo = document.querySelector("img[src*='logo.svg']");
    if (logo && !logo.src.startsWith(location.origin)) {
      logo.src = `${location.origin}/img/logo.svg`;
    }
  };

  // ---------- BOOT ----------
  document.addEventListener("DOMContentLoaded", async () => {
    // 1) Load header (then wire up nav + bubble)
    const header = await loadPartial("/partials/header.html", "afterbegin");
    if (header) {
      initNavToggle();
      initBubbleMenu();
    }

    // 2) Load footer at end of body
    await loadPartial("/partials/footer.html", "beforeend");

    // 3) Core utilities
    setYear();
    initDonationSync();
    fixLooseLogo();

    // 4) Optional cookie banner
    loadCookieNotice();
  });
})();

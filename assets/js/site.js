(() => {
  "use strict";

  const root = document.documentElement;
  const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");

  function preferredTheme() {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light"
      ? saved
      : colorPreference.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.classList.toggle("fa-moon", theme === "dark");
      icon.classList.toggle("fa-sun", theme !== "dark");
    }
  }

  applyTheme(preferredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#theme-toggle [role='button']");
    if (themeToggle) {
      const toggleTheme = () => {
        const next = root.hasAttribute("data-theme") ? "light" : "dark";
        localStorage.setItem("theme", next);
        applyTheme(next);
      };
      themeToggle.addEventListener("click", toggleTheme);
      themeToggle.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleTheme();
        }
      });
    }

    colorPreference.addEventListener("change", () => {
      if (!localStorage.getItem("theme")) applyTheme(preferredTheme());
    });

    document.querySelectorAll("a[href]").forEach((link) => {
      try {
        const target = new URL(link.href, window.location.href);
        if ((target.protocol === "http:" || target.protocol === "https:") && target.origin !== window.location.origin) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      } catch (_) {
        // Leave malformed or non-web links to the browser.
      }
    });

    const authorButton = document.querySelector(".author__urls-wrapper button");
    const authorLinks = document.querySelector(".author__urls");
    if (authorButton && authorLinks) {
      authorButton.setAttribute("aria-expanded", "false");
      authorButton.addEventListener("click", () => {
        const isOpen = authorButton.classList.toggle("open");
        authorButton.setAttribute("aria-expanded", String(isOpen));
        authorLinks.style.display = isOpen ? "block" : "none";
      });
    }

    const nav = document.getElementById("site-nav");
    const navButton = nav?.querySelector(":scope > button");
    const visibleLinks = nav?.querySelector(".visible-links");
    const hiddenLinks = nav?.querySelector(".hidden-links");

    function updateNavigation() {
      if (!nav || !navButton || !visibleLinks || !hiddenLinks) return;
      const tail = visibleLinks.querySelector(".persist.tail");
      while (hiddenLinks.firstElementChild) {
        visibleLinks.insertBefore(hiddenLinks.firstElementChild, tail);
      }
      navButton.classList.add("hidden");
      hiddenLinks.classList.add("hidden");
      navButton.classList.remove("close");
      navButton.setAttribute("aria-expanded", "false");

      let candidates = [...visibleLinks.children].filter((item) => !item.classList.contains("persist"));
      const availableWidth = () => nav.clientWidth - (navButton.classList.contains("hidden") ? 0 : navButton.offsetWidth + 30);
      while (visibleLinks.scrollWidth > availableWidth() && candidates.length) {
        navButton.classList.remove("hidden");
        hiddenLinks.prepend(candidates.pop());
        candidates = [...visibleLinks.children].filter((item) => !item.classList.contains("persist"));
      }

      document.body.style.paddingTop = `${document.querySelector(".masthead")?.offsetHeight || 0}px`;
    }

    if (navButton && hiddenLinks) {
      navButton.addEventListener("click", () => {
        const isOpen = hiddenLinks.classList.toggle("hidden") === false;
        navButton.classList.toggle("close", isOpen);
        navButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    updateNavigation();
    window.addEventListener("resize", updateNavigation, { passive: true });
    window.addEventListener("orientationchange", updateNavigation, { passive: true });

    const footer = document.querySelector(".page__footer");
    const updateFooterSpace = () => {
      if (footer) document.body.style.marginBottom = `${footer.offsetHeight}px`;
    };
    updateFooterSpace();
    if (footer && "ResizeObserver" in window) new ResizeObserver(updateFooterSpace).observe(footer);
  });
})();

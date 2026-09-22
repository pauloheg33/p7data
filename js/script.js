(() => {
  "use strict";
  const header = document.querySelector(".header");
  const menu = document.querySelector("#navigation");
  const toggle = document.querySelector(".menu-toggle");
  const mobile = window.matchMedia("(max-width: 600px)");
  document.documentElement.classList.add("menu-ready");

  function closeMenu(returnFocus = false) {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    )
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  mobile.addEventListener("change", () => closeMenu());
  const updateHeader = () =>
    header.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // The semantic cards are the source of truth; content remains available without JavaScript.
  document.querySelectorAll("[data-count]").forEach((counter) => {
    const category = counter.dataset.count;
    const selector =
      category === "all" ? "[data-category]" : `[data-category="${category}"]`;
    counter.textContent = document.querySelectorAll(selector).length;
  });

  if ("IntersectionObserver" in window) {
    const links = [...menu.querySelectorAll("a")];
    const sections = links.map((link) =>
      document.querySelector(link.getAttribute("href")),
    );
    const currentSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    sections.forEach((section) => currentSection.observe(section));

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reveal = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("entered");
            reveal.unobserve(entry.target);
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(
          ".project-card, .system-card, .intro-grid, .about-grid",
        )
        .forEach((item) => reveal.observe(item));
    }
  }
})();

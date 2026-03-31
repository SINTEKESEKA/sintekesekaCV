const menuToggle = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector(".menu-panel");
const menuLinks = [...document.querySelectorAll(".menu-link[href^='#']")];
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("[data-section]");
const root = document.documentElement;

const closeMenu = () => {
  menuToggle.classList.remove("is-open");
  menuPanel.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

const openMenu = () => {
  menuToggle.classList.add("is-open");
  menuPanel.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
};

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
    return;
  }

  openMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("click", (event) => {
  const burst = document.createElement("span");
  burst.className = "click-burst";
  burst.style.left = `${event.clientX}px`;
  burst.style.top = `${event.clientY}px`;
  document.body.appendChild(burst);
  burst.addEventListener("animationend", () => burst.remove(), { once: true });

  const clickedInsideMenu = menuPanel.contains(event.target) || menuToggle.contains(event.target);
  if (!clickedInsideMenu) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("pointermove", (event) => {
  root.style.setProperty("--pointer-x", `${event.clientX}px`);
  root.style.setProperty("--pointer-y", `${event.clientY}px`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const activeId = entry.target.getAttribute("id");
      menuLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", isActive);
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-10% 0px -35% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
};

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll("[data-category]");
const visibleCount = document.querySelector("[data-visible-count]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let count = 0;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    workCards.forEach((card) => {
      const isVisible = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.hidden = !isVisible;
      if (isVisible) count += Number.parseInt(card.dataset.itemCount || "1", 10);
    });

    if (visibleCount) visibleCount.textContent = String(count).padStart(2, "0");
  });
});

const videoModal = document.querySelector("[data-video-modal]");
const videoFrame = document.querySelector("[data-video-frame]");
const videoTitle = document.querySelector("[data-video-title]");
const driveLink = document.querySelector("[data-drive-link]");
const modalClose = document.querySelector("[data-modal-close]");

const stopVideo = () => {
  if (videoFrame) videoFrame.src = "about:blank";
  document.body.classList.remove("has-modal");
};

const closeVideo = () => {
  if (!videoModal?.open) return;
  videoModal.close();
};

document.querySelectorAll(".video-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!videoModal || !videoFrame) return;

    const { videoId, videoTitle: selectedTitle } = trigger.dataset;
    if (!videoId) return;

    const previewUrl = `https://drive.google.com/file/d/${videoId}/preview`;
    const fileUrl = `https://drive.google.com/file/d/${videoId}/view`;

    videoFrame.src = previewUrl;
    if (videoTitle) videoTitle.textContent = selectedTitle || "Portfolio video";
    if (driveLink) driveLink.href = fileUrl;

    document.body.classList.add("has-modal");
    videoModal.showModal();
  });
});

modalClose?.addEventListener("click", closeVideo);
videoModal?.addEventListener("close", stopVideo);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});

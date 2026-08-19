/* Tikondwe Mathias Kaonga — Main JavaScript */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".menu");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
});

function openLightbox(title, category, desc, meta) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  document.getElementById("lbTitle").textContent = title;
  document.getElementById("lbCat").textContent = category;
  document.getElementById("lbDesc").textContent = desc;
  document.getElementById("lbMeta").textContent = meta;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

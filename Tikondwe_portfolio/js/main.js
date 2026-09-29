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

  // Creative Section Fade Slideshow
  const slides = document.querySelectorAll(".creative-slide");
  const dots = document.querySelectorAll(".creative-dot");
  if (slides.length > 0) {
    let currentSlide = 0;
    let slideTimer = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });

      currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }

    function startTimer() {
      if (!prefersReducedMotion) {
        slideTimer = setInterval(nextSlide, 4500);
      }
    }

    function resetTimer() {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
      startTimer();
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        resetTimer();
      });
    });

    showSlide(0);
    startTimer();
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

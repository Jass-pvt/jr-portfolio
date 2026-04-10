/* ============================================================
   TYPING ANIMATION
   ============================================================ */
const phrases = ["Python Developer", "Cybersecurity Enthusiast", "Front-End Developer", "AI & ML Developer", "Cloud Enthusiast"];
const typingEl = document.getElementById("typing");
let pIdx = 0, lIdx = 0, deleting = false;

function type() {
  if (!typingEl) return;
  const phrase = phrases[pIdx];
  typingEl.textContent = phrase.substring(0, lIdx);
  let delay = deleting ? 70 : 120;
  if (!deleting && lIdx === phrase.length) { deleting = true; delay = 1800; }
  else if (deleting && lIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; delay = 400; }
  lIdx += deleting ? -1 : 1;
  setTimeout(type, delay);
}
type();

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const navLinks  = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

function toggleMenu() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu() {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
}

// Close on outside tap (important for mobile)
document.addEventListener("click", (e) => {
  if (navLinks && hamburger && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

// Close on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeBtn = document.getElementById("theme-toggle");

const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
} else {
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");
}

function updateIcon() {
  if (!themeBtn) return;
  const icon = themeBtn.querySelector("i");
  icon.className = document.body.classList.contains("light-theme") ? "fas fa-sun" : "fas fa-moon";
}
updateIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    updateIcon();
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = "fadeSlideUp 0.55s ease forwards";
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".card-item, .doing-card, .profile-card, .stat-item").forEach(el => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

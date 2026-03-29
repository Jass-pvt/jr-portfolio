/* ============================================================
   TYPING ANIMATION
   ============================================================ */
const phrases = [
  "Python Developer",
  "Cybersecurity Enthusiast",
  "Front-End Developer",
  "AI & ML Developer",
  "Cloud Enthusiast"
];

const typingEl = document.getElementById("typing");
let pIdx = 0, lIdx = 0, deleting = false;

function type() {
  const phrase = phrases[pIdx];
  typingEl.textContent = phrase.substring(0, lIdx);

  let delay = deleting ? 80 : 130;

  if (!deleting && lIdx === phrase.length) {
    deleting = true; delay = 1800;
  } else if (deleting && lIdx === 0) {
    deleting = false; pIdx = (pIdx + 1) % phrases.length; delay = 400;
  }

  lIdx += deleting ? -1 : 1;
  setTimeout(type, delay);
}
type();

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const navLinks  = document.getElementById("navLinks");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeBtn = document.getElementById("theme-toggle");

const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.body.classList.add("light-theme");
} else {
  document.body.classList.add("dark-theme");
}

function updateIcon() {
  const icon = themeBtn.querySelector("i");
  const isLight = document.body.classList.contains("light-theme");
  icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
}
updateIcon();

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  updateIcon();
});

/* ============================================================
   SCROLL REVEAL  (simple intersection observer)
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animation = "fadeSlideUp 0.6s ease forwards";
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card-item, .doing-card, .profile-card, .stat-item").forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});

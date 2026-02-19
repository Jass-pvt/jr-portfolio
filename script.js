
const phrases = [
  "Python Developer",
  "Cybersecurity Enthusiast",
  "Front-End Development",
  "AI & ML Developer ",
    "Cloud Enthusiast"
];

const typingElement = document.getElementById("typing");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // base typing speed
let pauseEnd = 1500;   // pause after full phrase
let pauseStart = 500;  // pause before starting next phrase

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, letterIndex++);
  }

  let delay = typingSpeed;

  // Pause at the end of typing
  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    delay = pauseEnd; // longer pause after full phrase
  }

  // Pause at the start before typing next phrase
  else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = pauseStart; // small pause before next phrase
  }

  setTimeout(type, delay);
}

// Start typing
type();


// Hamburger Menu Toggle
const navLinks = document.getElementById("navLinks");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}




// Theme toggle button logic
const themeToggleBtn = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Load saved preference or system preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
} else if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
} else if (prefersDarkScheme.matches) {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.add('light-theme');
}



// Update icon
function updateThemeIcon() {
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}
updateThemeIcon();

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeIcon();
});

// Simple contact form submission (prevents reload and clears form with alert)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
  contactForm.reset();
});

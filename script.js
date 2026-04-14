// Theme Toggle Logic
const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');

function updateThemeUI(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    themeToggles.forEach(btn => btn.textContent = '🌙');
  } else {
    document.body.classList.remove('light-mode');
    themeToggles.forEach(btn => btn.textContent = '☀️');
  }
}

// Check local storage for preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  updateThemeUI(savedTheme);
}

themeToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
  });
});

// Sticky Navigation Header
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.background = 'rgba(10, 25, 47, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});



// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Smooth scrolling for navigation
document.querySelectorAll('.navbar .nav-menu .nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Close menu on mobile when a link is clicked
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Timed Popup
let popupShowed = false;
setTimeout(() => {
  if (!popupShowed) {
    document.getElementById('exit-popup').classList.add('show');
    popupShowed = true;
  }
}, 3000);

function closePopup() {
  document.getElementById('exit-popup').classList.remove('show');
}

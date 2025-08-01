const mainTextElement = document.querySelector(".main-text");
const nameElement = document.querySelector(".navbar-brand");

let jobTitles = [
  'Mafaz',
  'a Frontend Developer.',
  'a Backend Developer.',
  'Open to work.'
];

let jobIndex = 0;
let timer = setInterval(updateJobTitle, 1600);

function updateJobTitle() {
  if (mainTextElement) {
    mainTextElement.innerHTML = `Hi there! I'm <span class="jobs">${jobTitles[jobIndex]}</span>`;
    jobIndex = (jobIndex + 1) % jobTitles.length;
  }
}

// Intersection Observer animation for skills
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Observe skill elements
document.querySelectorAll(".skill").forEach((element) => observer.observe(element));

// Ensure skills show on DOM load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill').forEach(skill => {
    skill.classList.add('show');
  });
});

// Menu toggle (safe check)
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.classList.toggle('active');
  }
};

const toggleMenuBtn = document.querySelector('.toggle-menu');
if (toggleMenuBtn) {
  toggleMenuBtn.addEventListener('click', toggleMenu);
}

// Scroll to top (safe check)
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', scrollToTop);
}

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
  mainTextElement.innerHTML = `Hi there! I'm <span class="jobs">${jobTitles[jobIndex]}</span>`;
  jobIndex = (jobIndex + 1) % jobTitles.length;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".skill").forEach((element) => observer.observe(element));

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill').forEach(skill => {
    skill.classList.add('show');
  });
});

const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

document.querySelector('.toggle-menu').addEventListener('click', toggleMenu);
document.querySelector('.scroll-top').addEventListener('click', scrollToTop);

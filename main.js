const smoothScrollHandler = target => {
  const pos = target.getBoundingClientRect();

  window.scroll({
    top: pos.y + 5,
    left: 0,
    behavior: 'smooth'
  });
};
const projects = document.getElementById('projects');
const viewMyWorkBtn = document.getElementById('view-my-work-btn');

viewMyWorkBtn.addEventListener('click', () => smoothScrollHandler(projects));

const nav = document.querySelector('.nav');
const transparentNav = document.querySelector('.nav-transparent');
const coloredNav = document.querySelector('.nav-colored');
const header = document.querySelector('.header');
const headerHeight = header.scrollHeight;

const navScrollHandler = () => {
  const scrollOffset = window.pageYOffset;

  if (scrollOffset > headerHeight) {
    transparentNav.style.display = 'none';
    coloredNav.style.display = 'flex';
    nav.style.borderBottom = '1px solid grey';
  }

  if (scrollOffset < headerHeight) {
    transparentNav.style.display = 'flex';
    coloredNav.style.display = 'none';
    nav.style.borderBottom = '1px solid #d8d8d8';
  }
};
navScrollHandler();

document.addEventListener('scroll', navScrollHandler);

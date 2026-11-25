const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(opened));
    const icon = menuToggle.querySelector('i');
    if (icon) icon.className = opened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    const icon = menuToggle.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-bars';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

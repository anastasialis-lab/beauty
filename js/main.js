// Header scroll effect
const header = document.getElementById('header');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});
 
// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
 
burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--open');
  document.body.style.overflow = nav.classList.contains('nav--open') ? 'hidden' : '';
});
 
// Close menu on link click
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--open');
    document.body.style.overflow = '';
  });
});
 
// Scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);
 
document.querySelectorAll('.service-card, .achievement, .about__content, .about__image-wrap, .contact__info, .contact__map, .gallery__item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
 
// Active nav link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');
 
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
 
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
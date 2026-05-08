// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.burger');
  if (menu && menu.classList.contains('open')) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('open');
    }
  }
});

// FAQ accordion
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const isOpen = el.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));

  // Open clicked if it was closed
  if (!isOpen) {
    el.classList.add('open');
    answer.classList.add('open');
  }
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.classList.add('visible');
    e.target.reset();
    setTimeout(() => success.classList.remove('visible'), 5000);
  }
}

// Scroll fade-in for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.grade-card, .ls-card, .inside-item, .pbl-step, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
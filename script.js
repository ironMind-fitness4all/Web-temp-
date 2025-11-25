// IronMind Business Site - JS
// Smooth scroll + small animations

// Smooth scrolling for buttons
const buttons = document.querySelectorAll('a[href^="#"]');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const target = document.querySelector(btn.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Card hover animation effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 0 25px rgba(212,175,55,0.6)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";
  });
});
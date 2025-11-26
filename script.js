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
// Optional: tiny click animation + log for analytics
document.addEventListener('DOMContentLoaded', () => {
  const viewBtn = document.getElementById('viewTemplatesBtn');
  if (viewBtn) {
    viewBtn.addEventListener('click', (e) => {
      // small visual feedback
      viewBtn.style.transform = 'scale(0.98)';
      setTimeout(() => viewBtn.style.transform = '', 140);

      // optional: track clicks locally (increase counter in localStorage)
      try {
        const key = 'templates_view_count';
        const current = Number(localStorage.getItem(key) || 0);
        localStorage.setItem(key, current + 1);
      } catch (err) { /* ignore storage errors */ }
      // allow normal navigation to templates.html
    });
  }
});
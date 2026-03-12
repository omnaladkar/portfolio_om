document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
      menuIcon.classList.remove('bx-menu');
      menuIcon.classList.add('bx-x');
    } else {
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    }
  });

  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.timeline-block, .card, .card_b').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

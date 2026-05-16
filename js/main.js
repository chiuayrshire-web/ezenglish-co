// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Modal functionality
const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });
}

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Form submission
const form = document.querySelector('.modal-content form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful! (Demo)');
    loginModal.style.display = 'none';
    form.reset();
  });
}

// Smooth scroll for buttons
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent.includes('Start Learning') || button.textContent.includes('Start Your Free Trial')) {
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    } else if (button.textContent.includes('Watch Demo')) {
      alert('Demo video coming soon!');
    }
  });
});

// Course card interactions
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
  const button = card.querySelector('.btn');
  button.addEventListener('click', () => {
    const courseTitle = card.querySelector('h3').textContent;
    alert(`Enrolled in ${courseTitle}! Check your email for confirmation.`);
  });
});

// Pricing card interactions
const pricingButtons = document.querySelectorAll('.pricing-card .btn');
pricingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.closest('.pricing-card').querySelector('h3').textContent;
    if (button.textContent.includes('Subscribe')) {
      alert(`Proceeding to checkout for ${plan} plan...`);
    } else {
      alert(`Starting free trial!`);
    }
  });
});

// Scroll animation for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.course-card, .feature-box, .testimonial-card, .pricing-card').forEach(el => {
  observer.observe(el);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'l' || e.key === 'L') {
    loginModal.style.display = 'block';
  }
  if (e.key === 'Escape') {
    loginModal.style.display = 'none';
  }
});

// Console easter egg
console.log('%cWelcome to EZ English!', 'color: #28a745; font-size: 20px; font-weight: bold;');
console.log('%cPress L to open login modal or Escape to close it', 'color: #0069d9; font-size: 14px;');

// Active nav link highlighting
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Page load event
window.addEventListener('load', () => {
  console.log('✨ EZ English website loaded successfully!');
});
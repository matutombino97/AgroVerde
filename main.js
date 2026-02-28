// 1. Custom Cursor Logic
const cursor = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  let dx = mouseX - cursorX;
  let dy = mouseY - cursorY;

  cursorX += dx * 0.15;
  cursorY += dy * 0.15;

  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// 2. Interactive Elements Feedback for Cursor
const interactives = document.querySelectorAll('a, button, .card, .btn');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform += ' scale(2.5)';
    cursor.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    cursor.style.border = '1.5px solid var(--accent)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', '');
    cursor.style.backgroundColor = 'var(--accent)';
    cursor.style.border = 'none';
  });
});

// 3. Cinematic Reveal on Scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal-section').forEach((section) => {
  revealObserver.observe(section);
});

// 4. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple scale effect for links
    if (navLinks.classList.contains('active')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100px';
      navLinks.style.left = '5%';
      navLinks.style.right = '5%';
      navLinks.style.background = 'var(--bg-card)';
      navLinks.style.padding = '2rem';
      navLinks.style.borderRadius = '20px';
      navLinks.style.backdropFilter = 'blur(20px)';
    } else {
      navLinks.style.display = 'none';
    }
  });
}

// 5. Initialize Icons
lucide.createIcons();

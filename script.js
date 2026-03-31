// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Mouse Trail Effect
const trail = [];
document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.getElementById('rippleContainer').appendChild(dot);
    trail.push(dot);
    if (trail.length > 10) {
        trail.shift().remove();
    }
    setTimeout(() => dot.style.opacity = '0', 100);
});

// Click Ripple Effect
document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(96,165,250,0.5)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.transition = 'width 0.6s, height 0.6s';
    document.body.appendChild(ripple);
    ripple.offsetWidth;
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    setTimeout(() => ripple.remove(), 600);
});

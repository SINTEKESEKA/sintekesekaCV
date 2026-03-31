// DOM Elements
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// --- Hamburger Menu Logic ---
function closeMenu() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
    }
}

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        closeMenu();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, null, `#${targetId}`);
        }
    });
});

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !hamburger.contains(e.target) && 
        !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// --- Mouse Tracking Effect (Cursor Trail) ---
const trail = document.createElement('div');
trail.classList.add('cursor-trail');
document.body.appendChild(trail);

let mouseX = 0, mouseY = 0;
let trailVisible = false;

function updateTrailPosition() {
    if (trailVisible) {
        trail.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    }
    requestAnimationFrame(updateTrailPosition);
}
updateTrailPosition();

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!trailVisible) {
        trail.style.display = 'block';
        trailVisible = true;
    }
});

document.addEventListener('mouseleave', () => {
    trail.style.display = 'none';
    trailVisible = false;
});

// Disable cursor trail on touch devices
if ('ontouchstart' in window) {
    trail.style.display = 'none';
}

// --- Click Ripple Effect ---
function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('click-ripple');
    ripple.style.left = `${event.clientX - 10}px`;
    ripple.style.top = `${event.clientY - 10}px`;
    document.body.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 500);
}

document.addEventListener('click', (e) => {
    createRipple(e);
});

// --- Active Navigation Highlight on Scroll ---
const sections = document.querySelectorAll('section');

function setActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#cbd5e1';
        link.style.borderBottomColor = 'transparent';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#3b82f6';
            link.style.borderBottomColor = '#3b82f6';
        }
    });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// --- Handle initial hash in URL ---
if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) {
        setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// --- Profile Photo Handler ---
// This allows you to click the placeholder to upload a photo
const photoPlaceholder = document.getElementById('photoPlaceholder');
const profileImg = document.getElementById('profileImg');

if (photoPlaceholder && profileImg) {
    // Hide the image initially if no source
    if (!profileImg.src || profileImg.src === window.location.href) {
        profileImg.style.display = 'none';
    } else {
        photoPlaceholder.classList.add('hidden');
        profileImg.style.display = 'block';
    }
    
    // Create file input for photo upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    
    const handlePhotoUpload = () => {
        fileInput.click();
    };
    
    photoPlaceholder.addEventListener('click', handlePhotoUpload);
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profileImg.src = event.target.result;
                profileImg.style.display = 'block';
                photoPlaceholder.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    });
    
    // If image already exists, allow click to change
    if (profileImg.style.display === 'block') {
        profileImg.addEventListener('click', handlePhotoUpload);
        profileImg.style.cursor = 'pointer';
    }
}

// --- Add loading animation for images ---
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// --- Keyboard navigation for accessibility ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

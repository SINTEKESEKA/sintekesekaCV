// Hamburger Toggle
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('active');
}

// Mouse Tracking
const cursor = document.querySelector('.cursor-tracker');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Selection/Click Effect
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.5)';
    cursor.style.backgroundColor = '#003366';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = 'transparent';
});
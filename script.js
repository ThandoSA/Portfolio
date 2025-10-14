function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
        if (menu) menu.classList.toggle('open');
        if (icon) icon.classList.toggle('open');
}

const hamburger = document.querySelector('.hamburger-icon');
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Close mobile menu when a menu link is clicked (mobile UX)
const menuLinks = document.querySelectorAll('.menu-links a');
if (menuLinks && menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.menu-links');
            const icon = document.querySelector('.hamburger-icon');
            if (menu && menu.classList.contains('open')) menu.classList.remove('open');
            if (icon && icon.classList.contains('open')) icon.classList.remove('open');
        });
    });
}

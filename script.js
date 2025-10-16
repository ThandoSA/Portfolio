function toggleMenu(open) {
    const menu = document.querySelector('#mobile-menu');
    const icon = document.querySelector('#mobile-hamburger');
    if (!menu || !icon) return;
    const willOpen = typeof open === 'boolean' ? open : !menu.classList.contains('open');
    if (willOpen) {
        menu.classList.add('open');
        icon.classList.add('open');
        icon.setAttribute('aria-expanded', 'true');
        // focus first link for keyboard users
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
    } else {
        menu.classList.remove('open');
        icon.classList.remove('open');
        icon.setAttribute('aria-expanded', 'false');
        icon.focus();
    }
}

const hamburger = document.querySelector('#mobile-hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => toggleMenu());
    // open/close with Enter or Space
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        } else if (e.key === 'Escape') {
            toggleMenu(false);
        }
    });
}

// Close mobile menu when a menu link is clicked (mobile UX)
const menuLinks = document.querySelectorAll('#mobile-menu a');
if (menuLinks && menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

// allow Esc to close the menu when it's open anywhere
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menu = document.querySelector('#mobile-menu');
        if (menu && menu.classList.contains('open')) toggleMenu(false);
    }
});

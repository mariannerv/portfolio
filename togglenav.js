function toggleNav() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

// Add an event listener to the hamburger icon to toggle the navigation
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleNav);

// Close the nav when a link is clicked
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('header nav');
        nav.classList.remove('active'); // Close the nav
    });
});

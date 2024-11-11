// spin until the page is loaded
window.addEventListener('load', function() {
    document.querySelector('.spin-parent').style.display = 'none';
});

// responsive navbar handling function for small/large screen
var navMenu = document.querySelector('.nav-menu');
const hamMenu = document.querySelector('.hamburger');

hamMenu.addEventListener('click', function() {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",
() => {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
}))

function updateVasibilityAndColor(activeSection) {
    const sections = {
        'main-intro': 'about',
        'projects': 'proj',
        'social-media-links': 'links'
    };
    for (let section in sections) {
        document.getElementById(section).style.display = (section === activeSection) ? 'block' : 'none';
        document.getElementById(sections[section]).style.color = (section === activeSection) ? 'var(--border-color)' : 'var(--background-light-color)';
    }
}

document.getElementById('about').addEventListener('click', function() {
    updateVasibilityAndColor('main-intro')
})
document.getElementById('proj').addEventListener('click', function() {
    updateVasibilityAndColor('projects')
})
document.getElementById('links').addEventListener('click', function() {
    updateVasibilityAndColor('social-media-links')
})

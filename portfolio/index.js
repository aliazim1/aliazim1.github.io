// spin until the page is loaded
window.addEventListener('load', function() {
    document.querySelector('.spin-parent').style.display = 'none';
});

// Responsive navbar handling function for small/large screens
var navMenu = document.querySelector('.nav-menu');
const hamMenu = document.querySelector('.hamburger');

hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close navbar on link click and scroll to the section
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
        hamMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});



let toTopBtn = document.getElementById('top-btn');
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
toTopBtn.addEventListener("click", scrollToTop);

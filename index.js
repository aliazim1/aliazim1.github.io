// let navIcon = document.querySelector('.menu-icon');
// let navMenu = document.querySelector('.nav-menu');
// let exitIcon = document.querySelector('.exit-icon');

// navIcon.addEventListener("click", () => {
//     navIcon.classList.toggle('active');
//     navMenu.classList.toggle('active');
//     exitIcon.classList.toggle('active');
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
// () => {
//     navIcon.classList.remove('active');
//     navMenu.classList.remove('active');
// }))

window.addEventListener("load", function() {
    const loader = this.document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", function () {
        document.body.removeChild("loader");
    })
})

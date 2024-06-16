window.addEventListener('load', function() {
    document.querySelector('.spin-parent').style.display = 'none';
});

const hamMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', function() {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

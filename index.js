// spin until the page is loaded
window.addEventListener('load', function() {
    document.querySelector('.spin-parent').style.display = 'none';
});
// send message btn handling
var btnClick = document.getElementById("sendBtn");
btnClick.addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("textArea").value;
    var msgDisp = document.getElementById("msg-disp");
    if (name === "" || lname === "" || email === "" || msg === "") {
        msgDisp.textContent= "Please fill out the above fields";
        msgDisp.style.color =  "#ff0011";
        setTimeout(function() {
          msgDisp.textContent = "";
        }, 12000);
    }else { // clear all the input fields
        document.getElementById("name").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textArea").value = "";
        // display a message saying you can't get the message via send Button
        msgDisp.textContent= "Sorry, I can't get your message due to hosting this website on GitHub. You may contact me via email/number. Thanks!";
        msgDisp.style.color =  "#ff0011";
        setTimeout(function() {
          msgDisp.textContent = "";
        }, 12000);
    }
})

// responsive navbar handling function for small screen
var menuIcon = document.querySelector('.menu-icon');
var exitIcon = document.querySelector('.exit-icon');
var navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener("click", () => {
    navMenu.classList.add('active');
    exitIcon.classList.add('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",
() => {
    exitIcon.classList.remove('active');
    navMenu.classList.remove('active');
}))
document.querySelectorAll(".exit-icon").forEach(n => n.addEventListener("click",
() => {
    exitIcon.classList.remove('active');
    navMenu.classList.remove('active');
}))

function updateVasibilityAndColor(activeSection) {
    const sections = {
        'main-intro': 'about',
        'projects': 'proj',
        'contact': 'cont',
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
document.getElementById('cont').addEventListener('click', function() {
    updateVasibilityAndColor('contact')
})
document.getElementById('links').addEventListener('click', function() {
    updateVasibilityAndColor('social-media-links')
})

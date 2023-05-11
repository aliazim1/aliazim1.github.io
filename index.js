// send message btn handling
var btnClick = document.querySelector(".btn");
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
    }else {
        document.getElementById("name").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textArea").value = "";
        msgDisp.textContent= "Sorry, I can't get your message due to hosting this website on GitHub. You may contact me via email/number. Thanks!";
        msgDisp.style.color =  "#ff0011";
        setTimeout(function() {
          msgDisp.textContent = "";
        }, 12000);
    }
})

// responsive navbar handling function for small screen
var navIcon = document.querySelector('.menu-icon');
var exitIcon = document.querySelector('.exit-icon');
var navMenu = document.querySelector('.nav-menu');

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle('active');
    navMenu.classList.toggle('active');

})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
() => {
    exitIcon.classList.remove('active');
    navMenu.classList.remove('active');

}))
document.querySelectorAll(".exit-icon").forEach(n => n.addEventListener("click",
() => {
    exitIcon.classList.remove('active');
    navMenu.classList.remove('active');

}))

// about me visivility
function mainVisible() {
    document.getElementById('main-intro').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('about').style.color = '#00abf0';
    document.getElementById('proj').style.color = '#f8f8f8';
    document.getElementById('cont').style.color = '#f8f8f8';
}

// projects visibility
function projectVisible() {
    document.getElementById('projects').style.display = "block";
    document.getElementById('contact').style.display = "none";
    document.getElementById('main-intro').style.display = "none";
    document.getElementById('proj').style.color = '#00abf0';
    document.getElementById('about').style.color = '#f8f8f8';
    document.getElementById('cont').style.color = '#f8f8f8';
}

// contact visivility
function contactVisible() {
    document.getElementById('contact').style.display = "block";
    document.getElementById('main-intro').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('cont').style.color = '#00abf0';
    document.getElementById('about').style.color = '#f8f8f8';
    document.getElementById('proj').style.color = '#f8f8f8';
}

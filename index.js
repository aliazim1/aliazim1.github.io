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
        }, 5000);
    }else {
        document.getElementById("name").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textArea").value = "";
        msgDisp.textContent= "Thanks for your message!";
        msgDisp.style.color =  "#e8e8e8";
        setTimeout(function() {
          msgDisp.textContent = "";
        }, 5000);
    }
})

// responsive page handling function
let navIcon = document.querySelector('.menu-icon');
let navMenu = document.querySelector('.nav-menu');
navIcon.addEventListener("click", () => {
    navIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",
() => {
    navIcon.classList.remove('active');
    navMenu.classList.remove('active');
}))
// navbar sticky function
window.addEventListener("scroll", function() {
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky", this.scrollY > 0);
})


// contact visivility
function mainVisible() {
    if (document.getElementById('main-intro').style.display == 'block') {
        document.getElementById('main-intro').style.display = 'block';
        document.getElementById('about').style.color = '#F1C500';
        document.getElementById('proj').style.color = '#f8f8f8';
        document.getElementById('cont').style.color = '#f8f8f8';
        document.getElementById("contact").style.display = "none";
        document.getElementById('projects').style.display = 'none';
    } else {
        document.getElementById('main-intro').style.display = 'block';
        document.getElementById('projects').style.display = 'none';
        document.getElementById("contact").style.display = "none";
        document.getElementById('about').style.color = '#F1C500';
        document.getElementById('proj').style.color = '#f8f8f8';
        document.getElementById('cont').style.color = '#f8f8f8';
    }
}

// projects visibility
function projectVisible() {
    if (document.getElementById('main-intro').style.display == 'block') {
        document.getElementById('main-intro').style.display = 'none';
        document.getElementById("contact").style.display = "none";
        document.getElementById('projects').style.display = 'block';
        document.getElementById('proj').style.color = '#F1C500';
        document.getElementById('about').style.color = '#f8f8f8';
        document.getElementById('cont').style.color = '#f8f8f8';
    } else {
        document.getElementById("contact").style.display = "none";
        document.getElementById('main-intro').style.display = 'none';
        document.getElementById('projects').style.display = 'block';
        document.getElementById('proj').style.color = '#F1C500';
        document.getElementById('about').style.color = '#f8f8f8';
        document.getElementById('cont').style.color = '#f8f8f8';
    }
}

// contact visivility
function contactVisible() {
    if (document.getElementById('main-intro').style.display == 'block') {
        document.getElementById('main-intro').style.display = 'none';
        document.getElementById("contact").style.display = "block";
        document.getElementById('projects').style.display = 'none';
        document.getElementById('cont').style.color = '#F1C500';
        document.getElementById('about').style.color = '#f8f8f8';
        document.getElementById('proj').style.color = '#f8f8f8';
    } else {
        document.getElementById('main-intro').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById("contact").style.display = "block";
        document.getElementById('cont').style.color = '#F1C500';
        document.getElementById('about').style.color = '#f8f8f8';
        document.getElementById('proj').style.color = '#f8f8f8';
    }
}

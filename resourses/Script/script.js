eventDark = document.getElementById("Dark")
eventLight = document.getElementById("Light")
const p = document.getElementsByTagName("p");
const h2 = document.getElementsByTagName("h2");
const icon = document.getElementsByClassName("icon");
const a = document.getElementsByTagName("a");
const figcaption = document.getElementsByTagName("figcaption");


eventDark.addEventListener('click', DarkeventHandlerFunction);

function DarkeventHandlerFunction(event) {
    document.body.style.backgroundColor = "#000937";
    Array.prototype.forEach.call(p, ps => ps.style.color = "#d1b7ff");
    Array.prototype.forEach.call(h2, ps => ps.style.color = "#fce4ec");
    Array.prototype.forEach.call(a, ps => ps.style.color = "#fce4ec");
    Array.prototype.forEach.call(figcaption, ps => ps.style.color = "#fce4ec");    
    Array.prototype.forEach.call(icon, ps => ps.style.width = "4%");
    document.getElementById("HTML").src = "./resourses/images/images_color/html5-logo-24.png";
    document.getElementById("CSS").src = "./resourses/images/images_color/css3-logo-24.png";
    document.getElementById("JS").src = "./resourses/images/images_color/javascript-logo-24.png";
    document.getElementById("git").src = "./resourses/images/images_color/git-logo-24.png";
    document.getElementById("gitHub").src = "./resourses/images/images_color/github-logo-24.png";
    document.getElementById("Python").src = "./resourses/images/images_color/python-logo-24.png";
    document.getElementById("Email").src = "./resourses/images/images_color/mail-send-regular-24.png";
    document.getElementById("Linkedin").src = "./resourses/images/images_color/linkedin-square-logo-24.png";
    document.getElementById("gitHub2").src = "./resourses/images/images_color/github-logo-24.png";    
}  
 
eventLight.addEventListener('click', LighteventHandlerFunction)

function LighteventHandlerFunction(event) {
    Array.prototype.forEach.call(p, ps => ps.style.color = "#000937");
    Array.prototype.forEach.call(h2, ps => ps.style.color = "#000937");
    Array.prototype.forEach.call(a, ps => ps.style.color = "#000937");
    Array.prototype.forEach.call(figcaption, ps => ps.style.color = "#000937");  
    document.body.style.backgroundColor = "white";
    document.getElementById("HTML").src = "./resourses/images/html+html5+icon-1320186681398289636.png";
    document.getElementById("CSS").src = "./resourses/images/download (1).png";
    document.getElementById("JS").src = "./resourses/images/download.png";
    document.getElementById("git").src = "./resourses/images/download (2).png";
    document.getElementById("gitHub").src = "./resourses/images/25231.png";
    document.getElementById("Python").src = "./resourses/images/1024px-Python_icon_(black_and_white).svg.png";
    document.getElementById("Email").src = "./resourses/images/images_Email.png";
    document.getElementById("Linkedin").src = "./resourses/images/logo-linkedin-logo-icon-png-svg.png";
    document.getElementById("gitHub2").src = "./resourses/images/25231.png";
}  
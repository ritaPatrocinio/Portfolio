
eventDark = document.getElementById("Dark")
eventLight = document.getElementById("Light")
projects = document.getElementsByTagName("p")

eventDark.addEventListener('click', DarkeventHandlerFunction);

function DarkeventHandlerFunction(event) {
    document.getElementById("HTML").src = "./resourses/images/images_color/html5-logo-24.png";
    document.getElementById("CSS").src = "./resourses/images/images_color/css3-logo-24.png";
    document.getElementById("CSS").style.width = "15%";
    document.getElementById("HTML").style.width = "15%";
    document.getElementById("JS").src = "./resourses/images/images_color/javascript-logo-24.png";
    document.getElementById("JS").style.width = "15%";
    document.getElementById("git").src = "./resourses/images/images_color/git-logo-24.png";
    document.getElementById("git").style.width = "15%";
    document.getElementById("gitHub").src = "./resourses/images/images_color/github-logo-24.png";
    document.getElementById("gitHub").style.width = "15%";
    document.getElementById("Python").src = "./resourses/images/images_color/python-logo-24.png";
    document.getElementById("Python").style.width = "15%";
    document.getElementById("Email").src = "./resourses/images/images_color/mail-send-regular-24.png";
    document.getElementById("Email").style.width = "15%";
    document.getElementById("Linkedin").src = "./resourses/images/images_color/linkedin-square-logo-24.png";
    document.getElementById("Linkedin").style.width = "15%";
    document.getElementById("gitHub2").src = "./resourses/images/images_color/github-logo-24.png";
    document.getElementById("gitHub2").style.width = "15%";
    document.body.style.backgroundColor = "black";
    // document.body.style.textColor = "pink";
    // document.getElementById("Skills").style.backgroundColor = "white";
    // document.getElementById("Contact").style.backgroundColor = "white";
    projects.style.color = "white";
    
    
}  

function DarkeventHandlerFunction2(event) {

    document.body.style.Color = "pink";
    document.getElementById("Skills").backgroundColor = "white";
}  
 
eventLight.addEventListener('click', LighteventHandlerFunction)

function LighteventHandlerFunction(event) {
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
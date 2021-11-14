
eventDark = document.getElementById("Dark")
eventLight = document.getElementById("Light")
projects = document.getElementsByTagName("p")

eventDark.addEventListener('click', DarkeventHandlerFunction);

function DarkeventHandlerFunction(event) {
    document.body.style.backgroundColor = "black";
    document.body.style.textColor = "pink";
    document.getElementById("Skills").style.backgroundColor = "white";
    document.getElementById("Contact").style.backgroundColor = "white";
    projects.style.color = "white";
}  

function DarkeventHandlerFunction2(event) {

    document.body.style.Color = "pink";
    document.getElementById("Skills").backgroundColor = "white";
}  
 
eventLight.addEventListener('click', LighteventHandlerFunction)

function LighteventHandlerFunction(event) {
    document.body.style.backgroundColor = "white";
}  
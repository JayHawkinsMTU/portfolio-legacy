var projects = {};
var curProject = document.getElementById("no_project");
var curProjectTape = null;
function switchProject(projectTitle, fileName = projectTitle + ".gif") {
    // Handle tv screen
    document.getElementById("video").setAttribute("src", "assets/" + fileName);
    // Handle div containing project description
    curProject.className = "hidden";
    curProject = document.getElementById(projectTitle)
    curProject.className = "visible";
    var height = curProject.offsetHeight;
    document.getElementsByTagName("main")[0].style.height = height + "px";
    // Handle tape animation
    if (curProjectTape != null) {
        curProjectTape.style["bottom"] = ""; // Original position
        curProjectTape.style["opacity"] = "1";
    }
    // Eject - skip handling current tape
    if (projectTitle == "no_project") {
        curProjectTape = null;
        return;
    }
    curProjectTape = document.getElementById(projectTitle + "_tape");
    curProjectTape.style["bottom"] = "500px";
    curProjectTape.style["opacity"] = "0";

}

function hoverEject() {
    document.getElementById("eject_button").setAttribute("src", "assets/eject_hover.svg");
}

function unhoverEject() {
    document.getElementById("eject_button").setAttribute("src", "assets/eject.svg");
}

function eject() {
    switchProject("no_project");
}

// Mobile device handling
const MOBILE_P_FONT_SIZE = "25pt";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    mobileLayout();
}

function mobileLayout() {
    var elements = document.getElementsByTagName("main");
    // ADJUST MAIN
    for (var i = 0; i < elements.length; i++) {
        elements[i].style = "width: 90%; margin-left: auto; margin-right: auto; margin-top: 20px";
    };
    document.getElementById("maincontainer").style.display = "inline";
    // SCALE FONT SIZE UP
    document.getElementsByTagName("body")[0].style.fontSize = "x-large";
    // SIDE ELEMENTS
    var style = document.getElementById("sidebar").style;
    style.width = "100%";
    style.marginLeft = "auto";
    style.marginRight = "auto";
    style.marginTop = "20px";
    elements = document.getElementsByClassName("sideelement");
    for (var i = 0; i < elements.length; i++) {
        style = elements[i].style;
        style.width = "86%";
        style.marginLeft = "auto";
        style.marginRight = "auto";
        style.marginTop = "20px"
    }
    document.getElementById("pfp").style.width = "90%";
}
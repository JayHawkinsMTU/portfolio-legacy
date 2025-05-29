const ejectButton: HTMLElement = document.getElementById("eject_button");

var curProject: HTMLElement = document.getElementById("no_project");
var curProjectTape: HTMLElement | null = null;

eject();

function switchProject(projectTitle: string): void {
    const fileName: string = projectTitle + ".gif";
    // Handle tv screen
    document.getElementById("video").setAttribute("src", "assets/" + fileName);
    // Handle div containing project description
    curProject.className = "hidden";
    curProject = document.getElementById(projectTitle);
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

// Hover on the eject button
function hoverEject(): void {
    ejectButton.setAttribute("src", "assets/eject_hover.svg");
}

function unhoverEject(): void {
    ejectButton.setAttribute("src", "assets/eject.svg");
}

function eject(): void {
    switchProject("no_project");
}

// Mobile device handling
const MOBILE_P_FONT_SIZE = "25pt";

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    // true for mobile device
    mobileLayout();
}

function mobileLayout(): void {
    var elements: HTMLCollectionOf<HTMLElement> =
        document.getElementsByTagName("main");
    // ADJUST MAIN
    for (var i = 0; i < elements.length; i++) {
        const style: CSSStyleDeclaration = elements[i].style;
        style.width = "99%";
        style.marginLeft = "auto";
        style.marginRight = "auto";
        style.marginTop = "20px";
    }
    document.getElementById("maincontainer").style.display = "inline";
    // SCALE FONT SIZE UP
    document.getElementsByTagName("body")[0].style.fontSize = "x-large";
    // SIDE ELEMENTS
    var style = document.getElementById("sidebar").style;
    style.width = "100%";
    style.marginLeft = "auto";
    style.marginRight = "auto";
    style.marginTop = "20px";
    elements = document.getElementsByClassName(
        "sideelement"
    ) as HTMLCollectionOf<HTMLElement>;
    for (var i = 0; i < elements.length; i++) {
        style = elements[i].style;
        style.width = "95%";
        style.marginLeft = "auto";
        style.marginRight = "auto";
        style.marginTop = "20px";
    }
    document.getElementById("pfp").style.width = "95%";
}

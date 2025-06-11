var curSidePanel = undefined;
function switchPanel(id) {
    if (curSidePanel != undefined) {
        curSidePanel.hidden = true;
        curSidePanel.style.opacity = "0.0";
    }
    const newPanel = document.getElementById(id);
    newPanel.style.opacity = "1.0";
    newPanel.style.height = "auto";
    newPanel.style.width = "85ch";
    newPanel.hidden = false;
    curSidePanel = newPanel;
}

var curSidePanel: HTMLElement = undefined;

function switchPanel(id: string): void {
    if(curSidePanel != undefined) {
        curSidePanel.style.opacity = "0.0";
    }
    const newPanel = document.getElementById(id);
    newPanel.style.opacity = "1.0";
    newPanel.style.height = "auto";
    curSidePanel = newPanel;
}
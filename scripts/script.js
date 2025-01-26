addEventListeners();

function addEventListeners() {
    document.body.addEventListener("click", (ev) => {
        const isExpandableTitle = !!ev.target.closest(".expandable-icon");
        const expandable = ev.target.closest(".expandable");
    
        if (!isExpandableTitle) {
            return;
        }
        expandable.classList.toggle("expandable-open");
    });

    document.addEventListener("keydown", (ev) => {
        const sidenav = document.getElementById("sidenav");
        if (ev.key === "m" || ev.key === "M") {
            if (sidenav && sidenav.style.width === "0px") {
                openNav();
            } else if (sidenav && sidenav.style.width !== "0px") {
                closeNav();
            }
        }
    });

    window.addEventListener("resize", adjustContainerPosition);
    window.addEventListener("load", adjustContainerPosition);
}

function openNav() {
    document.getElementById("sidenav").style.width = "280px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
function collapseMenu() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("wrapper");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.style.marginTop = "0px";
    } else {
        x.className = "topnav";
        y.style.marginTop = "70px";
    }
}
let modeBtn = document.getElementById("modeBtn");
let topBtn = document.getElementById("topBtn");


modeBtn.onclick = function() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modeBtn.innerHTML = "Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        modeBtn.innerHTML = "Light Mode";
    }
};


window.onscroll = function() {
    if (window.scrollY > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};


topBtn.onclick = function() {
    window.scrollTo(0, 0);
};
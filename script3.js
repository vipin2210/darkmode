var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var clk_box = document.getElementById("toggler");
var circle = document.getElementById("toggler-circle");
clk_box.addEventListener("click", function () {
   
    if (!toggled) {
        bodyTag.classList.add("bg-black");
        hTag.classList.add("color-white");
        circle.style.marginLeft = "100px";
        toggled = true;
        console.log("Dark mode enabled");
    }
    else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bg-black");
        circle.style.marginLeft = "1px";
        toggled = false;
        console.log("Dark mode unabled");
    }
})
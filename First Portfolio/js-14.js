const aside = document.querySelector(".aside");
const btnOfmenu = document.querySelector(".btn-menu");
const myDire = btnOfmenu.firstElementChild;
const closeBtn = document.querySelector(".btn-close")

btnOfmenu.addEventListener("click", function() {
    aside.classList.toggle("show-aside");
    if (aside.classList.item("show-aside")) {
        btnOfmenu.classList.toggle("to-zero")
    }
});



closeBtn.addEventListener("click", function() {
    aside.classList.remove("show-aside");
})
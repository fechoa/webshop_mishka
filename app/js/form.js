/* Open Header Menu Mobile Start */
let btnMenu = document.querySelector(".Header-ButtonMenu");
let menu = document.querySelector(".Nav");
let btnIco = document.querySelector(".Header-ButtonIco");

btnMenu.onclick = function() {
    if (!menu.classList.contains("Nav_open")) {
        menu.classList.add("Nav_open");
        btnIco.classList.remove("Header-ButtonIco_open");
        btnIco.classList.add("Header-ButtonIco_close");
    } else {
        menu.classList.remove("Nav_open");
        btnIco.classList.add("Header-ButtonIco_open");
        btnIco.classList.remove("Header-ButtonIco_close");
    }
};

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && menu.classList.contains("Nav_open")) {
        menu.classList.remove("Nav_open");
        btnIco.classList.add("Header-ButtonIco_open");
        btnIco.classList.remove("Header-ButtonIco_close");
    }
})
/* Open Header Menu Mobile End */

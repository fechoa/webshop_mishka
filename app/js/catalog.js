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


/* Modal Start */
let indexBtn = document.querySelector(".ProductWeek-Button");
let modal = document.querySelector(".Modal");

let catalogBtns = document.querySelectorAll(".Catalog-Basket");
let catalogBtn1 = catalogBtns[0];
let catalogBtn2 = catalogBtns[1];
let catalogBtn3 = catalogBtns[2];


let modalBtns = document.querySelectorAll(".Button_modal");
let btnS = modalBtns[0];
let btnM = modalBtns[1];
let btnL = modalBtns[2];

let sendBtn = document.querySelector(".Modal-ButtonSend");



catalogBtn1.addEventListener("click", function() {
    if (modal.classList.contains("Modal_off")) {
        modal.classList.remove("Modal_off")
    }
});
catalogBtn2.addEventListener("click", function() {
    if (modal.classList.contains("Modal_off")) {
        modal.classList.remove("Modal_off")
    }
});
catalogBtn3.addEventListener("click", function() {
    if (modal.classList.contains("Modal_off")) {
        modal.classList.remove("Modal_off")
    }
});

window.addEventListener("keydown", function(event) {
    if (!modal.classList.contains("Modal_off" && event.keyCode === 27)) {
        modal.classList.add("Modal_off");
    }    
})


btnS.addEventListener("click", function() {
    if (!btnS.classList.contains("Button_modal_active")) {
        btnS.classList.add("Button_modal_active")

        if (btnM.classList.contains("Button_modal_active")) {
            btnM.classList.remove("Button_modal_active")
        } else if (btnL.classList.contains("Button_modal_active")) {
            btnL.classList.remove("Button_modal_active")
        }
    } 

    if (btnS.classList.contains("Button_modal_active") || btnM.classList.contains("Button_modal_active") || btnL.classList.contains("Button_modal_active")) {
        sendBtn.classList.remove("Button_modalsend_off");
    } else {
        sendBtn.classList.add("Button_modalsend_off");
    }
})

btnM.addEventListener("click", function() {
    if (!btnM.classList.contains("Button_modal_active")) {
        btnM.classList.add("Button_modal_active")

        if (btnS.classList.contains("Button_modal_active")) {
            btnS.classList.remove("Button_modal_active")
        } else if (btnL.classList.contains("Button_modal_active")) {
            btnL.classList.remove("Button_modal_active")
        }
    } 

    if (btnS.classList.contains("Button_modal_active") || btnM.classList.contains("Button_modal_active") || btnL.classList.contains("Button_modal_active")) {
        sendBtn.classList.remove("Button_modalsend_off");
    } else {
        sendBtn.classList.add("Button_modalsend_off");
    }    
})

btnL.addEventListener("click", function() {
    if (!btnL.classList.contains("Button_modal_active")) {
        btnL.classList.add("Button_modal_active")

        if (btnS.classList.contains("Button_modal_active")) {
            btnS.classList.remove("Button_modal_active")
        } else if (btnM.classList.contains("Button_modal_active")) {
            btnM.classList.remove("Button_modal_active")
        }
    } 

    if (btnS.classList.contains("Button_modal_active") || btnM.classList.contains("Button_modal_active") || btnL.classList.contains("Button_modal_active")) {
        sendBtn.classList.remove("Button_modalsend_off");
    } else {
        sendBtn.classList.add("Button_modalsend_off");
    }    
})






/* Modal End */


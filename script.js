const navEmail = document.querySelector ('#navEmail');
const opcionesDesktop = document.querySelector ('.opcionesDesktop');

const menuHam = document.querySelector ('.iconmenu');
const opcionesMobile = document.querySelector ('.opcionesMobile');

const menuCart = document.querySelector ('.shoppingIcon');
const shoppingCart = document.querySelector ('.shoppingCart');

navEmail.addEventListener ('click', toggleopcionesDesktop);
menuHam.addEventListener ('click', toggleopcionesMobile);
menuCart.addEventListener ('click', toggleoshoppingCart);

function toggleopcionesDesktop() {
    const isCartClosed = shoppingCart.classList.contains('inactive');
    if (!isCartClosed){
       shoppingCart.classList.add ('inactive'); 
    }

    opcionesDesktop.classList.toggle ('inactive');
}

function toggleopcionesMobile() {
    const isCartClosed = shoppingCart.classList.contains('inactive');
    if (!isCartClosed){
       shoppingCart.classList.add ('inactive'); 
    }

    opcionesMobile.classList.toggle ('inactive');
}

function toggleoshoppingCart() {
    const isopMobileClosed = opcionesMobile.classList.contains('inactive');
    const opDesktopClosed = opcionesDesktop.classList.contains('inactive');

    if (!isopMobileClosed){
        opcionesMobile.classList.add ('inactive'); 
    }

    
    if (!opDesktopClosed){
        opcionesDesktop.classList.add ('inactive'); 
    }

    shoppingCart.classList.toggle ('inactive');
}


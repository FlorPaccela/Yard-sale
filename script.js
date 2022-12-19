const navEmail = document.querySelector ('#navEmail');
const opcionesDesktop = document.querySelector ('.opcionesDesktop');

navEmail.addEventListener ('click', toggleopcionesDesktop);

function toggleopcionesDesktop() {
    opcionesDesktop.classList.toggle ('inactive');
}
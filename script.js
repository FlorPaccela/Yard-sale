console.log ('Hola, mundo')

const h1 = document.querySelector ('h1');
//const p = document.querySelector ('p');
//const title = Document.querySelector ('.title');
//const pid = document.querySelector ('#pid');
const input = document.querySelector ('input');
const button = document.querySelector ('button');

h1.innerHTML = "La cuenta de Pace";
h1.innerText = "La cuenta de Pace";

console.log (input.getAttribute ('type'));
input.setAttribute ('type', 'verde');

button.classList.remove ('buttonSecondary');
button.classList.add ('otroboton');

h1.classList.add ('otraclasemas');
h1.classList.contains ('otraclasemas');

input.value = '123';

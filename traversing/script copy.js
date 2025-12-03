const h1 = document.querySelector('h1');



const cloneTitulo = h1.cloneNode(true);


const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);

console.log(lista.querySelector('li:last-child'));
console.log(lista.previousSibling)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const menu = document.querySelector('.menu');;




//contato.replaceChild(lista, titulo)

const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo texto h1';
novoH1.classList.add('titulo');


menu.appendChild(novoH1)
menu.appendChild(cloneTitulo)
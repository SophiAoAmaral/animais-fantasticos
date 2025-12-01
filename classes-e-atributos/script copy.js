const menu = document.querySelector('.menu');

console.log(menu.classList)//lista de classes
menu.classList.add('ativo');
menu.classList.remove('azul');
//menu.classList.toggle('azul'); adiciona se n tiver e se tiver tira

//verifica se possui a classe
if (menu.classList.contains('azul')) {
  menu.classList.add('possui azul')
}

//className retorna uma string

menu.className += ' remove';

const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute('alt' , 'e uma raposa ')
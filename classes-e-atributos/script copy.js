const imgs = document.querySelectorAll('img');

imgs.forEach((img, index, array)=>{
    console.log(img, index, array)
});

//transformar coisas q nao sao array em array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((titulo)=>{
    console.log(titulo)
})
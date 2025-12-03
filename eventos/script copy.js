//const img = document.querySelector('img');

 //function callback(event){
  //  console.log(this)
    
//}

//img.addEventListener('click', callback);



//const animaisLista = document.querySelector('.animais-lista');
function callbackLista(e){
    console.log(e.currentTarget);
    console.log(e.target)
}

//animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"]');

function prevent(e){
    e.preventDefault();
    console.log(e.target)
    console.log(this.getAttribute('href'));

}


linkExterno.addEventListener('click', prevent);

const h1 = document.querySelector('h1');

function handle(e){
    console.log(e.key)

    if(e.key === 'e'){
        document.documentElement.classList.toggle('textomaior');
    }else if(e.key === 'a'){
        document.documentElement.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handle);


const imgs = document.querySelectorAll('img');

function aumenta(e){
    console.log(e.target)
}


imgs.forEach((img)=>{
    img.addEventListener('click', aumenta)
})
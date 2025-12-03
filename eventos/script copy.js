//const img = document.querySelector('img');

//function callback(event){
    //console.log(event)
//}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.target)
    console.log(event.type)
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log(this)
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event){
    console.log(event.type, event)


}
//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('keydown', handleEvent)


function handlekeyBord(event){
    if(event.key=== 'p'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown', handlekeyBord);


const imgs = document.querySelectorAll('img');

function handleImg(e){
    console.log(e.target)
}

imgs.forEach((img)=>{
   img.addEventListener('click', handleImg)
});
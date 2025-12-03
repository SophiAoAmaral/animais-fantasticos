// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links;


//selecionei todos os elementos do site que sao internos apos isso crio o forEach pois preciso passar por cada elemento e nele adiciono o evento de click e passo uma funçao
//apos isso crio a funçaõ que foi passada, nela eu previno a ação padrao do browser ao clicar no link, dps utilizando currentatrget que retorna o elemento que estou clicando por completo
//e adiciono a class 'ativo' nos elementos 
// apos isso crio mais um loop por cada elemento e falo para remover a class 'ativo'
//assim quando eu clico em um adiciona e se ja tiver em outra remove
linksInternos = document.querySelectorAll('a[href^="#"]');



//criando a funçao passando event(e), primeiro previnindo a ação padrao do browser dps
function handleClick(e){
    e.preventDefault();

    linksInternos.forEach((link)=>{
        link.classList.remove('ativo');
    });

    e.currentTarget.classList.add('ativo');

}


linksInternos.forEach((link)=>{
    link.addEventListener('click', handleClick);

});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados;
const todosElementod = document.querySelectorAll('body');


function handleElement(e){
    console.log(e.target)
}
todosElementod.forEach((elemento)=>{
    elemento.addEventListener('click', handleElement)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickt(e){
    if(e.key ==='t'){
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickt)




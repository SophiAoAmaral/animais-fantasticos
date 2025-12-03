// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function addclass(e){
    e.preventDefault();

    linksInternos.forEach((link)=>{
        link.classList.remove('ativo')
    })

    e.currentTarget.classList.add('ativo')
    
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', addclass)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelector('body');

function elements(e){
    console.log(e.target)
    e.target.remove()
}

todosElementos.addEventListener('click', elements)


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentaText(e){
    if(e.key === 't'){
        document.documentElement.classList.toggle('textomaior')
    }
}


window.addEventListener('keydown', aumentaText)


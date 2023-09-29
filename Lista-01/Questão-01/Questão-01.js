const botao = document.querySelector('button')
const ul = document.querySelector('ul')

function gerarNumero(){
    return Math.floor(Math.random() * 100)+1;
}

botao.addEventListener('click', () => {
    console.log("cliquei")
    const li = document.createElement('li')
    li.textContent = gerarNumero()
    ul.appendChild(li)
})


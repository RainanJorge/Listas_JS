import * as funcoes from './Questão-01.js'
const lista = [];
export {lista}

class Produtos{
    infos (id, nome, valor){
        this.id = id
        this.nome = nome
        this.valor = valor
        this.comprado = false;
    }
}

let nomeItem = document.querySelector('#item')
let valorItem = document.querySelector('#valor')
const addItem = document.querySelector('#add')
const tbody = document.querySelector('tbody');

function saveList (objeto){
    const tr = document.createElement('tr')
    tr.classList.add('linha')
    const td = document.createElement('td')
    td.innerText = objeto.nome;
    const td2 = document.createElement('td')
    td2.innerText = objeto.valor
    const td3 = document.createElement('td')
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('checked')
    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            funcoes.marcar(td)
            funcoes.marcar(td2)
            objeto.comprado = true;

        }
        else{
            funcoes.desmarcar(td)
            funcoes.desmarcar(td2)
            objeto.comprado = false;
        }
    })
    td3.appendChild(checkbox)

    //Função para remover

    const td4 = document.createElement('td')
    const remover = document.createElement('button')
    remover.addEventListener('click', (e) => {
        e.preventDefault()
        tbody.removeChild(tr)
        funcoes.remover(objeto)
    })
    td4.appendChild(remover)

        remover.textContent = 'Remover'
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)
        console.log(tr)
}

function exibir(){
    const resultado = funcoes.listar()
    tbody.innerHTML = '';
    resultado.forEach((item) => {
        saveList(item)
    })
}

addItem.addEventListener('click', (e) => {
    e.preventDefault();
    const item = nomeItem.value;
    const valor = valorItem.value;
    nomeItem.value = '';
    valorItem.value = '';
    const novoProduto = new Produtos()

    novoProduto.nome = item;
    novoProduto.valor = valor;
    console.log(novoProduto)
    funcoes.addItem(novoProduto)

    exibir()
})
exibir()
import { lista } from "./script.js";
let id = 1;

function gerarID(){
    return id ++;
}

export function addItem(item) {
    item.id = gerarID()
    lista.push(item)

    localStorage.setItem('novoProduto', JSON.stringify(lista))
}

export function remover(item) {
    const index = lista.findIndex((produto) => produto.id === item.id);
    if(index !== -1){
        lista.splice(index, 1);

        localStorage.removeItem(item.id.toString());
        localStorage.setItem('novoProduto', JSON.stringify(lista))
    }
}

export function marcar(item) {
    item.classList.add('riscado')
}

export function desmarcar(item) {
    item.classList.add('riscado')
}

export function listar() {
    if(localStorage.hasOwnProperty('novoProduto')){
        const listaAtual = JSON.parse(localStorage.getItem('novoProduto'))
        return listaAtual;
    }
}

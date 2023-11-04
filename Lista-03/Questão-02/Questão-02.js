class ClienteBanco {
    constructor() {
        this.nome = "";
        this.documento = "";
        this.saldo = 0;
    }

    addDados(nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    mostrarDados() {
        return `Nome: ${this.nome}, Documento: ${this.documento} e Saldo: ${this.saldo}`;
    }
}

const novoCliente = new ClienteBanco();
const botaoADD = document.getElementById('addClienteBanco');    

botaoADD.addEventListener('click', () => {
    const nomeCliente = document.getElementById('nome').value;
    const documentoCliente = parseFloat(document.getElementById('documento').value);
    let saldoCliente = parseFloat(document.getElementById('saldo').value);
    if(nomeCliente.trim() === "" && documentoCliente.trim() === "" && saldoCliente.trim() === ""){
        alert("Preencha os campos!");
    }
    else{

        novoCliente.addDados(nomeCliente, documentoCliente, saldoCliente);
        const dadosCliente = novoCliente.mostrarDados();
        
        const li = document.createElement("li");
        document.getElementById('ListaClientes').appendChild(li);
        li.textContent = dadosCliente;

        const inputDepositar = document.createElement("input");
        inputDepositar.textContent = "";
        document.getElementById('ListaClientes').appendChild(inputDepositar);
        const Depositar = document.createElement("button");
        Depositar.textContent = "Depositar";
        document.getElementById('ListaClientes').appendChild(Depositar);

        const inputSacar = document.createElement("input");
        inputSacar.textContent = "";
        document.getElementById('ListaClientes').appendChild(inputSacar);
        const Sacar = document.createElement("button");
        Sacar.textContent = "Sacar";
        document.getElementById('ListaClientes').appendChild(Sacar);
        
        Depositar.addEventListener('click', () => {
            const valorDeposito = parseFloat(inputDepositar.value);
            saldoCliente += valorDeposito;
            li.textContent = novoCliente.mostrarDados();
            novoCliente.saldo = saldoCliente;
            inputSacar = "";
        })

        Sacar.addEventListener('click', () => {
            const valorSaque = parseFloat(inputSacar.value);
            saldoCliente -= valorSaque;
            li.textContent = novoCliente.mostrarDados();
            novoCliente.saldo = saldoCliente;
            inputDepositar.value = "";
        })
    }
})
    
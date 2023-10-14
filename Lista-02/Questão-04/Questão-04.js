const informacaoUsuario = [];
const botaoAdd = document.getElementById('adicionar');
const resultadoLista = document.getElementById('resultadoLista');
const exibirSalarios = document.getElementById('maior_menorSalario');

botaoAdd.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const salario = document.getElementById('salario').value;
    if(nome.trim() === "" && salario.trim() === ""){
        alert("Prenncha os campos!");
    }
    else{
        const objeto = {
            nomePessoa : nome,
            salarioPessoa : salario
        };
        informacaoUsuario.push(objeto);
        
        document.getElementById('nome').value = "";
        document.getElementById('salario').value = "";
        resultadoLista.innerHTML = "";
        
        informacaoUsuario.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `Nome: ${item.nomePessoa} e Salário: ${item.salarioPessoa}`;
            resultadoLista.appendChild(li);
        });
        const salarios = informacaoUsuario.map((item) => parseFloat(item.salarioPessoa));
        const maiorSalario = Math.floor(Math.max(...salarios));
        const menorSalario = Math.floor(Math.min(...salarios));

        exibirSalarios.textContent = `Maior salário: ${maiorSalario} e Menor salário: ${menorSalario}`;
    }
});
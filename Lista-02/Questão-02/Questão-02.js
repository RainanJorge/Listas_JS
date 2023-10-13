const itemTarefa = document.getElementById('itemTarefa');
const tarefas = document.getElementById('tarefas');

itemTarefa.addEventListener('keyup', (event) => {
  if (event.key === "Enter") {
    const conteudoInput = itemTarefa.value;
    const gerarLista = document.createElement("li");
    gerarLista.textContent = conteudoInput;
    tarefas.appendChild(gerarLista);
    itemTarefa.value = "";

    const botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.addEventListener('click', () => {
        gerarLista.remove();
        botao.remove()
    });
    tarefas.appendChild(botao);
  }
});

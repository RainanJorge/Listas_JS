const listaEventos = []
const botaoAddEvento = document.getElementById('ADDevento');
const listaDeEventos = document.getElementById('listaDeEventos');

botaoAddEvento.addEventListener('click', () => {
    const evento = document.getElementById('evento').value;
    const data = document.getElementById('data').value;
    if(evento.trim() === "" && data.trim() === ""){
        alert("Preencha os campos!")
    }
    else{
        const objeto = {
            nomeEvento : evento,
            localData : data

        };
        listaEventos.push(objeto);

        // Limpando os espaços dos campos de texto
        document.getElementById('evento').value = "";
        document.getElementById('data').value = "";
        
        listaEventos.innerHTML = "";
        
        // Ordenando os eventos usando o metodo "Sort"
        listaEventos.sort((a, b) => {
            const dataA = new Date(a.localData);
            const dataB = new Date(b.localData);
            
            if(dataA < dataB){
                return -1;
            }
            else if(dataA > dataB){
                return 1; 
            }
            else{
                return 0;
            }
        });
        
        listaDeEventos.replaceChildren();
        
        // Criando uma "Li" e mostrando os eventos ordenados
        listaEventos.forEach((item) => {
            const li = document.createElement("li")
            listaDeEventos.appendChild(li);
            li.textContent = `Evento: ${item.nomeEvento} ============= Data: ${item.localData}`
        })
    }
})
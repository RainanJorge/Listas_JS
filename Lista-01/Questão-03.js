const calcularMelhorCombustivel = () => {
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const alcool = parseFloat(document.getElementById('alcool').value);

    if(gasolina/alcool <= 0.7){
        document.getElementById('resultado').textContent = "Abastece Gasolina";
    }
    else{
        document.getElementById('resultado').textContent = "Abastece Alcool"
    }
};

const botao = document.getElementById('botao');
botao.addEventListener('click', calcularMelhorCombustivel);

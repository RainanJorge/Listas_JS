const botao = document.getElementById('botao');
const resultadoPotencia = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const base = parseFloat(document.querySelector('#base').value);
    const expoente = parseFloat(document.querySelector('#expoente').value);

    const resultado = Math.pow(base, expoente);

    resultadoPotencia.textContent = `Resultado: ${resultado}`
})



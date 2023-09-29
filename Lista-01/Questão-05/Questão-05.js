const botao = document.getElementById('botao');
const mostrarResultado = document.getElementById('resultadoDoLançamento');
botao.addEventListener('click', () => {
    const resultado = [0, 0, 0, 0, 0, 0];
    for(let i = 0; i <1000000; i++){
        const resultadoDado = Math.floor(Math.random() * 6) + 1;
        resultado[resultadoDado - 1]++;
    }
    mostrarResultado.innerHTML = `
    <p> O número 1 aparece : ${resultado[0]} vezes.</p>
    <p> O número 2 aparece : ${resultado[1]} vezes.</p>
    <p> O número 3 aparece : ${resultado[2]} vezes.</p>
    <p> O número 4 aparece : ${resultado[3]} vezes.</p>
    <p> O número 5 aparece : ${resultado[4]} vezes.</p>
    <p> O número 6 aparece : ${resultado[5]} vezes.</p>
    `;
});


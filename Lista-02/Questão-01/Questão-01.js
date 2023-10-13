const button = document.getElementById('achar');
let array = [];

button.addEventListener('click', () => {
    const numeros = document.getElementById('numeros').value;
    const separador = document.getElementById('separador').value;

    const arrayNumeros = numeros.split(separador).map(Number);

    const maior = Math.max(...arrayNumeros);
    const menor = Math.min(...arrayNumeros);

    document.getElementById('resultado').textContent = `Maior = ${maior}, Menor = ${menor}`;
})

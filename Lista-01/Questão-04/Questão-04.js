function converteFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function converterKelvin(celsius){
    return celsius + 273.15;
}

const tempFahrenheit = document.getElementById('temp_fahrenheit');
const tempKelvin = document.getElementById('temp_kelvin');
const tempCelsius = (document.getElementById('celsius'));
const mensagem = document.getElementById('mensagem_deErro');

tempCelsius.addEventListener('keyup', () => {
    const celsius = parseFloat(tempCelsius.value)

    if(isNaN(celsius)){
        tempFahrenheit.textContent = '-';
        tempKelvin.textContent = '-';
        mensagem.textContent = 'Digite um valor válido:';
    }
    else{
        const conversao_fahrenheit = converteFahrenheit(celsius);
        const conversao_kelvin = converterKelvin(celsius);
        tempFahrenheit.textContent = conversao_fahrenheit.toFixed(2) + 'ºF';
        tempKelvin.textContent = conversao_kelvin.toFixed(2) + 'K';
        mensagem.textContent = '';
    }

})
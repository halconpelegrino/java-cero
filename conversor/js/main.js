// Selección de elementos del Dom
const inputValor = document.getElementById('valorInput');
const btnCelsius = document.getElementById('btnCelsius');
const btnFahrenheit = document.getElementById('btnFahrenheit');
const resultado = document.getElementById('resultadoWeb');

// Lógica de conversión (Igual que en tu  Conversor.java)
function calcular(tipo) {
  const valor = parseFloat(inputValor.value);

  if (isNaN(valor)) {
    resultado.textContent = "⚠️ Ingrese un valor";
    return;

  }
  if (tipo === 'C') {
    let f = (valor * 9 / 5) + 32;
    resultado.textContent = `${valor}°C = ${f.toFixed(2)} °F`;
  } else {
    let c = (valor - 32) * 5 / 9;
    resultado.textContent = `${valor}°F = ${c.toFixed(2)}°C`;
  }
}

// Escuchadores de eventos (Sin eventos en línea)
btnCelsius.addEventListener('click', () => calcular('C'));
btnFahrenheit.addEventListener('click', () => calcular('F'));
    


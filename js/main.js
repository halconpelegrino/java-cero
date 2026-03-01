
// 1. Reloj en tiempo real
function actualizarReloj() {
  const now = new Date();
  const opciones = {
    weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  document.getElementById('fecha-hora').textContent = now.toLocaleDateString('es-ES', opciones);
}
setInterval(actualizarReloj, 1000);
// 2. Simulación de Clima (Próximo paso: Conectar a API Real)
async function obtenerClima() {
  // Nota para Víctor: Aquí usaremos una API Key de OpenWeatherMap más adelante
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CONFIG.CITY}&appid=${CONFIG.WEATHER_API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;

  console.log("Conectando con OpenWeather...");

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok) {
      // 1. Extraemos y redondeamos la temperatura
      const tempReal = Math.round(datos.main.temp);

      const iconoCodigo = datos.weather[0].icon; // Ej: "01d" (sol), "04n" (nubes)
      // 2.  Construimos la URL del icono oficial de OpenWeather ej: "cielo despejado")
      const iconoUrl = `https://openweathermap.org/img/wn/${iconoCodigo}@2x.png`;

      // 3. ¡INYECTAMOS EN EL HTML!
      // Buscamos el elemento por su ID y le cambiamos el texto
      document.getElementById("clima-temp").textContent = `${tempReal}ºC`;
      // Cambiamos el icono (sustituimos el emoji por una imagen real)
      const iconoElemento = document.getElementById("clima-icon");
      iconoElemento.innerHTML = `<img src="${iconoUrl}" alt="Clima" style="width: 30px; vertical-align: middle;">`;

      console.log("¡Clima actualizado con éxito!");
    } else {
      console.error("Error en la respuesta de la API:", datos.message);
    }
  } catch (error) {
    console.error("Error de conexión:", error);
    document.getElementById("clima-temp").textContent = "Error";
  }
}

obtenerClima();
  

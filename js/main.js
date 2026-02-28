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
  // Por ahora, pondremos un dato de prueba
  document.getElementById('clima-temp').textContent = "24ºC";
  
}
obtenerClima();
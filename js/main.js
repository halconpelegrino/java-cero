/**
 * RATA AUDAZ - Lógica Principal
 * Desarrollado por: Víctor Manuel
 * Sistema: Linux Mint 2026
 */

// --- 1. RELOJ EN TIEMPO REAL ---
function actualizarReloj() {
  const now = new Date();
  const opciones = {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const relojElemento = document.getElementById("fecha-hora");
  if (relojElemento) {
    relojElemento.textContent = now.toLocaleDateString("es-ES", opciones);
  }
}

setInterval(actualizarReloj, 1000);

// --- 2. LÓGICA DE CLIMA (CONEXIÓN API REAL) ---
async function obtenerClima() {
  // Verificamos si CONFIG existe (inyectado por el Robot de GitHub)
  if (typeof CONFIG === "undefined") {
    console.warn("Rata Audaz: Esperando configuración...");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CONFIG.CITY}&appid=${CONFIG.WEATHER_API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok) {
      const tempReal = Math.round(datos.main.temp);
      const iconoCodigo = datos.weather[0].icon;
      const iconoUrl = `https://openweathermap.org/img/wn/${iconoCodigo}@2x.png`;

      const tempElemento = document.getElementById("clima-temp");
      const iconoElemento = document.getElementById("clima-icon");

      if (tempElemento) {
        tempElemento.textContent = `${tempReal}ºC`;
      }

      if (iconoElemento) {
        // CORRECCIÓN AQUÍ: Inyección limpia del icono
        iconoElemento.innerHTML = `<img src="${iconoUrl}" alt="Clima" style="width: 30px; vertical-align: middle;">`;
      }

      console.log("¡Clima actualizado con éxito!");
    }
  } catch (error) {
    console.error("Error Rata Audaz:", error);
    if (document.getElementById("clima-temp")) {
      document.getElementById("clima-temp").textContent = "Offline";
    }
  }
}

// --- 3. ARRANQUE AL CARGAR LA PÁGINA ---
document.addEventListener("DOMContentLoaded", () => {
  actualizarReloj();
  obtenerClima();
  // Actualiza el clima cada 15 minutos automáticamente
  setInterval(obtenerClima, 900000);
});

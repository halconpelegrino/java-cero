/**
 * RATA AUDAZ - Lógica Principal
 * Sistema: Linux Mint 2026
 */

// --- 1. CONFIGURACIÓN ---
const CONFIG = {
  WEATHER_API_KEY: import.meta.env?.VITE_WEATHER_API_KEY || "",
  CITY: "Montevideo,UY",
  UNITS: "metric",
  LANG: "es",
};

// --- 2. RELOJ EN TIEMPO REAL (Recuperado) ---
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
  const elReloj = document.getElementById("fecha-hora");
  if (elReloj) elReloj.textContent = now.toLocaleDateString("es-ES", opciones);
}

// --- 3. LÓGICA DE CLIMA ---
async function obtenerClima() {
  if (!CONFIG.WEATHER_API_KEY) return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CONFIG.CITY}&appid=${CONFIG.WEATHER_API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;

  try {
    const res = await fetch(url);
    const datos = await res.json();
    if (res.ok) {
      const temp = Math.round(datos.main.temp);
      const hum = datos.main.humidity;
      const viento = Math.round(datos.wind.speed * 3.6);
      const desc = datos.weather[0].description;
      const icono = `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`;

      // Actualizar tarjeta central
      document.getElementById("clima-temp").textContent = `${temp}ºC`;
      document.getElementById("clima-hum").textContent = `${hum}%`;
      document.getElementById("clima-viento").textContent = `${viento} km/h`;
      document.getElementById("clima-desc").textContent = desc.toUpperCase();
      document.getElementById("clima-icon").innerHTML =
        `<img src="${icono}" width="50">`;

      // Actualizar navbar
      document.getElementById("nav-clima-temp").textContent = `${temp}ºC`;
      document.getElementById("nav-clima-icon").innerHTML =
        `<img src="${icono}" width="20">`;
    }
  } catch (e) {
    console.error("Error clima:", e);
  }
}

// --- 4. ARRANQUE ---
document.addEventListener("DOMContentLoaded", () => {
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
  obtenerClima();
  setInterval(obtenerClima, 900000); // Cada 15 min
});


/**  -----
async function obtenerClimaLocal() {
  const API_KEY = "27a20cb081c14b4719831f69a5da30fb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Montevideo,UY&appid=${API_KEY}&units=metric&lang=es`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok) {
      document.getElementById("clima-temp").textContent =
        `${Math.round(datos.main.temp)}ºC`;
      const icono = datos.weather[0].icon;
      document.getElementById("clima-icon").innerHTML =
        `<img src="https://openweathermap.org/img/wn/${icono}.png" width="30">`;
      console.log("Prueba local exitosa");
    }
  } catch (e) {
    console.error("Error en prueba:", e);
  }
}
obtenerClimaLocal();  ---*/

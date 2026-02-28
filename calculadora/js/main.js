// 1. Selección de elementos
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator__button");

let valorActual = "0";
let primerOperando = null;
let operador = null;
let esperandoSegundoOperando = false;

// 2. Escuchar los clicks
buttons.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenido = boton.innerText;

    // --- CADENA DE LÓGICA CONECTADA ---

    // 1. Prioridad: ¿Es el botón de limpiar?
    if (contenido === "C") {
      limpiarTodo();
    }
    // 2. ¿Es un número o punto?
    else if (!isNaN(contenido) || contenido === ".") {
      manejarNumero(contenido);
    }
    // 3. ¿Es el signo igual?
    else if (contenido === "=") {
      manejarResultado();
    }
    // 4. Si no es nada de lo anterior, es un operador (+, -, ×, ÷)
    else {
      manejarOperador(contenido);
    }

    actualizarPantalla();
  });
});

// Función de limpieza completa
function limpiarTodo() {
  valorActual = "0";
  primerOperando = null;
  operador = null; // <-- Importante resetear esto también
  esperandoSegundoOperando = false;
}

// 3. Funciones de lógica (Mantenemos tus funciones que ya funcionan bien)
function manejarNumero(num) {
  if (esperandoSegundoOperando) {
    valorActual = num;
    esperandoSegundoOperando = false;
  } else {
    valorActual = valorActual === "0" ? num : valorActual + num;
  }
}

function manejarOperador(opElegido) {
  const valorNumerico = parseFloat(valorActual);

  if (primerOperando === null) {
    primerOperando = valorNumerico;
  } else if (operador) {
    const resultado = calcular(primerOperando, valorNumerico, operador);
    valorActual = String(resultado);
    primerOperando = resultado;
  }

  esperandoSegundoOperando = true;
  operador = opElegido;
}

function calcular(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      if (b === 0) {
        alert("Error: No se puede dividir por cero");
        return 0;
      }
      return a / b;
    default:
      return b;
  }
}

function manejarResultado() {
  if (operador !== null && !esperandoSegundoOperando) {
    const resultado = calcular(
      primerOperando,
      parseFloat(valorActual),
      operador,
    );
    valorActual = String(resultado);
    primerOperando = null;
    operador = null;
    esperandoSegundoOperando = false;
  }
}

function actualizarPantalla() {
  display.innerText = valorActual;
  
}

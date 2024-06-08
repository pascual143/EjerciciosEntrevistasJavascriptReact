// 1.Calculadora de IMC:

// Crea una función en JavaScript que calcule el Índice de Masa Corporal (IMC) de una persona a partir de su peso y altura. 
// La función debe tomar dos parámetros: peso (en kilogramos) y altura (en metros). 
// La función debe devolver un valor numérico que represente el IMC, y también debe mostrar una clasificación según la siguiente tabla:
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  let clasificacion;

  if (imc < 18.5) {
    clasificacion = 'Bajo peso';
  } else if (imc < 25) {
    clasificacion = 'Normal';
  } else if (imc < 30) {
    clasificacion = 'Sobrepeso';
  } else {
    clasificacion = 'Obeso';
  }

  return {
    valor: imc.toFixed(2),
    clasificacion: clasificacion
  };
}


// 2. Generador de contraseñas seguras
// Crea una función en JavaScript que genere contraseñas seguras aleatorias. 
// La función debe tomar como parámetros la longitud deseada de la contraseña y la inclusión o no de caracteres especiales. 
// La función debe devolver una cadena de texto que represente la contraseña generada.
function generarContrasena(longitud, incluirCaracteresEspeciales) {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let contrasena = '';

  if (incluirCaracteresEspeciales) {
    caracteres += '!@#$%^&*()_-+={}[]|;:<>,.?/~';
  }

  for (let i = 0; i < longitud; i++) {
    contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return contrasena;
}
// console.log
const contrasena1 = generarContrasena(10, false); // Generar password sin caracteres especiales, length 10
const contrasena2 = generarContrasena(12, true);  // generar password con caracteres especiales, length 12

console.log(`Contraseña sin caracteres especiales: ${contrasena1}`);
console.log(`Contraseña con caracteres especiales: ${contrasena2}`);

// 3.Validación de formulario de registro:
// Crea una función en JavaScript que valide un formulario de registro de usuario. 
// La función debe tomar como parámetros los valores de los campos del formulario: nombre, email, contraseña y confirmación de contraseña. 
// La función debe verificar que los campos no estén vacíos, que el email tenga un formato válido, que la contraseña tenga una longitud mínima y que la confirmación coincida con la contraseña. 
// La función debe devolver un objeto que indique si la validación fue exitosa o no, y en caso de error, debe especificar el campo que no cumple con los requisitos.


// 4.Manejo de errores asincrónicos:
// Crea una función en JavaScript que realice una llamada a una API externa de forma asincrónica. 
// La función debe tomar como parámetro la URL de la API y debe devolver una promesa que resuelva con los datos obtenidos de la API o que rechace con un error en caso de que la llamada falle.
async function obtenerDatosAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 5. Creación de un gráfico de barras:
// Crea una función en JavaScript que genere un gráfico de barras simple utilizando la biblioteca Chart.js. 
// La función debe tomar como parámetros los datos del gráfico (etiquetas y valores) y el elemento HTML donde se debe mostrar el gráfico.
function crearGraficoBarras(datosGrafico, elementoHTML) {
  const chart = new Chart(elementoHTML, {
    type: 'bar',
    data: {
      labels: datosGrafico.etiquetas,
      datasets: [{
        label: 'Valores',
        data: datosGrafico.valores,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



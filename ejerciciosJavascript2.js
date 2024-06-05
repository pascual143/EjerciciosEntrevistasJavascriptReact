// Ejercicio 1: Suma de Arreglo
Descripción: Escribe una función que reciba un arreglo de números y devuelva la suma de todos sus elementos.

Solución:
// javascript
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Salida: 15



// Ejercicio 2: Encontrar el Número Mayor
Descripción: Escribe una función que reciba un arreglo de números y devuelva el número más grande.

Solución:
// javascript
function findMax(arr) {
  return Math.max(...arr);
}

// Ejemplo de uso
const numbers = [10, 5, 8, 20, 3];
console.log(findMax(numbers)); // Salida: 20



// Ejercicio 3: Contar Palabras
Descripción: Escribe una función que reciba una cadena y devuelva un objeto con la cantidad de veces que aparece cada palabra en la cadena.

Solución:
// javascript
function countWords(str) {
  const words = str.split(' ');
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  return wordCount;
}

// Ejemplo de uso
const text = "Lorem ipsum dolor sit amet ipsum dolor consectetur adipiscing elit";
console.log(countWords(text));
// Salida: {Lorem: 1, ipsum: 2, dolor: 2, sit: 1, amet: 1, consectetur: 1, adipiscing: 1, elit: 1}



// Ejercicio 4: Validar Email
Descripción: Escribe una función que valide si una cadena dada es un email válido.

Solución:
// javascript
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Ejemplo de uso
console.log(validateEmail("test@example.com")); // Salida: true
console.log(validateEmail("invalid.email@"));    // Salida: false
Ejercicio 5: Ordenar Arreglo de Objetos
Descripción: Escribe una función que reciba un arreglo de objetos y devuelva el mismo arreglo ordenado por una propiedad específica.

Solución:
// javascript
function sortByProperty(arr, prop) {
  return arr.sort((a, b) => a[prop] - b[prop]);
}

// Ejemplo de uso
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];
console.log(sortByProperty(people, 'age'));
// Salida: [{name: 'Jane', age: 25}, {name: 'John', age: 30}, {name: 'Bob', age: 35}]


// Ejercicio 6: Promesa Asincrónica
Descripción: Escribe una función que simule una operación asincrónica que resuelva una promesa después de un cierto tiempo.

Solución:
// javascript
function asyncOperation(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Operación completada después de ${delay} milisegundos`);
    }, delay);
  });
}

// Ejemplo de uso
asyncOperation(2000).then(result => {
  console.log(result); // Salida después de 2 segundos: Operación completada después de 2000 milisegundos
});


// Ejercicio 7: Cambiar el Texto de un Elemento HTML
Descripción: Escribe una función que tome el ID de un elemento HTML y cambie su texto.

Solución:
// javascript
function changeText(elementId, newText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = newText;
  } else {
    console.error(`Element with ID ${elementId} not found`);
  }
}

// Ejemplo de uso
changeText('myElement', 'Nuevo texto');


// Ejercicio 8: Obtener Datos de un Formulario
Descripción: Escribe una función que obtenga los valores de un formulario HTML y los imprima en la consola.

Solución:
// javascript
function getFormData(formId) {
  const formData = {};
  const form = document.getElementById(formId);
  if (form) {
    Array.from(form.elements).forEach(field => {
      if (field.tagName === 'INPUT' || field.tagName === 'SELECT' || field.tagName === 'TEXTAREA') {
        formData[field.name] = field.value;
      }
    });
    console.log(formData);
  } else {
    console.error(`Form with ID ${formId} not found`);
  }
}

// Ejemplo de uso
getFormData('myForm');

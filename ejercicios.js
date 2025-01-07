# Conceptos básicos de javscript.

// 1. Escribe una función en JavaScript que tome dos números como parámetros y devuelva el mayor de los dos.
function obtenerMaximo(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}


// 2. Explica la diferencia entre var, let y const en JavaScript.
var: Es la forma tradicional de declarar variables en JavaScript. Tiene alcance global y de función.
let: Es una palabra clave más moderna para declarar variables. Tiene alcance de bloque y no se puede reasignar dentro del mismo bloque.
const: Se utiliza para declarar variables constantes que no se pueden reasignar. Tiene alcance de bloque.
  
// 3. ¿Qué es el cierre(clousure) en JavaScript y cómo se implementa?
 // Un clousure en JavaScript es una función que tiene acceso a variables de un ámbito externo, incluso después de que el ámbito externo haya terminado. 
  //Esto permite crear funciones que retienen información del entorno en el que fueron creadas.
// ejemplo de clousure
  function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12


  // 4. Escribe una función en JavaScript que genere un array de 10 números aleatorios entre 1 y 100.
function generarArrayAleatorio(cantidad) {
  const arrayAleatorio = [];
  for (let i = 0; i < cantidad; i++) {
    arrayAleatorio.push(Math.floor(Math.random() * 100) + 1);
  }
  return arrayAleatorio;
}

// 5. Explica qué es el DOM en el contexto de JavaScript y cómo se interactúa con él.
// El DOM (Document Object Model) es una representación en árbol del contenido de una página web. 
  // Permite a los desarrolladores interactuar con los elementos de la página, modificar su contenido, agregar eventos y manipular el estilo.
// Sección 2: React (70%)

// 1. Crea un componente React simple que muestre un título, un párrafo y un botón.
import React from 'react';

function ComponenteSimple() {
  return (
    <div>
      <h1>Título</h1>
      <p>Este es un párrafo.</p>
      <button>Botón</button>
    </div>
  );
}

export default ComponenteSimple;

// 2. Explica el ciclo de vida de un componente React.
// El ciclo de vida de un componente React se compone de las siguientes etapas:
// Montaje: El componente se crea y se inserta en el DOM.
// Actualización: El componente se actualiza cuando se modifica su estado o sus props.
// Desmontaje: El componente se elimina del DOM.

// 3. ¿Qué son los hooks en React y cómo se utilizan?
// Los hooks son funciones especiales que permiten a los desarrolladores "engancharse" al estado y al ciclo de vida de los componentes React. 
  // Algunos hooks comunes son useState, useEffect, useContext, etc.
// 4. Crea un componente React que utilice el hook useState para gestionar el estado interno del componente.
import React, { useState } from 'react';

function ComponenteConEstado() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default ComponenteConEstado;

// 5. Crea un componente React que utilice el hook useEffect para realizar una llamada a una API y mostrar los resultados.
import React, { useEffect } from 'react';

function ComponenteConEfecto() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Cargando...</div>;
}

export default ComponenteConEfecto;


// Ejercicio 1: Crear un Botón Estilizado.
Descripción: Crea un botón utilizando Tailwind CSS que tenga un fondo azul, texto blanco, padding, y un borde redondeado.

Instrucciones:
Crea un archivo HTML.
Aplica clases de Tailwind para estilizar el botón según las especificaciones.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <button class="bg-blue-500 text-white py-2 px-4 rounded">
    Click Me
  </button>
</body>
</html>


// Ejercicio 2: Crear un Contenedor Responsivo
Descripción: Crea un contenedor que tenga un padding interno de 4 en dispositivos pequeños y 8 en dispositivos medianos y más grandes.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para aplicar el padding responsivo.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Container</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="p-4 md:p-8">
    This is a responsive container.
  </div>
</body>
</html>


//Ejercicio 3: Crear una Tarjeta con Sombra
Descripción: Crea una tarjeta con una sombra, padding, y un borde redondeado.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para aplicar los estilos necesarios a la tarjeta.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-bold mb-2">Card Title</h2>
    <p class="text-gray-700">This is a simple card with shadow, padding, and rounded corners.</p>
  </div>
</body>
</html>



// Ejercicio 4: Crear un Layout de Columna
Descripción: Crea un layout con dos columnas que se ajusten al 50% del ancho del contenedor en dispositivos medianos y más grandes, y al 100% en dispositivos pequeños.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para crear el layout de columnas responsivo.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Column Layout</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        <div class="bg-gray-200 p-6 rounded-lg">Column 1</div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="bg-gray-200 p-6 rounded-lg">Column 2</div>
      </div>
    </div>
  </div>
</body>
</html>


// Ejercicio 5: Personalización de Colores
Descripción: Personaliza la configuración de Tailwind para añadir un nuevo color llamado brand-blue.

Instrucciones:
Crea un archivo de configuración de Tailwind (tailwind.config.js).
Añade el nuevo color brand-blue y utilízalo en un elemento HTML.
Solución:
// javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1DA1F2',
      },
    },
  },
  variants: {},
  plugins: [],
}
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Color</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="path/to/your/custom/tailwind.css" rel="stylesheet"> <!-- Asegúrate de compilar Tailwind con la configuración personalizada -->
</head>
<body>
  <div class="bg-brand-blue text-white p-6 rounded-lg">
    Custom Brand Blue Background
  </div>
</body>
</html>



// Ejercicio 6: Crear un Navbar
Descripción: Crea un navbar con Tailwind CSS que tenga un logo a la izquierda y enlaces de navegación a la derecha.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para crear y estilizar el navbar.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-white text-lg font-bold">Logo</a>
      <div>
        <a href="#" class="text-gray-300 hover:text-white px-3">Home</a>
        <a href="#" class="text-gray-300 hover:text-white px-3">About</a>
        <a href="#" class="text-gray-300 hover:text-white px-3">Contact</a>
      </div>
    </div>
  </nav>
</body>
</html>
// Ejercicio 7: Crear una Tabla Estilizada
Descripción: Crea una tabla con Tailwind CSS que tenga bordes, padding y un fondo alternado para las filas.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para estilizar la tabla.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mx-auto mt-8">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Name</th>
          <th class="py-2 px-4 border-b">Age</th>
          <th class="py-2 px-4 border-b">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-gray-100">
          <td class="py-2 px-4 border-b">John Doe</td>
          <td class="py-2 px-4 border-b">30</td>
          <td class="py-2 px-4 border-b">john@example.com</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b">Jane Smith</td>
          <td class="py-2 px-4 border-b">25</td>
          <td class="py-2 px-4 border-b">jane@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>


// Ejercicio 8: Crear un Formulario Estilizado
Descripción: Crea un formulario de contacto con campos para el nombre, correo electrónico y mensaje, utilizando Tailwind CSS.

Instrucciones:
Crea un archivo HTML.
Utiliza clases de Tailwind para estilizar el formulario.
Solución:
// html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mx-auto mt-8">
    <form class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700">Name</label>
        <input type="text" class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input type="email" class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Message</label>
        <textarea class="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </div>
    </form>
  </div>
</body>
</html>

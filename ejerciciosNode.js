### Ejercicio 1: Crear un Servidor HTTP Básico
Descripción: Crea un servidor HTTP básico que responda "Hello, World!" a todas las solicitudes.

Instrucciones:
Utiliza el módulo http de Node.js.
Crea un servidor que responda "Hello, World!" a todas las solicitudes en el puerto 3000.
Solución:

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

### Ejercicio 2: Crear un Servidor Express con Rutas Básicas
Descripción: Crea un servidor utilizando Express con dos rutas: / y /about.

Instrucciones:
Instala Express.
Crea una ruta / que responda "Home Page".
Crea una ruta /about que responda "About Page".
Solución:
bash
Copiar código
npm install express
javascript
Copiar código
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 3: Manejo de Parámetros de Ruta
Descripción: Crea una ruta dinámica que acepte un parámetro id y responda con "Item: {id}".

Instrucciones:
Utiliza Express para manejar rutas.
Crea una ruta /item/:id que capture el parámetro id y responda con "Item: {id}".
Solución:

const express = require('express');
const app = express();
const port = 3000;

app.get('/item/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Item: ${id}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 4: Middleware Básico
Descripción: Crea un middleware que registre la fecha y hora de cada solicitud.

Instrucciones:
Utiliza Express para crear el middleware.
Registra la fecha y hora de cada solicitud en la consola antes de pasar al siguiente manejador.
Solución:

const express = require('express');
const app = express();
const port = 3000;

// Middleware para registrar la fecha y hora de la solicitud
app.use((req, res, next) => {
  console.log(`Request received at: ${new Date().toISOString()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 5: Conectar con una Base de Datos MongoDB
Descripción: Conéctate a una base de datos MongoDB y crea una ruta que devuelva una lista de usuarios.

Instrucciones:
Instala mongoose.
Conéctate a una base de datos MongoDB.
Define un modelo User con name y email.
Crea una ruta /users que devuelva todos los usuarios.
Solución:

// bash
npm install mongoose
// javascript
Copiar código
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el modelo User
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
}));

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 6: Manejo de Errores
Descripción: Añade un middleware de manejo de errores que capture errores y responda con un mensaje adecuado.

Instrucciones:
Crea una ruta /error que arroje un error.
Añade un middleware de manejo de errores que capture cualquier error y responda con un mensaje adecuado.
Solución:

// javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/error', (req, res, next) => {
  next(new Error('This is a forced error.'));
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 7: Autenticación Básica con JWT
Descripción: Implementa autenticación básica utilizando JSON Web Tokens (JWT).

Instrucciones:
Instala jsonwebtoken.
Crea una ruta /login que genere un token JWT.
Crea un middleware que verifique el token JWT en rutas protegidas.
Solución:

// bash
npm install jsonwebtoken

// javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'your-secret-key';

app.use(express.json());

// Ruta de login para generar el token JWT
app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware para verificar el token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Ruta protegida
app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 8: Uso de Variables de Entorno
Descripción: Usa variables de entorno para configurar el puerto y la URL de la base de datos.

Instrucciones:
Instala dotenv.
Crea un archivo .env con las variables PORT y DATABASE_URL.
Configura la aplicación para usar estas variables.
Solución:

// bash
npm install dotenv
// bash
# .env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/test
javascript
Copiar código
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



### Ejercicio 9: Subida de Archivos
Descripción: Implementa la funcionalidad de subida de archivos utilizando multer.

Instrucciones:
Instala multer.
Configura multer para aceptar archivos subidos.
Crea una ruta /upload para manejar las subidas de archivos.
Solución:

// bash
npm install multer
// javascript
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configurar multer
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


### Ejercicio 10: Creación de una API RESTful
Descripción: Crea una API RESTful básica para manejar operaciones CRUD de usuarios.

Instrucciones:
Define un modelo User con name y email.
Implementa las rutas para crear, leer, actualizar y eliminar usuarios.
Solución:
// javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el modelo User
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
}));

// Crear un nuevo usuario
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Obtener todos los usuarios
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Obtener un usuario por ID
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Actualizar un usuario por ID
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Eliminar un usuario por ID
app.delete('/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send('User deleted');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


### Ejercicio 1: Enrutamiento Básico
**Descripción:** Crea una simple aplicación Next.js con dos páginas: Home y About.

#### Instrucciones:
1. Crea un proyecto Next.js.
2. Crea una página `index.js` para la página de inicio.
3. Crea una página `about.js` para la página "About".
4. Añade enlaces de navegación entre las páginas.

#### Solución:
// javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}

// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </div>
  );
}


### Ejercicio 2: Datos Estáticos con `getStaticProps`
**Descripción:** Crea una página que muestra una lista de elementos estáticos utilizando `getStaticProps`.

#### Instrucciones:
1. Crea una página `posts.js`.
2. Utiliza `getStaticProps` para obtener datos estáticos.
3. Muestra los datos en la página.

#### Solución:
// javascript
// pages/posts.js
export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
  ];

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}


### Ejercicio 3: Datos Dinámicos con `getServerSideProps`
**Descripción:** Crea una página que muestra datos dinámicos obtenidos en cada solicitud utilizando `getServerSideProps`.

#### Instrucciones:
1. Crea una página `profile.js`.
2. Utiliza `getServerSideProps` para obtener datos dinámicos.
3. Muestra los datos en la página.

#### Solución:
// pages/profile.js
export async function getServerSideProps() {
  const profile = {
    name: 'John Doe',
    age: 30,
  };

  return {
    props: {
      profile,
    },
  };
}

export default function Profile({ profile }) {
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}

### Ejercicio 4: Rutas Dinámicas
**Descripción:** Crea una página de detalles para una lista de elementos con rutas dinámicas.

#### Instrucciones:
1. Crea una página `posts/[id].js`.
2. Utiliza `getStaticPaths` y `getStaticProps` para obtener y mostrar los datos del post correspondiente.

#### Solución:
// pages/posts/[id].js
export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = {
    id: params.id,
    title: `Post ${params.id}`,
    content: `This is the content of post ${params.id}`,
  };

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

### Ejercicio 5: API Routes
**Descripción:** Crea una API simple que devuelva una lista de elementos.

#### Instrucciones:
1. Crea una carpeta `api` dentro de `pages`.
2. Crea un archivo `items.js` dentro de `api`.
3. Implementa una función que devuelva una lista de elementos en formato JSON.

#### Solución:
// pages/api/items.js
export default function handler(req, res) {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];

  res.status(200).json(items);
}

### Ejercicio 6: Integración de CSS Módulos
**Descripción:** Aplica estilos a un componente usando CSS módulos.

#### Instrucciones:
1. Crea un archivo CSS módulo `Home.module.css`.
2. Aplica los estilos al componente de la página de inicio.

#### Solución:
// css
/* styles/Home.module.css */
.container {
  text-align: center;
  padding: 50px;
}

.title {
  font-size: 2em;
  color: #0070f3;
}

// javascript
// pages/index.js
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}

### Ejercicio 7: Integración de CSS Global
**Descripción:** Aplica estilos globales a toda la aplicación Next.js.

#### Instrucciones:
1. Crea un archivo CSS global `globals.css`.
2. Importa el archivo CSS en `_app.js`.

#### Solución:
  css
/* styles/globals.css */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

// javascript
// pages/_app.js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

### Ejercicio 8: Fetch de Datos con `getStaticProps` y `getServerSideProps`
**Descripción:** Crea una página que muestra datos obtenidos de una API externa utilizando `getStaticProps` o `getServerSideProps`.

#### Instrucciones:
1. Crea una página `external.js`.
2. Utiliza `getStaticProps` o `getServerSideProps` para obtener datos de `https://jsonplaceholder.typicode.com/posts`.
3. Muestra los datos en la página.

#### Solución:
// javascript
// pages/external.js
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function External({ posts }) {
  return (
    <div>
      <h1>External Data</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

### Ejercicio 9: Imagen Optimizada con `next/image`
**Descripción:** Añade una imagen optimizada a una página utilizando el componente `Image` de Next.js.

#### Instrucciones:
1. Instala el paquete `next/image`.
2. Añade una imagen optimizada a la página de inicio.

#### Solución:
//bash
npm install next@latest

// javascript
// pages/index.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}

### Ejercicio 10: API Routes con POST
**Descripción:** Crea una API que acepte solicitudes POST y devuelva un mensaje.

#### Instrucciones:
1. Crea una carpeta `api` dentro de `pages`.
2. Crea un archivo `echo.js` dentro de `api`.
3. Implementa una función que acepte datos de una solicitud POST y los devuelva en la respuesta.

#### Solución:
// javascript
// pages/api/echo.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json({ message: 'Data received', data });
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}



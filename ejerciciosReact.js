// Ejercicio 1: Componente de Lista con Filtro
// Descripción: Crea un componente de lista que permita filtrar elementos a partir de una entrada de texto.

// Instrucciones:
// Crea un componente funcional FilteredList.
// Utiliza el hook useState para manejar el estado de la lista y el filtro.
// Renderiza una lista de elementos y un input para filtrar los elementos.
// Solución:

import React, { useState } from 'react';

const FilteredList = () => {
  const [filter, setFilter] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        value={filter} 
        onChange={handleChange} 
        placeholder="Filter items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
// Ejercicio 2: Componente de Contador con Hooks
// Descripción: Crea un componente de contador que permita incrementar y decrementar un valor.

// Instrucciones:
// Crea un componente funcional Counter.
// Utiliza el hook useState para manejar el estado del contador.
// Añade botones para incrementar y decrementar el valor del contador.
// Solución:

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
// Ejercicio 3: Comunicación entre Componentes
// Descripción: Crea dos componentes, un padre y un hijo. El componente hijo debería recibir datos del padre y enviar datos de vuelta al padre.

// Instrucciones:
// Crea un componente padre ParentComponent.
// Crea un componente hijo ChildComponent.
// Pasa datos del padre al hijo a través de props.
// Permite que el hijo envíe datos de vuelta al padre mediante una función pasada como prop.
// Solución:

import React, { useState } from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const [childData, setChildData] = useState('');

  const handleChange = (event) => {
    setChildData(event.target.value);
    sendDataToParent(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={childData} 
        onChange={handleChange} 
        placeholder="Enter data..."
      />
    </div>
  );
};

const ParentComponent = () => {
  const [parentData, setParentData] = useState('');

  const handleDataFromChild = (data) => {
    setParentData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {parentData}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
// Ejercicio 4: Componente de To-Do List
// Descripción: Crea un componente de lista de tareas que permita añadir y eliminar tareas.

// Instrucciones:
// Crea un componente funcional TodoList.
// Utiliza useState para manejar la lista de tareas.
// Permite añadir nuevas tareas y eliminar tareas existentes.
# Solución:

import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


// Ejercicio 5: Formulario de Registro
// Descripción: Crea un formulario de registro que permita al usuario ingresar su nombre, correo electrónico y contraseña.

// Instrucciones:
// Crea un componente funcional RegistrationForm.
// Utiliza useState para manejar el estado de los campos del formulario.
// Al enviar el formulario, muestra una alerta con los datos ingresados.
// Solución:

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

// Ejercicio 6: Temporizador con Hooks
// Descripción: Crea un componente de temporizador que permita iniciar, pausar y reiniciar el tiempo.

// Instrucciones:
// Crea un componente funcional Timer.
// Utiliza useState para manejar el estado del tiempo.
// Utiliza useEffect para actualizar el tiempo cada segundo.
// Añade botones para iniciar, pausar y reiniciar el temporizador.
// Solución:

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
// Ejercicio 7: Renderizado Condicional
// Descripción: Crea un componente que muestre un mensaje diferente según la hora del día (mañana, tarde, noche).

// Instrucciones:
// Crea un componente funcional Greeting.
// Utiliza useState y useEffect para obtener y manejar la hora actual.
// Muestra un mensaje diferente según la hora del día.
// Solución:

import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setTimeOfDay('morning');
    } else if (currentHour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);

  return (
    <div>
      <h1>Good {timeOfDay}!</h1>
    </div>
  );
};

export default Greeting;
// Ejercicio 8: Componente de Paginación
// Descripción: Crea un componente de paginación para mostrar una lista de elementos dividida en páginas.

// Instrucciones:
// Crea un componente funcional Pagination.
// Utiliza useState para manejar el estado de la página actual.
// Renderiza una lista de elementos dividida en páginas.
// Añade botones para navegar entre las páginas.
// Solución:

import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
  return <Pagination itemsPerPage={3} items={items} />;
};

export default App;
// Ejercicio 9: Componente de Fetch de Datos
// Descripción: Crea un componente que realice una petición a una API y muestre los datos.

// Instrucciones:
// Crea un componente funcional DataFetcher.
// Utiliza useState y useEffect para manejar el estado de los datos y realizar la petición.
// Muestra los datos obtenidos de la API.
// Solución:

import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
//Ejercicio 10: Componente de Selector de Tema
// Descripción: Crea un componente que permita al usuario cambiar entre un tema claro y un tema oscuro.

// Instrucciones:
// Crea un componente funcional ThemeSwitcher.
// Utiliza useState para manejar el estado del tema.
// Añade un botón para cambiar entre el tema claro y el tema oscuro.
// Aplica los estilos correspondientes al tema seleccionado.
// Solución:

import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#FFF',
    color: isDarkTheme ? '#FFF' : '#000',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;


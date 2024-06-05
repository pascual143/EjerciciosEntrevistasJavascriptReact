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


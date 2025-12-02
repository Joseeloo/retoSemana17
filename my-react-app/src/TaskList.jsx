import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
    return (
        <div className="task-list">
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ 
                        textDecoration: task.completada ? 'line-through' : 'none',
                        color: task.completada ? 'gray' : 'black',
                        padding: '5px 0'
                    }}>
                        {task.nombre}
                        <button 
                            onClick={() => onToggleComplete(task.id)}
                            style={{ marginLeft: '10px', backgroundColor: task.completada ? 'lightgreen' : 'lightblue' }}
                        >
                            {task.completada ? 'Deshacer' : 'Completar'}
                        </button>
                        <button 
                            onClick={() => onDeleteTask(task.id)}
                            style={{ marginLeft: '10px', backgroundColor: 'salmon' }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && <p>¡No hay tareas pendientes! Agrega una nueva.</p>}
        </div>
    );
};

export default TaskList;
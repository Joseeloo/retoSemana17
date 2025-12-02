import React, { useState } from 'react';
import TaskList from './TaskList';

const initialTasks = [
    { id: 1, nombre: 'Aprender useState', completada: true },
    { id: 2, nombre: 'Diseñar el componente TaskList', completada: false },
    { id: 3, nombre: 'Hacer el commit del reto', completada: false },
];
function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTaskName, setNewTaskName] = useState('');
    const [showForm, setShowForm] = useState(false);
    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId
                ? { ...task, completada: !task.completada }
                : task
        );
        setTasks(updatedTasks);
    };
    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };
    const handleInputChange = (event) => {
        setNewTaskName(event.target.value);
    };
    const handleAddTask = (event) => {
        event.preventDefault();
        if (newTaskName.trim() === '') return;
        const newTask = {
            id: Date.now(), 
            nombre: newTaskName.trim(),
            completada: false,
        };
        setTasks([...tasks, newTask]);
        setNewTaskName('');
        setShowForm(false);
    };
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Administrador de Tareas React</h1>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Ocultar Formulario' : '➕ Agregar Tarea'}
            </button>
            {showForm && (
                <form onSubmit={handleAddTask} style={{ margin: '15px 0', border: '1px solid #ccc', padding: '15px' }}>
                    <h3>Nueva Tarea</h3>
                    <input
                        type="text"
                        placeholder="Nombre de la nueva tarea"
                        value={newTaskName}
                        onChange={handleInputChange}
                        style={{ padding: '8px', marginRight: '10px' }}
                    />
                    <button type="submit" disabled={newTaskName.trim() === ''}>
                        Guardar Tarea
                    </button>
                </form>
            )}
            <hr />
            <TaskList
                tasks={tasks}
                onToggleComplete={handleToggleComplete}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}
export default App;

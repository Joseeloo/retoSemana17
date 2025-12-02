# Aplicación React Funcional con Hooks y Manejo de Estado
Este reto se centra en el desarrollo de un componente funcional en React y la aplicación de sus principios fundamentales. El objetivo principal es consolidar el uso del Hook useState para manejar el estado local de una aplicación (la lista de tareas y el formulario) y la interacción entre componentes (padre e hijo) mediante Props.

# Reto Semana 17
Implementar una aplicación de tareas simple que cumpla con los siguientes requisitos:

**Componente TaskList (Componente Hijo)**
- Crear un componente funcional llamado TaskList que reciba las tareas como una prop.
- Utilizar map para renderizar dinámicamente cada tarea en una lista.
- Incluir un botón de Completar y un botón de Eliminar para cada tarea, gestionando sus eventos onClick.
- La lógica de completado debe cambiar el estado de la tarea a "completada" (ej. aplicando un text-decoration: line-through).

**Componente Principal (App.jsx o Contenedor)**
- Utilizar el Hook useState para mantener el estado de la lista de tareas principal.
- Implementar la funcionalidad para alternar el estado (completada) de una tarea.
- Implementar la funcionalidad para eliminar una tarea de la lista.
- Crear un botón "Agregar tarea" que, al presionarse, muestre un formulario simple de entrada.

**Formulario de Nueva Tarea**
- Utilizar useState para mantener el estado del valor del input (Componente Controlado).
- Agregar un evento onChange al input para actualizar el estado a medida que se escribe.
- Agregar un evento onSubmit al formulario que:
  1. Agregue la nueva tarea al estado de la lista de tareas.
  2. Limpie el campo del formulario.
  3. Oculte el formulario.

# Tecnologías utilizadas
- React (Librería principal para UI)
- JavaScript (ES6+)
- Vite (Herramienta de construcción y servidor de desarrollo)
- Hooks (useState)
- Componentes Funcionales
- Props (Comunicación Padre-Hijo)

# Estructura del Proyecto
```
retoSemana17/my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx                ← Componente principal con el estado y lógica
│   ├── TaskList.jsx           ← Componente hijo para mostrar y manipular la lista
│   └── main.jsx               ← Punto de montaje de la aplicación
├── package.json
└── vite.config.js
```

# Cómo ejecutar
- Instala dependencias (si es un proyecto nuevo):

  ```npm install```

- Ejecuta el servidor de desarrollo de Vite:

  ```npm run dev```

- Abre la URL que te proporciona el terminal (generalmente http://localhost:5173/).

# Resultados y Funcionalidades
### Aplicación Inicial y Formulario
La aplicación muestra la lista inicial de tareas y un botón para mostrar el formulario de adición.
<img width="803" height="380" alt="image" src="https://github.com/user-attachments/assets/eafdbee4-abea-43e0-87b7-bcff0f8d828f" />

### Tarea Marcada como Completada
Al presionar el botón **"Completar"**, el texto de la tarea se tacha, indicando su estado.
<img width="793" height="366" alt="image" src="https://github.com/user-attachments/assets/e8eb4650-acf7-433a-85bb-96122e485a76" />

### Tarea Eliminada
Al presionar **"Eliminar"**, la tarea desaparece del estado de la lista.
<img width="789" height="335" alt="image" src="https://github.com/user-attachments/assets/1b309b55-1ebf-4a2f-a1b7-5a80fcf13548" />

### Agregar Tarea
Al presionar **"Agregar Tarea"**, aparece un formulario donde se escribe la tarea y luego se puede guardar, mostrandola como una tarea nueva con las mismas funcionalidades ya mencionadas.
<img width="787" height="483" alt="image" src="https://github.com/user-attachments/assets/5ae3c8e2-013c-475c-b469-02ce738549c1" />
<img width="795" height="377" alt="image" src="https://github.com/user-attachments/assets/9d3b0fa6-61b6-4247-bd48-643ef2965d00" />



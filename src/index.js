import './styles.css';
import Project from './models/Project';
import Todo from './models/ToDo';
console.log("Hello.Webpack");

const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', ()=>{
    const API_URL = 'https://6751ba8ed1983b9597b407f9.mockapi.io/api/v1';

    const fetchProjects = async() =>{
        const response = await fetch('${API_URL}/Project');
        const data = await response.json();
        return data.map(project = new Project(project.id, project.name));
       
    };

    const fetchTodos = async() =>{
        const response=await fetch('${API_URL}/Todo');
        const data = await response.json();
        return data.map(todo = new Todo(
            todo.id,
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.projectID
        ));
    };

    const renderTodos = (todos) =>{
        const content = getElementById('content');
        content.innerHTML = '';

        todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-item');
            todoDiv.textContent = `${todo.title} - ${todo.priority} (${todo.dueDate})`;
            content.appendChild(todoDiv);
        });
    }
})


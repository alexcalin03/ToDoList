import './styles.css';
import { fetchProjects, renderProjects } from './ManageProjects.js';
import { fetchTodos, renderTodos } from './ManageTodos.js';
console.log("Hello.Webpack");



document.addEventListener('DOMContentLoaded', async ()=>{
    const API_BASE = 'https://6751ba8ed1983b9597b407f9.mockapi.io/api/v1';
try{
    const projects = await fetchProjects(API_BASE);
    const todos = await fetchTodos(API_BASE);
    renderProjects(projects, todos, renderTodos);
    renderTodos(todos);
}catch (error){console.error('Error initializing app', error);

}

   
}

)

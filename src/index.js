import './styles.css';
import { fetchProjects, renderProjects } from './ManageProjects.js';
import { fetchTodos, renderTodos } from './ManageTodos.js';
console.log("Hello.Webpack");

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('show');
    }
});

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

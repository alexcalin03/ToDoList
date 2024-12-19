import './styles.css';
import { fetchProjects, renderProjects } from './ManageProjects.js';
import { fetchTodos, renderTodos } from './ManageTodos.js';
import { registerUser } from './api_requests.js';
import { loginUser } from './api_requests.js';
import { logoutUser } from './api_requests.js';
console.log("Hello.Webpack");

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const logoutButton = document.getElementById('logout-button');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('show');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        window.location.href = 'login.html'; // Redirect to login if no token
    } else {
        console.log('User is logged in. Token:', token);
        
        // Proceed with showing the app
    }

    logoutButton.addEventListener('click', async () => {
        try {
            await logoutUser();
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Error logging out user', error);
            alert('Error logging out user');
        }
    });

});


    
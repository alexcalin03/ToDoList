import './styles.css';
import { fetchProjects, renderProjects } from './ManageProjects.js';
import { fetchTodos, renderTodos } from './ManageTodos.js';
import { registerUser } from './api_requests.js';
import { loginUser } from './api_requests.js';
import { logoutUser } from './api_requests.js';
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


document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Step 1: Log in to get the token
        console.log("Logging in...");
        const result = await loginUser("testuser", "testpassword");
        console.log("Login successful! Token:", result.token);

        // Step 2: Call logout function
        console.log("Logging out...");
        await logoutUser();
        console.log("Logout successful!");
    } catch (error) {
        console.error("Error during login or logout:", error);
    }
});




   


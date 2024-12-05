import './styles.css';
import Project from './models/Project';
import Todo from './models/ToDo';
console.log("Hello.Webpack");

const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

const projects = ['Default Project', 'Work', 'Personal'];
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.textContent = project;
    projectDiv.classList.add('project-item');
    sidebar.appendChild(projectDiv);
});

const todos = [
    { title: 'Buy groceries', priority: 'High', dueDate: '2024-12-05' },
    { title: 'Complete project', priority: 'Medium', dueDate: '2024-12-10' },
];
todos.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = `${todo.title} - ${todo.priority} (${todo.dueDate})`;
    content.appendChild(todoDiv);
});

const Project1 = new Project(1,'Work');
const Todo1 = new Todo(234,'CleanDesk','Organize everything on the desk','2024-12-5','high',1);

console.log(Project1);



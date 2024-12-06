import Todo from "./models/Todo.js";

 export const fetchTodos = async(API_BASE) =>{
    const response = await fetch(`${API_BASE}/Todo`);
    const data = await response.json();
    return data.map(todo => new Todo(
        todo.id,
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.projectID
    ));
};

export const renderWholeTodo=(todo)=>{
        const content = document.getElementById('content');
        content.innerHTML='';
        const title = document.createElement('h2');
        title.textContent=todo.title;
        const description = document.createElement('p');
        description.textContent = todo.description;
        content.appendChild(title);
        content.appendChild(description);
};

 export const renderTodos = (todos) =>{
    const content = document.getElementById('content');
    content.innerHTML = '';

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.textContent = `${todo.title} - ${todo.priority} (${todo.dueDate})`;
        todoDiv.onclick=()=> renderWholeTodo(todo);
        content.appendChild(todoDiv);
    });
};
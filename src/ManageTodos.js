import Todo from "./models/Todo.js";

 export const fetchTodos = async(API_BASE) =>{
    // try
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
        const content = document.getElementById('todocontent');
        content.innerHTML='';
        const title = document.createElement('h2');
        title.textContent=todo.title;
        const description = document.createElement('p');
        description.textContent = todo.description;
        todocontent.appendChild(title);
        todocontent.appendChild(description);
};

 export const renderTodos = (todos) =>{
    const content = document.getElementById('content');
    content.innerHTML = '';

    const removeActiveClass = () => {
        const allTodoItems = content.querySelectorAll('.todo-item');
        allTodoItems.forEach(item => item.classList.remove('active'));
    };

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.setAttribute('data-text', `${todo.title} - ${todo.priority} (${todo.dueDate})`);
        todoDiv.onclick=()=>{
            removeActiveClass();
          todoDiv.classList.add('active');
             renderWholeTodo(todo);
            }
             content.appendChild(todoDiv);
    });
};
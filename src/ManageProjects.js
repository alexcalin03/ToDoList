 import Project from "./models/Project.js";

 
 export const fetchProjects = async(API_BASE) =>{
  //try
    const response = await fetch(`${API_BASE}/projects/`);
    const data = await response.json();
    return data.map(project => new Project(project.id, project.name));
   
};

export const renderProjects = (projects, todos, renderTodosCallback) => {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '';

  const removeActiveClass = () => {
      const allProjectItems = sidebar.querySelectorAll('.project-item');
      allProjectItems.forEach(item => item.classList.remove('active'));
  };

  const clearTodoContent = () =>{
    const todoContent = document.getElementById('todocontent');
    todoContent.innerHTML='';
  }

  const defaultProject = document.createElement('div');
  defaultProject.setAttribute('data-text', 'All todos');
  defaultProject.classList.add('project-item');
  defaultProject.onclick = () => {
      removeActiveClass();
      defaultProject.classList.add('active');
      renderTodosCallback(todos);
  };
  sidebar.appendChild(defaultProject);

  projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project-item');
      projectDiv.setAttribute('data-text', project.name);
      projectDiv.onclick = () => {
          removeActiveClass();
          clearTodoContent();
          projectDiv.classList.add('active');
          const filteredTodos = todos.filter(todo => todo.projectID === project.id);
          renderTodosCallback(filteredTodos);
      };
      sidebar.appendChild(projectDiv);
  });
};

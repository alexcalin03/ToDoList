 import Project from "./models/Project.js";

 
 export const fetchProjects = async(API_BASE) =>{
  //try
    const response = await fetch(`${API_BASE}/Project`);
    const data = await response.json();
    return data.map(project => new Project(project.id, project.name));
   
};

export const renderProjects=(projects, todos, renderTodosCallback)=>
    { // imparte functia intr o functie mama -> 2 copii: renderDefault, renderRestu
       const sidebar = document.getElementById('sidebar');
       sidebar.innerHTML='';

       const defaultProject = document.createElement('div');
       defaultProject.setAttribute('data-text', 'All todos');
       defaultProject.classList.add('project-item');
       defaultProject.onclick = () => renderTodosCallback(todos);
       sidebar.appendChild(defaultProject);

       projects.forEach(project => 
        {
          const projectDiv = document.createElement('div');
          projectDiv.classList.add('project-item');
          projectDiv.setAttribute('data-text', project.name);
          projectDiv.onclick=()=>{
            const filteredTodos = todos.filter(todo => todo.projectID === project.id);
            renderTodosCallback(filteredTodos);
          }
          sidebar.appendChild(projectDiv);
       });
};



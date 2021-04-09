import checkLocalStorage from './checkLocalStorage';
import tabFactory from './tab_container';

const projectIdCounter = 1
 const todos = [
   {
     projectId: 1,
     projectTitle: 'Test project',
     projectDescription: 'Here is my test project description',
     projectTask: [
       {
         taskId: 1,
         taskTitle: 'Test task1 for Test project',
         taskDescription: 'Test task description for test project',
         TaskDueDate: '1/2/3',
         TaskPriority: 'medium'
       },
       {
        taskId: 2,
        taskTitle: 'Test task2 for Test project',
        taskDescription: 'Test task description for test project',
        TaskDueDate: '1/2/3',
        TaskPriority: 'medium'
      }
     ]
   }
 ];
 const mainPage = (container) => {
  function getProject(projectTitle){
    let i = 0
  for (i = 0; i < todos.length; i++) {
    const project = todos[i]
    if (projectTitle == project.projectTitle) {
        return project
    }
    // addTabNavbar(project.projectTitle) 
  }
  }
  const showTasks = (project) => {
      tabFactory(container).appendChild(project);
      // console.log(project);
  };
 const addTab = (ul, title) => {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = title;
  li.addEventListener('click', (event) => showTasks(getProject(event.target.textContent)));
};

const addTabNavbar = (tabName) => {
  const navBar = document.querySelector('nav');
  const ul = document.createElement('ul');
  navBar.appendChild(ul);
  addTab(ul, tabName);
};

const populateNavbar = (todos) => {
  let i = 0
  for (i = 0; i < todos.length; i++) {
    const project = todos[i]
    addTabNavbar(project.projectTitle) 
  }
}
const AddBookButton = document.querySelector('#create_new_project');
AddBookButton.addEventListener('click',function() {
  const x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
});

const SaveProjectButton = document.querySelector('#save_project');
SaveProjectButton.addEventListener('click',function() {
  const title = document.querySelector('#project_title').value;
  const description = document.querySelector('#project_description').value;
  if ((title === '') || (description === '')) {
    alert('Fill in the empty field');
    return;
  }
  const NewProject = new Project(title, description);
  todos.push(NewProject);
  document.querySelector('#project_title').value = '';
  document.querySelector('#project_description').value = '';
  addTabNavbar(title)
  const x = document.getElementById('myDIV');
  x.style.display = 'none'

});


function task(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}
  const run = () => {
    // addTabNavbar('Movies');
    populateNavbar(todos)
    // createMenuButtons();
    // createNewProject()
  };
  return { run };
}

// checkLocalStorage()
mainPage(document.querySelector('#content')).run();
import checkLocalStorage from './checkLocalStorage';
import tabFactory from './tab_container';
import './styles.css';

const projectIdCounter = 1;
const ttodos = [
  {
    projectId: 1,
    projectTitle: 'Test project',
    projectDescription: 'Here is my test project description',
    projectTask: [
      {
        taskId: 'a1',
        taskTitle: 'First Project',
        taskDescription: 'First Project description ',
        TaskDueDate: '1/1/1',
        TaskPriority: 'high',
      },
      {
        taskId: 'a2',
        taskTitle: 'Test task2 for Test project',
        taskDescription: 'Test task description for test project',
        TaskDueDate: '1/2/3',
        TaskPriority: 'medium',
      },
    ],
  },
];

localStorage.setItem('todos', JSON.stringify(ttodos));

const toddos = JSON.parse(localStorage.getItem('todos') || '[]');

const todos = toddos;

const mainPage = (container) => {
  function getProject(projectTitle) {
    let i = 0;
    let project = '';
    for (i = 0; i < todos.length; i + 1) {
      project = todos[i];
      if (projectTitle === project.projectTitle) {
        // return project;
        break;
      }
    }
    return project;
  }
  const showTasks = (project) => {
    tabFactory(container).appendChild(project);
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
    let i = 0;
    for (i = 0; i < todos.length; i + 1) {
      const project = todos[i];
      addTabNavbar(project.projectTitle);
    }
  };
  const AddProjectButton = document.querySelector('#create_new_project');
  AddProjectButton.addEventListener('click', () => {
    const x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });

  const SaveProjectButton = document.querySelector('#save_project');
  SaveProjectButton.addEventListener('click', () => {
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
    addTabNavbar(title);
    const x = document.getElementById('myDIV');
    x.style.display = 'none';
  });


  function Project(title, description) {
    this.projectId = (projectIdCounter + 1);
    this.projectTitle = title;
    this.projectDescription = description;
    this.projectTask = [];
  }

  const run = () => {
    populateNavbar(todos);
  };
  return { run };
};

mainPage(document.querySelector('#content')).run();
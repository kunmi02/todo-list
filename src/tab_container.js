import todos from './index'
const tabFactory = (container) => {
  const addTitle = (projectTitle) => {
    const h1 = document.createElement('h2');
    h1.textContent = projectTitle;
    container.appendChild(h1);
  };

  const taskId = 1
  function task(title, description, dueDate, priority) {
    this.taskId = taskId;
    this.taskTitle = title;
    this.taskDescription = description;
    this.TaskDueDate = dueDate;
    this.TaskPriority = priority;
  }
  const AddTaskButton = document.createElement('button');
  AddTaskButton.innerHTML = 'Create Task'

  const displayTasks = (content) => {
    const h4 = document.createElement('h4');
    h4.textContent = content.taskTitle;
    container.appendChild(h4);
  
    const taskDescription = document.createElement('span');
    taskDescription.textContent = content.taskDescription;
    container.appendChild(document.createElement('br'));
    container.appendChild(taskDescription);

    const TaskPriority = document.createElement('span');
    TaskPriority.textContent = content.TaskPriority;
    container.appendChild(document.createElement('br'));
    container.appendChild(TaskPriority);

    const TaskDueDate = document.createElement('span');
    TaskDueDate.textContent = content.TaskDueDate;
    container.appendChild(TaskDueDate);
  };

  const showCreateTaskButton = () =>{
    AddTaskButton.addEventListener('click',function() {
      const x = document.getElementById('myTask');
        x.style.display = 'block';
        AddTaskButton.style.display = 'none'
    });
    container.appendChild(document.createElement('br'));
      container.appendChild(document.createElement('br'));
  
      const x = document.getElementById('myTask');
  
      container.appendChild(AddTaskButton);
  
      const closeButton = document.querySelector('#close_task_pane');
      closeButton.addEventListener('click',function(){
        x.style.display = 'none';
        AddTaskButton.style.display = 'block'
      })  
  }

    const createTask = (obj) => {
      const createNewTaskButton = document.querySelector('#add_task_to_project');
      createNewTaskButton.addEventListener('click', function(){
            const title = document.getElementById('title').value;
      const due_date = document.getElementById('due_date').value;
      const prority = document.getElementById('priority').value;
      const description = document.getElementById('description').value;
        if ((title === '') || (due_date === '') || (prority === '') || (description === '')) {
        alert('Fill in the empty field');
        return;
        }
        const NewTask = new task(title, due_date, prority, description);
        obj.push(NewTask);
      // alert('New task added')
      const x = document.getElementById('myTask');
      document.getElementById('title').value = '';
      document.getElementById('due_date').value = '';
      document.getElementById('priority').value = '';
      document.getElementById('description').value = '';
      x.style.display = 'none';
      alert('New Task created successfully')
      obj.forEach(element => {
        displayTasks(element);
      });
      AddTaskButton.style.display = 'block'
      })
    }

  const appendChild = (obj) => {
    container.innerHTML = '';
    showCreateTaskButton()
    createTask(obj.projectTask)
    
    obj.projectTask.forEach(element => {
      displayTasks(element);
    });

    
  };
  

  return { appendChild };
};

export { tabFactory as default };
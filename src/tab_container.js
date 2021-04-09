const tabFactory = (container) => {
  const addTitle = (projectTitle) => {
    const h1 = document.createElement('h2');
    h1.textContent = projectTitle;
    container.appendChild(h1);
  };


  const addTasks = (content) => {
    const h4 = document.createElement('h4');
    h4.textContent = content.taskTitle;
    // container.appendChild(document.createElement('br'));
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

  const appendChild = (obj) => {
    container.innerHTML = '';
    // addTitle(obj.projectTitle);
    
    obj.projectTask.forEach(element => {
      addTasks(element);
    });
  };

  return { appendChild };
};

export { tabFactory as default };
import todos from './index'
const tabFactory = (container) => {
  const addTitle = (projectTitle) => {
    const h1 = document.createElement('h2');
    h1.textContent = projectTitle;
    container.appendChild(h1);
  };

  const taskId = 0
  function task(title, description, dueDate, priority) {
    this.taskId = taskId + 1;
    this.taskTitle = title;
    this.taskDescription = description;
    this.TaskDueDate = dueDate;
    this.TaskPriority = priority;
  }
  const AddTaskButton = document.createElement('button');
  AddTaskButton.innerHTML = 'Create Task'

  const displayTasks = (project, content) => {
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

    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    const EditButton = document.createElement('button')
    EditButton.innerHTML = 'Edit Task'
    container.appendChild(EditButton);
    EditButton.addEventListener('click', function(){
      const edited_task =
      EditTask(project, content.taskId)
      // console.log(edited_task)
        // showTaskInProject(edited_task)
    })

    const DeleteButton = document.createElement('button')
    DeleteButton.innerHTML = 'Delete Task'
    container.appendChild(DeleteButton);
    DeleteButton.addEventListener('click', function(){
      const deleted_task =
      DeleteTask(project, content.taskId)
        showTaskInProject(deleted_task)
    })
  };

const EditTask = (project, taskID) =>{
      // const previous_form = container.querySelector('form')
      // if (previous_form) previous_form.remove() 
      const form =document.createElement('p')
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x = document.createElement("LABEL");
      const t = document.createTextNode("Task Title: ");
      // x.setAttribute("for", "male");
      x.appendChild(t);
      form.append(x)
      const title = document.createElement("INPUT");
      title.setAttribute("type", "text");
      form.appendChild(title);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x1 = document.createElement("LABEL");
      const t1 = document.createTextNode("Description: ");
      // x1.setAttribute("for", "male");
      x1.appendChild(t1);
      form.append(x1)
      const description = document.createElement("INPUT");
      description.setAttribute("type", "text");
      form.appendChild(description);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x2 = document.createElement("LABEL");
      const t2 = document.createTextNode("Due Date: ");
      // x2.setAttribute("for", "male");
      x2.appendChild(t2);
      form.append(x2)
      const due_date = document.createElement("INPUT");
      due_date.setAttribute("type", "text");
      form.appendChild(due_date);
      
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x3 = document.createElement("LABEL");
      const t3 = document.createTextNode("Priority ");
      // x3.setAttribute("for", "male");
      x3.appendChild(t3);
      form.append(x3)
      const priority = document.createElement("INPUT");
      priority.setAttribute("type", "text");
      form.appendChild(priority);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      
      const SaveTaskButton = document.createElement('button');
      SaveTaskButton.innerHTML = 'Save Task'
      form.appendChild(SaveTaskButton)
      container.appendChild(form)
        const tasks = project.projectTask
        let edited_task = ''
        let task = ''
        let taskToBeEdited = ''
      for (let i = 0; i < tasks.length; i++) {
        task = tasks[i]
        if (taskID == task.taskId) {
          taskToBeEdited = tasks[i]
          title.value = task.taskTitle
          description.value = task.taskDescription
          due_date.value = task.TaskDueDate
          priority.value = task.TaskPriority
          SaveTaskButton.addEventListener('click',function() {
                edited_task = {
                  taskId: taskToBeEdited.taskId,
                  taskTitle: title.value,
                  taskDescription: description.value,
                  TaskDueDate: due_date.value,
                  TaskPriority: priority.value
                }
                taskToBeEdited = edited_task
                project.projectTask[i] = edited_task
                showTaskInProject(project)
            });
        }
      }
}

  const DeleteTask = (project, taskID) =>{
    const tasks = project.projectTask
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i]
      if (taskID == task.taskId) {
        tasks.splice(i, 1)
          return project
          
      }
    }
  }

  const showCreateTaskButton = (obj) =>{
    AddTaskButton.addEventListener('click',function() {
      createTaskForm(obj)
        AddTaskButton.style.display = 'none'
    });
    
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(AddTaskButton);
  }

    const createTaskForm = (obj) => {
      const previous_form = container.querySelector('form')
      if (previous_form) previous_form.remove() 
      const form =document.createElement('form')
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x = document.createElement("LABEL");
      const t = document.createTextNode("Task Title: ");
      x.setAttribute("for", "male");
      x.appendChild(t);
      form.append(x)
      const title = document.createElement("INPUT");
      title.setAttribute("type", "text");
      form.appendChild(title);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x1 = document.createElement("LABEL");
      const t1 = document.createTextNode("Description: ");
      // x1.setAttribute("for", "male");
      x1.appendChild(t1);
      form.append(x1)
      const description = document.createElement("INPUT");
      description.setAttribute("type", "text");
      form.appendChild(description);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x2 = document.createElement("LABEL");
      const t2 = document.createTextNode("Due Date: ");
      // x2.setAttribute("for", "male");
      x2.appendChild(t2);
      form.append(x2)
      const due_date = document.createElement("INPUT");
      due_date.setAttribute("type", "text");
      form.appendChild(due_date);
      
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
      const x3 = document.createElement("LABEL");
      const t3 = document.createTextNode("Priority ");
      // x3.setAttribute("for", "male");
      x3.appendChild(t3);
      form.append(x3)
      const priority = document.createElement("INPUT");
      priority.setAttribute("type", "text");
      form.appendChild(priority);

      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));

      const SaveTaskButton = document.createElement('button');
      SaveTaskButton.innerHTML = 'Save Task'
      SaveTaskButton.setAttribute("type", "submit")
      form.addEventListener('submit', function(){
        if ((title.value === '') || (description.value === '') || (due_date.value === '') || (priority.value === '')) {
          alert('All fields are neccessary');
          createTaskForm(obj)
        }else{
          const NewTask = new task(title.value, description.value, due_date.value, priority.value);
        obj.push(NewTask);
      alert('New task added')
      showTaskInProject({projectTask:obj})
      AddTaskButton.style.display = 'block'

        }
        })
       
        form.appendChild(SaveTaskButton)
        container.appendChild(form)
        
    }

    const showTaskInProject = (project) => {
      container.innerHTML = '';
      showCreateTaskButton(project.projectTask)
      project.projectTask.forEach(element => {
        displayTasks(project, element);
      });
    }

  const appendChild = (obj) => {
    showTaskInProject(obj) 
  };

  return { appendChild };
};

export { tabFactory as default };
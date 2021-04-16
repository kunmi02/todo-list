import { v4 as uuidv4 } from 'uuid';

function Task(title, description, dueDate, priority) {
  this.taskId = uuidv4();
  this.taskTitle = title;
  this.taskDescription = description;
  this.TaskDueDate = dueDate;
  this.TaskPriority = priority;
}

export default Task;

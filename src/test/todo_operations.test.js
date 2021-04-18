import Project from '../modules/project';
import Task from '../modules/todo';
// import operations from './modules/todo_operations';

test('should create a new task object ', () => {
  const project = new Project('Test Project', 'My description');
  const Newtask = new Task('Test Task', 'My description', '1/2/3', 'meduim');
  const tasks = project.projectTask
  const savedTask = tasks.push(Newtask)
  expect(savedTask).toBe(1);
});
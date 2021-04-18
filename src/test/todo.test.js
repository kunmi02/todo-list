import Task from '../modules/todo';

test('should return project object with the given arguments including title and description', () => {
  const task = new Task('Test Task', 'My description', '1/2/3', 'meduim');
  expect(task.taskTitle).toBe('Test Task');
});

test('should return project object with the given description', () => {
  const project = new Task('Test Project', 'My description');
  expect(project.taskDescription).toBe('My description');
});


test('should return empty project title if it was not given in the arguments', () => {
  const project = new Task();
  expect(project.taskTitle).toEqual(undefined);
});

test('should return empty project description if it was not given in the arguments', () => {
  const project = new Task();
  expect(project.taskDescription).toEqual(undefined);
});
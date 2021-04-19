import Project from '../modules/project';

test('should return project object with the given arguments including title and description', () => {
  const project = new Project('Test Project', 'My description');
  expect(project.projectTitle).toBe('Test Project');
});

test('should return project object with the given description', () => {
  const project = new Project('Test Project', 'My description');
  expect(project.projectDescription).toBe('My description');
});


test('should return empty project title if it was not given in the arguments', () => {
  const project = new Project();
  expect(project.projectTitle).toEqual(undefined);
});

test('should return empty project description if it was not given in the arguments', () => {
  const project = new Project();
  expect(project.projectDescription).toEqual(undefined);
});
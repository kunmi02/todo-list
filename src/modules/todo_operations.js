
const taskOperations = () => {
  const deleteTask = (project, taskID) => {
    const tasks = project.projectTask;
    for (let i = 0; i < tasks.length; i += 1) {
      const task = tasks[i];
      if (taskID === task.taskId) {
        tasks.splice(i, 1);
        break;
      }
    }
    return project;
  };

  return { deleteTask };
};

const operations = taskOperations();

export default operations;
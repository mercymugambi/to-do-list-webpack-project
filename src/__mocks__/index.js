const tasks = [];

const addTask = (todo) => {
  tasks.push(todo);
  return tasks;
};

const deleteTask = (a) => {
  if (tasks.length === 1) {
    tasks.pop();
    return tasks;
  }
  const newTask = tasks.filter((elem) => elem.index - 1 !== a);
  return newTask;
};

const clearCompletedTasks = (tasks) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  return incompleteTasks;
};

module.exports = { addTask, deleteTask, clearCompletedTasks };
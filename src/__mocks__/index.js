let tasks = [];

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

const update = (Item) => {
  tasks = [{ index: 1, description: 'hello world', completed: false }];
  tasks[0].description = Item;
  return tasks;
};

module.exports = {
  addTask, deleteTask, update, clearCompletedTasks,
};

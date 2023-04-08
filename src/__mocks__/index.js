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

const update = (Item) => {
  tasks = [{ index: 1, description: 'hello world', completed: false }];
  tasks[0].description = Item;
  return tasks;
};

const status = (index) => {
  tasks[index].completed = true;
  return tasks;
};

const clearAllCompleted = () => {
  if (tasks.length === 0) return;
  if (tasks.length >= 1) {
    if (tasks[0].completed === true) {
      tasks.pop();
      return tasks;
    }
  } else {
    const filteredItem = tasks.filter((verify) => verify.completed === false);
    return filteredItem;
  }
};

module.exports = {
  addTask, deleteTask, update, clearAllCompleted, status,
};
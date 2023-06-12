const addTodo = (Todo, todos, description) => {
  const todo = new Todo(description, false, todos.todos.length + 1);
  todos.add(todo);
  todos.save();
  todos.render();
};

const removeTodo = (id, todos) => {
  todos.remove(todos.todos[id]);
  todos.todos.forEach((t, i) => {
    t.index = i + 1;
  });
  todos.save();
  todos.render();
};

const markCompleted = (id, todos) => {
  const todo = todos.todos.filter((t) => t.index === id)[0];
  todo.completed = !todo.completed;
  todos.save();
  todos.render();
};

const editDescription = (id, todos, description) => {
  todos.todos[id - 1].decription = description;
  todos.save();
  todos.render();
};

const clearCompleted = (todos) => {
  todos.todos = todos.todos.filter((t) => t.completed === false);
  todos.todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  todos.save();
  todos.render();
};

export {
  addTodo, removeTodo, markCompleted, editDescription, clearCompleted,
};
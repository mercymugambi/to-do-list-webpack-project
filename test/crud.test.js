// todoCrud.test.js
import {
  addTodo, removeTodo, editDescription, markCompleted, clearCompleted,
} from '../src/todoCrud.js';

/* eslint-disable no-unused-vars */
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
/* eslint-enable no-unused-vars */
/**
   * @jest-environment jsdom
   */

// Mock localStorage
const localStorage = (() => {
  let store = {}; //
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();
  // Object.defineProperty(window, 'localStorage', { value: localStorage });

// Mock the Todo class
class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

// Mock the Todos class
class Todos {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((t) => t !== todo);
    this.todos.forEach((t, i) => {
      t.index = i;
    });
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  retrieve() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.todos = [...this.todos, ...todos];
    }
  }

  render() {
    // Do nothing
  }
}

describe('todoCrud', () => {
  describe('addTodo', () => {
    it('adds a new todo to the list', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      expect(todos.todos.length).toBe(1);
      expect(todos.todos[0].description).toBe('Test todo');
      expect(todos.todos[0].completed).toBe(false);
    });

    it('saves the new todo to localStorage', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      expect(localStorage.getItem('todos')).toBeTruthy();
      expect(JSON.parse(localStorage.getItem('todos')).length).toBe(1);
      expect(JSON.parse(localStorage.getItem('todos'))[0].description).toBe('Test todo');
      expect(JSON.parse(localStorage.getItem('todos'))[0].completed).toBe(false);
    });
  });

  describe('removeTodo', () => {
    it('removes a todo from the list', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      addTodo(Todo, todos, 'Another test todo');
      removeTodo(0, todos);
      expect(todos.todos.length).toBe(1);
      expect(todos.todos[0].description).toBe('Another test todo');
    });

    it('saves the updated list to localStorage', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      addTodo(Todo, todos, 'Another test todo');
      removeTodo(0, todos);
      expect(localStorage.getItem('todos')).toBeTruthy();
      expect(JSON.parse(localStorage.getItem('todos')).length).toBe(1);
      expect(JSON.parse(localStorage.getItem('todos'))[0].description).toBe('Another test todo');
    });
  });
  describe('editDescription', () => {
    it('edits the description of a todo', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      editDescription(1, todos, 'Test todo');
      expect(todos.todos[0].description).toBe('Test todo');
    });
  });
  describe('markCompleted', () => {
    it('marks a todo as completed', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      markCompleted(1, todos);
      expect(todos.todos[0].completed).toBe(true);
    });

    it('saves the updated list to localStorage', () => {
      const todos = new Todos();
      addTodo(Todo, todos, 'Test todo');
      markCompleted(1, todos);
      expect(localStorage.getItem('todos')).toBeTruthy();
      expect(JSON.parse(localStorage.getItem('todos')).length).toBe(1);
      expect(JSON.parse(localStorage.getItem('todos'))[0].completed).toBe(true);
    });
    describe('clearCompleted', () => {
      it('clears all completed todos', () => {
        const todos = new Todos();
        addTodo(Todo, todos, 'Test todo');
        addTodo(Todo, todos, 'Another test todo');
        markCompleted(1, todos);
        clearCompleted(todos);
        expect(todos.todos.length).toBe(1);
      });
    });
  });
});
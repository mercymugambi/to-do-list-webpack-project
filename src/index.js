import './style.css';
import './input.css';
import {
  addTodo, removeTodo, markCompleted, editDescription, clearCompleted,
} from './todoCrud.js';

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const clearBtn = document.querySelector('#clear-btn');

const showTrash = (index) => {
  const trash = document.querySelector('.fa-trash');
  const ellipsis = document.querySelector('.fa-ellipsis-v');
  const todo = document.getElementById(index);
  todo.classList.add('bg-orange-100');
  ellipsis.classList.add('hidden');
  trash.classList.remove('hidden');
};

class Todo {
  constructor(decription, completed, index) {
    this.decription = decription;
    this.completed = completed;
    this.index = index;
  }
}

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
    todoList.innerHTML = '';
    this.todos.forEach((todo) => {
      const div = document.createElement('div');
      div.id = todo.index;
      div.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'border-b', 'border-gray-200');
      const div2 = document.createElement('div');
      div2.classList.add('flex', 'items-center');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = todo.completed;
      input.addEventListener('change', () => {
        markCompleted(todo.index, this);
        input.checked = todo.completed;
      });
      input.classList.add('mr-2');
      const p = document.createElement('p');
      p.classList.add('text-gray-700');
      p.addEventListener('click', () => {
        p.contentEditable = true;
        p.focus();
      });
      p.addEventListener('focusout', () => {
        p.contentEditable = false;
        editDescription(todo.index, this, p.textContent);
      });

      if (todo.completed) {
        p.classList.add('line-through');
      }
      p.textContent = todo.decription;
      const div3 = document.createElement('div');
      const i = document.createElement('i');
      i.addEventListener('click', () => {
        showTrash(todo.index);
      });
      i.classList.add('fa', 'fa-ellipsis-v', 'text-sm', 'cursor-move', 'text-gray-500');
      i.setAttribute('aria-hidden', 'true');
      const i2 = document.createElement('i');
      i2.addEventListener('click', () => {
        removeTodo(todo.index, this);
      });
      i2.classList.add('fa', 'fa-trash', 'text-sm', 'cursor-pointer', 'text-gray-500', 'hidden');
      i2.setAttribute('aria-hidden', 'true');

      div2.appendChild(input);
      div2.appendChild(p);
      div.appendChild(div2);
      div3.appendChild(i);
      div3.appendChild(i2);
      div.appendChild(div3);
      todoList.appendChild(div);
    });
  }
}

const todos = new Todos();

clearBtn.addEventListener('click', () => {
  clearCompleted(todos);
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value !== '') {
    addTodo(Todo, todos, input.value);
    input.value = '';
  }
});

todos.retrieve();
todos.render();
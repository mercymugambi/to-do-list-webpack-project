/* eslint-disable no-unused-vars */
import _ from 'lodash';
import AddItems from './print';
// import printMe from './print.js';
import './style.css';

const TodoContainer = document.querySelector('.list-items');
// Check if To Do List exists in local storage
const storedItems = localStorage.getItem('items');

// task/object array declared empty
let TodoList = [];

// Load To Do List from local storage if it exists
if (storedItems) {
  TodoList = JSON.parse(storedItems);
}

// Render To Do List
AddItems(TodoList, TodoContainer);

// Event listener to add tasks to the to do list when enter is pressed.
const inputField = document.querySelector('.addItem');
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const newItem = {
      description: inputField.value,
      completed: false,
      index: TodoList.length,
    };
    TodoList.push(newItem);
    // Save the updated To Do List in local storage
    localStorage.setItem('items', JSON.stringify(TodoList));
    AddItems(TodoList, TodoContainer);
    inputField.value = '';
  }
});

const todoContainer = document.querySelector('.list-items');

todoContainer.addEventListener('click', (event) => {
  const { target } = event;

  if (target.tagName === 'P') {
    target.setAttribute('contenteditable', true);

    target.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        target.removeAttribute('contenteditable');
        const index = parseInt(target.parentElement.dataset.index, 10);
        const newDescription = target.textContent.trim();

        // Update the task description in the array
        if (Array.isArray(TodoList) && index >= 0 && index < TodoList.length) {
          TodoList[index].description = newDescription;
          // Save the updated To Do List in local storage
          localStorage.setItem('items', JSON.stringify(TodoList));
        }
      }
    });
  }
});

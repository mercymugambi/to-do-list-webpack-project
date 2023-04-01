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
    // Saves the updated To Do List in local storage
    localStorage.setItem('items', JSON.stringify(TodoList));
    AddItems(TodoList, TodoContainer);
    inputField.value = '';
  }
});

const todoContainer = document.querySelector('.list-items');

// Edits the description and updates the local storage
todoContainer.addEventListener('click', (event) => {
  const { target } = event;

  if (target.tagName === 'P') {
    target.setAttribute('contenteditable', true);

    target.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        target.removeAttribute('contenteditable');
        const li = target.closest('li');
        const index = parseInt(li.dataset.index, 10);
        const task = TodoList[index];
        const newDescription = target.textContent.trim();

        // Updated the task object in the array with the new description
        task.description = newDescription;

        localStorage.setItem('items', JSON.stringify(TodoList));
        // Updated the UI with the new description
        AddItems(TodoList, TodoContainer);
      }
    });
  }
});

// drag and drop
todoContainer.addEventListener('dragstart', (event) => {
  // Add a class to the dragged item
  event.target.classList.add('dragged-item');
  event.dataTransfer.setData('text/plain', event.target.dataset.index);
});

todoContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
});

todoContainer.addEventListener('drop', (event) => {
  // Remove the class from the dragged item
  event.target.classList.remove('dragged-item');
  const fromIndex = event.dataTransfer.getData('text/plain');
  const toIndex = event.target.closest('li').dataset.index;

  // Move the item in the array
  const item = TodoList.splice(fromIndex, 1)[0];
  TodoList.splice(toIndex, 0, item);

  // Assign new indexes based on their new positions
  for (let i = 0; i < TodoList.length; i += 1) {
    TodoList[i].index = i;
  }

  // Save the updated list to local storage and update the UI
  localStorage.setItem('items', JSON.stringify(TodoList));
  AddItems(TodoList, TodoContainer);
});

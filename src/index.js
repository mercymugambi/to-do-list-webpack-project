/* eslint-disable no-unused-vars */
import _ from 'lodash';
import AddItems from './print';
// import printMe from './print.js';
import './style.css';

const TodoContainer = document.querySelector('.list-items');

// task/object array declared empty
const TodoList = [];

// Event listener to add tasks to the to do list when enter is pressed.
const inputField = document.querySelector('.addItem');
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const newItem = { description: inputField.value };
    TodoList.push(newItem);
    AddItems(TodoList, TodoContainer);
    inputField.value = '';
  }
});

// EventListener to add items to the list when the drop down icon is clicked

const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  const newItem = { description: inputField.value };
  TodoList.push(newItem);
  AddItems(TodoList, TodoContainer);
  inputField.value = '';
});

// Get all the li elements
const liElements = Element.querySelectorAll('li');

// Add a change event listener to each li element
liElements.forEach((li) => {
  const checkbox = li.querySelector('.Checkboxi');
  checkbox.addEventListener('change', () => {
    // Get the index of the task associated with the li element
    const index = parseInt(li.dataset.index, 10);
    // If the checkbox is checked, remove the task from the TodoList array and re-render the list
    if (checkbox.checked) {
      TodoList.splice(index, 1);
      AddItems(TodoList, TodoContainer);
    }
  });
});

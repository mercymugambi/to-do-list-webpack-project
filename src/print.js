// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import { markCompleted, markIncomplete } from './status.js';

// let dragStartIndex;
const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo, index) => {
    finalHtmlItem += `
      <li class="li-list" data-index="${index}" draggable="true">
        <div class="listdiv draggable">
          <input type="checkbox" class="Checkboxi" />
          <p>${todo.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical remove-icon" draggable="true" ></i>
      </li>
      <div class="borderLine"></div>
    `;
  });
  Element.innerHTML = finalHtmlItem;

  // Add event listener to each list item
  const listItems = document.querySelectorAll('.li-list');
  listItems.forEach((li) => {
    const checkbox = li.querySelector('.Checkboxi');
    const trashIcon = li.querySelector('.remove-icon');
    const description = li.querySelector('p');

    // check.addEventListener('click', checkOrder);

    li.addEventListener('click', () => {
      // Display trash icon and change background color
      li.classList.add('delete-item');
      trashIcon.classList.remove('fa-ellipsis-vertical');
      trashIcon.classList.add('fa-trash');

      // Make description editable
      description.contentEditable = true;
      description.focus();
    });

    // Add event listener to description element
    description.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of adding a new line
        description.contentEditable = false;
        li.classList.remove('delete-item');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        // Update the todo item in the array
        const index = parseInt(li.dataset.index, 10);
        Items[index].description = description.innerText;
        // Save the updated To Do List in local storage
        localStorage.setItem('items', JSON.stringify(Items));
      }
    });

    // Add event listener to checkbox
    checkbox.addEventListener('change', () => {
      const li = checkbox.closest('.li-list');
      const description = li.querySelector('p');
      const index = parseInt(li.dataset.index, 10);
      const myButton = document.getElementById('btn');
      if (checkbox.checked) {
        myButton.disabled = !checkbox.checked;
        myButton.style.color = 'red';
        myButton.style.cursor = 'pointer';
        // Add strikethrough to description
        description.contentEditable = false;
        description.style.textDecoration = 'line-through';
        li.classList.remove('delete-item');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        // Mark todo as completed in the array
        markCompleted(Items[index]);
        checkbox.checked = true;
      } else {
        myButton.disabled = checkbox.checked;
        myButton.style.color = 'gray';
        // Remove strikethrough from description
        description.style.textDecoration = 'none';
        description.contentEditable = false;
        li.classList.remove('delete-item');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        markIncomplete(Items[index]);
        checkbox.checked = false;
      }
      // Save the updated To Do List in local storage
      localStorage.setItem('items', JSON.stringify(Items));
    });
    // Add event listener to trash icon
    trashIcon.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the li click event from firing
      const index = parseInt(li.dataset.index, 10);
      // Remove the list item from the DOM
      li.remove();
      // Removes the corresponding element from the array
      Items.splice(index - 1, 1);
      // Updated the index of the remaining tasks in the array
      Items.forEach((task, i) => {
        task.index = i;
      });
      // Save the updated To Do List in local storage
      localStorage.setItem('items', JSON.stringify(Items));
    });
  });

  const myButton = document.getElementById('btn');
  // Add event listener to the button
  // Add event listener to button
  myButton.addEventListener('click', () => {
  // Get all the list items
    const listItems = document.querySelectorAll('.li-list');
    // Filter the list items that have checkbox checked
    const completedItems = Array.from(listItems).filter((li) => li.querySelector('.Checkboxi').checked);
    // Remove the completed items from the DOM
    completedItems.forEach((li) => li.remove());
    // Remove the completed items from the array
    Items = Items.filter((todo) => !todo.completed);
    // Updated the index of the remaining tasks in the array
    Items.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('items', JSON.stringify(Items));
    // Reload the page
    window.location.reload();
  });
};
export default AddItems;

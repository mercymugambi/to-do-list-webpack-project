const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo, index) => {
    finalHtmlItem += `
      <li class="li-list" data-index="${index}">
        <div class="listdiv">
          <input type="checkbox" class="Checkboxi" />
          <p>${todo.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical remove-icon"></i>
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
    // const repositionIcon = li.querySelector('.reposition-icon');

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

      if (checkbox.checked) {
        // Add strikethrough to description
        description.contentEditable = false;
        description.style.textDecoration = 'line-through';
        li.classList.remove('delete-item');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        // Set background color to normal
        // li.style.backgroundColor = 'black';
      } else {
        // Remove strikethrough from description
        description.style.textDecoration = 'none';
        description.contentEditable = false;
        li.classList.remove('delete-item');
        trashIcon.classList.remove('fa-trash');
        trashIcon.classList.add('fa-ellipsis-vertical');
        // Set background color to alternate color
        // li.style.backgroundColor = 'lightgrey';
      }
    });
    // Add event listener to trash icon
    trashIcon.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the li click event from firing
      const index = parseInt(li.dataset.index, 10);
      // checkbox.checked = true;
      // Remove the list item from the DOM
      li.remove();
      // Removes the corresponding element from the array
      Items.splice(index, 1);
      // Updated the index of the remaining tasks in the array
      Items.forEach((task, i) => {
        task.index = i;
      });
      // Save the updated To Do List in local storage
      localStorage.setItem('items', JSON.stringify(Items));
    });
  });
};

export default AddItems;

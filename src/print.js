const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo, index) => {
    finalHtmlItem += `
      <li class = "li-list" data-index="${index}">
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

  // Add event listener to each remove icon
  const removeIcons = document.querySelectorAll('.remove-icon');
  removeIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      const li = event.target.closest('li');
      // Specify radix 10 to avoid warnings
      const index = parseInt(li.dataset.index, 10);
      const checkbox = li.querySelector('.Checkboxi');
      if (checkbox.checked) {
        // Removes the corresponding element from the array
        Items.splice(index, 1);
        // Updated the index of the remaining tasks in the array
        Items.forEach((task, i) => {
          task.index = i;
        });
        // Save the updated To Do List in local storage
        localStorage.setItem('items', JSON.stringify(Items));
        AddItems(Items, Element); // Re-render the list
      }
    });
  });
};

export default AddItems;
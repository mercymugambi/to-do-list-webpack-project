const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo, index) => {
    finalHtmlItem += `
      <li class = "li-list" data-index="${index + 1}">
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
      const index = parseInt(li.dataset.index, 10); // Specify radix 10 to avoid warnings
      const checkbox = li.querySelector('.Checkboxi');
      if (checkbox.checked) {
        Items.splice(index - 1, 1); // Removes the corresponding element from the array
        AddItems(Items, Element); // Re-render the list
      }
    });
  });
};

export default AddItems;
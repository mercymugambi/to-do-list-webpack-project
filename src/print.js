// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions

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
};

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
export default AddItems;

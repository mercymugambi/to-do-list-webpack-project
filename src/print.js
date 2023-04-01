const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo) => {
    finalHtmlItem += `
      <li class = "li-list">
      <div class="listdiv">
        <input type="checkbox" class="Checkboxi" />
        <p>${todo.description}</p>
      </div>
      </li>
      <div class="borderLine"></div>
    `;
  });

  Element.innerHTML = finalHtmlItem;
};

export default AddItems;
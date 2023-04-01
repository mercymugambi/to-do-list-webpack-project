/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItems);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGxldCBkcmFnU3RhcnRJbmRleDtcbmNvbnN0IEFkZEl0ZW1zID0gKEl0ZW1zLCBFbGVtZW50KSA9PiB7XG4gIGxldCBmaW5hbEh0bWxJdGVtID0gJyc7XG4gIEl0ZW1zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgZmluYWxIdG1sSXRlbSArPSBgXG4gICAgICA8bGkgY2xhc3M9XCJsaS1saXN0XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdGRpdiBkcmFnZ2FibGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJDaGVja2JveGlcIiAvPlxuICAgICAgICAgIDxwPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIHJlbW92ZS1pY29uXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiID48L2k+XG4gICAgICA8L2xpPlxuICAgICAgPGRpdiBjbGFzcz1cImJvcmRlckxpbmVcIj48L2Rpdj5cbiAgICBgO1xuICB9KTtcbiAgRWxlbWVudC5pbm5lckhUTUwgPSBmaW5hbEh0bWxJdGVtO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGxpc3QgaXRlbVxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGktbGlzdCcpO1xuICBsaXN0SXRlbXMuZm9yRWFjaCgobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy5DaGVja2JveGknKTtcbiAgICBjb25zdCB0cmFzaEljb24gPSBsaS5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWljb24nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuICAgIC8vIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tPcmRlcik7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIERpc3BsYXkgdHJhc2ggaWNvbiBhbmQgY2hhbmdlIGJhY2tncm91bmQgY29sb3JcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pdGVtJyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaCcpO1xuXG4gICAgICAvLyBNYWtlIGRlc2NyaXB0aW9uIGVkaXRhYmxlXG4gICAgICBkZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgICAgZGVzY3JpcHRpb24uZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBkZXNjcmlwdGlvbiBlbGVtZW50XG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIGFkZGluZyBhIG5ldyBsaW5lXG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGUtaXRlbScpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtdHJhc2gnKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG9kbyBpdGVtIGluIHRoZSBhcnJheVxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGxpLmRhdGFzZXQuaW5kZXgsIDEwKTtcbiAgICAgICAgSXRlbXNbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIFRvIERvIExpc3QgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShJdGVtcykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNoZWNrYm94XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgbGkgPSBjaGVja2JveC5jbG9zZXN0KCcubGktbGlzdCcpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsaS5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIC8vIEFkZCBzdHJpa2V0aHJvdWdoIHRvIGRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGUtaXRlbScpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtdHJhc2gnKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5vcm1hbFxuICAgICAgICAvLyBsaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVtb3ZlIHN0cmlrZXRocm91Z2ggZnJvbSBkZXNjcmlwdGlvblxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZS1pdGVtJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaCcpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gYWx0ZXJuYXRlIGNvbG9yXG4gICAgICAgIC8vIGxpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0cmFzaCBpY29uXG4gICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCB0aGUgbGkgY2xpY2sgZXZlbnQgZnJvbSBmaXJpbmdcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGkuZGF0YXNldC5pbmRleCwgMTApO1xuICAgICAgLy8gY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAvLyBSZW1vdmUgdGhlIGxpc3QgaXRlbSBmcm9tIHRoZSBET01cbiAgICAgIGxpLnJlbW92ZSgpO1xuICAgICAgLy8gUmVtb3ZlcyB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gICAgICBJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgLy8gVXBkYXRlZCB0aGUgaW5kZXggb2YgdGhlIHJlbWFpbmluZyB0YXNrcyBpbiB0aGUgYXJyYXlcbiAgICAgIEl0ZW1zLmZvckVhY2goKHRhc2ssIGkpID0+IHtcbiAgICAgICAgdGFzay5pbmRleCA9IGk7XG4gICAgICB9KTtcbiAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgVG8gRG8gTGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShJdGVtcykpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEl0ZW1zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
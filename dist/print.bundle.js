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
const AddItems = (Items, Element) => {
  let finalHtmlItem = '';
  Items.forEach((todo, index) => {
    finalHtmlItem += `
      <li class="li-list" data-index="${index}" draggable="true">
        <div class="listdiv">
          <input type="checkbox" class="Checkboxi" />
          <p>${todo.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical remove-icon"></i>
      </li>
      <div class="borderLine"></div>
    `;
  });

  let dragStartIndex;
  Element.innerHTML = finalHtmlItem;

  // Add event listener to each list item
  const listItems = document.querySelectorAll('.li-list');
  listItems.forEach((li) => {
    const checkbox = li.querySelector('.Checkboxi');
    const trashIcon = li.querySelector('.remove-icon');
    const description = li.querySelector('p');
    // const repositionIcon = li.querySelector('.reposition-icon');

    li.addEventListener('dragstart', () => {
      dragStartIndex = parseInt(li.dataset.index, 10);
      li.classList.add('dragging');
    });

    li.addEventListener('dragend', () => {
      li.classList.remove('dragging');
      // Update the todo item in the array
      const dragEndIndex = parseInt(li.dataset.index, 10);
      const temp = Items[dragStartIndex];
      Items[dragStartIndex] = Items[dragEndIndex];
      Items[dragEndIndex] = temp;
      // Save the updated To Do List in local storage
      localStorage.setItem('items', JSON.stringify(Items));
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IEFkZEl0ZW1zID0gKEl0ZW1zLCBFbGVtZW50KSA9PiB7XG4gIGxldCBmaW5hbEh0bWxJdGVtID0gJyc7XG4gIEl0ZW1zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgZmluYWxIdG1sSXRlbSArPSBgXG4gICAgICA8bGkgY2xhc3M9XCJsaS1saXN0XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdGRpdlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIkNoZWNrYm94aVwiIC8+XG4gICAgICAgICAgPHA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWwgcmVtb3ZlLWljb25cIj48L2k+XG4gICAgICA8L2xpPlxuICAgICAgPGRpdiBjbGFzcz1cImJvcmRlckxpbmVcIj48L2Rpdj5cbiAgICBgO1xuICB9KTtcblxuICBsZXQgZHJhZ1N0YXJ0SW5kZXg7XG4gIEVsZW1lbnQuaW5uZXJIVE1MID0gZmluYWxIdG1sSXRlbTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpLWxpc3QnKTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBsaS5xdWVyeVNlbGVjdG9yKCcuQ2hlY2tib3hpJyk7XG4gICAgY29uc3QgdHJhc2hJY29uID0gbGkucXVlcnlTZWxlY3RvcignLnJlbW92ZS1pY29uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBsaS5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgLy8gY29uc3QgcmVwb3NpdGlvbkljb24gPSBsaS5xdWVyeVNlbGVjdG9yKCcucmVwb3NpdGlvbi1pY29uJyk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICBkcmFnU3RhcnRJbmRleCA9IHBhcnNlSW50KGxpLmRhdGFzZXQuaW5kZXgsIDEwKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgfSk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgdG9kbyBpdGVtIGluIHRoZSBhcnJheVxuICAgICAgY29uc3QgZHJhZ0VuZEluZGV4ID0gcGFyc2VJbnQobGkuZGF0YXNldC5pbmRleCwgMTApO1xuICAgICAgY29uc3QgdGVtcCA9IEl0ZW1zW2RyYWdTdGFydEluZGV4XTtcbiAgICAgIEl0ZW1zW2RyYWdTdGFydEluZGV4XSA9IEl0ZW1zW2RyYWdFbmRJbmRleF07XG4gICAgICBJdGVtc1tkcmFnRW5kSW5kZXhdID0gdGVtcDtcbiAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgVG8gRG8gTGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShJdGVtcykpO1xuICAgIH0pO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBEaXNwbGF5IHRyYXNoIGljb24gYW5kIGNoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbScpO1xuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gnKTtcbiAgICAgIC8vIE1ha2UgZGVzY3JpcHRpb24gZWRpdGFibGVcbiAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICBkZXNjcmlwdGlvbi5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGRlc2NyaXB0aW9uIGVsZW1lbnRcbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgYWRkaW5nIGEgbmV3IGxpbmVcbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZS1pdGVtJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaCcpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b2RvIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGkuZGF0YXNldC5pbmRleCwgMTApO1xuICAgICAgICBJdGVtc1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5pbm5lclRleHQ7XG4gICAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgVG8gRG8gTGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KEl0ZW1zKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2hlY2tib3hcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGNoZWNrYm94LmNsb3Nlc3QoJy5saS1saXN0Jyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblxuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgLy8gQWRkIHN0cmlrZXRocm91Z2ggdG8gZGVzY3JpcHRpb25cbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZS1pdGVtJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaCcpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gbm9ybWFsXG4gICAgICAgIC8vIGxpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZW1vdmUgc3RyaWtldGhyb3VnaCBmcm9tIGRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICBkZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRlLWl0ZW0nKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRyYXNoJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xuICAgICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBhbHRlcm5hdGUgY29sb3JcbiAgICAgICAgLy8gbGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRyYXNoIGljb25cbiAgICB0cmFzaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IHRoZSBsaSBjbGljayBldmVudCBmcm9tIGZpcmluZ1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaS5kYXRhc2V0LmluZGV4LCAxMCk7XG4gICAgICAvLyBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtIGZyb20gdGhlIERPTVxuICAgICAgbGkucmVtb3ZlKCk7XG4gICAgICAvLyBSZW1vdmVzIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAgICAgIEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAvLyBVcGRhdGVkIHRoZSBpbmRleCBvZiB0aGUgcmVtYWluaW5nIHRhc2tzIGluIHRoZSBhcnJheVxuICAgICAgSXRlbXMuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICB0YXNrLmluZGV4ID0gaTtcbiAgICAgIH0pO1xuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBUbyBEbyBMaXN0IGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KEl0ZW1zKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSXRlbXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
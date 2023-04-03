/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markCompleted": () => (/* binding */ markCompleted),
/* harmony export */   "markIncomplete": () => (/* binding */ markIncomplete)
/* harmony export */ });
function markCompleted(task) {
  task.completed = true;
}

function markIncomplete(task) {
  task.completed = false;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.js */ "./src/status.js");
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
        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.markCompleted)(Items[index]);
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
        (0,_status_js__WEBPACK_IMPORTED_MODULE_0__.markIncomplete)(Items[index]);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItems);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUM0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc3RhdHVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWFya0NvbXBsZXRlZCh0YXNrKSB7XG4gIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJbmNvbXBsZXRlKHRhc2spIHtcbiAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCB7IG1hcmtDb21wbGV0ZWQsIG1hcmtJbmNvbXBsZXRlIH0gZnJvbSAnLi9zdGF0dXMuanMnO1xuXG4vLyBsZXQgZHJhZ1N0YXJ0SW5kZXg7XG5jb25zdCBBZGRJdGVtcyA9IChJdGVtcywgRWxlbWVudCkgPT4ge1xuICBsZXQgZmluYWxIdG1sSXRlbSA9ICcnO1xuICBJdGVtcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGZpbmFsSHRtbEl0ZW0gKz0gYFxuICAgICAgPGxpIGNsYXNzPVwibGktbGlzdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGRyYWdnYWJsZT1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RkaXYgZHJhZ2dhYmxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiQ2hlY2tib3hpXCIgLz5cbiAgICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbCByZW1vdmUtaWNvblwiIGRyYWdnYWJsZT1cInRydWVcIiA+PC9pPlxuICAgICAgPC9saT5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJMaW5lXCI+PC9kaXY+XG4gICAgYDtcbiAgfSk7XG4gIEVsZW1lbnQuaW5uZXJIVE1MID0gZmluYWxIdG1sSXRlbTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpLWxpc3QnKTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBsaS5xdWVyeVNlbGVjdG9yKCcuQ2hlY2tib3hpJyk7XG4gICAgY29uc3QgdHJhc2hJY29uID0gbGkucXVlcnlTZWxlY3RvcignLnJlbW92ZS1pY29uJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBsaS5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cbiAgICAvLyBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrT3JkZXIpO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBEaXNwbGF5IHRyYXNoIGljb24gYW5kIGNoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbScpO1xuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gnKTtcblxuICAgICAgLy8gTWFrZSBkZXNjcmlwdGlvbiBlZGl0YWJsZVxuICAgICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIGRlc2NyaXB0aW9uLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZGVzY3JpcHRpb24gZWxlbWVudFxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBhZGRpbmcgYSBuZXcgbGluZVxuICAgICAgICBkZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRlLWl0ZW0nKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRyYXNoJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHRvZG8gaXRlbSBpbiB0aGUgYXJyYXlcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaS5kYXRhc2V0LmluZGV4LCAxMCk7XG4gICAgICAgIEl0ZW1zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBUbyBEbyBMaXN0IGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoSXRlbXMpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjaGVja2JveFxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gY2hlY2tib3guY2xvc2VzdCgnLmxpLWxpc3QnKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbGkucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaS5kYXRhc2V0LmluZGV4LCAxMCk7XG4gICAgICBjb25zdCBteUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIG15QnV0dG9uLmRpc2FibGVkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIG15QnV0dG9uLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIG15QnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgLy8gQWRkIHN0cmlrZXRocm91Z2ggdG8gZGVzY3JpcHRpb25cbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2RlbGV0ZS1pdGVtJyk7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS10cmFzaCcpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcbiAgICAgICAgLy8gTWFyayB0b2RvIGFzIGNvbXBsZXRlZCBpbiB0aGUgYXJyYXlcbiAgICAgICAgbWFya0NvbXBsZXRlZChJdGVtc1tpbmRleF0pO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG15QnV0dG9uLmRpc2FibGVkID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgbXlCdXR0b24uc3R5bGUuY29sb3IgPSAnZ3JheSc7XG4gICAgICAgIC8vIFJlbW92ZSBzdHJpa2V0aHJvdWdoIGZyb20gZGVzY3JpcHRpb25cbiAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkZWxldGUtaXRlbScpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtdHJhc2gnKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XG4gICAgICAgIG1hcmtJbmNvbXBsZXRlKEl0ZW1zW2luZGV4XSk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgVG8gRG8gTGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShJdGVtcykpO1xuICAgIH0pO1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0cmFzaCBpY29uXG4gICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCB0aGUgbGkgY2xpY2sgZXZlbnQgZnJvbSBmaXJpbmdcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGkuZGF0YXNldC5pbmRleCwgMTApO1xuICAgICAgLy8gUmVtb3ZlIHRoZSBsaXN0IGl0ZW0gZnJvbSB0aGUgRE9NXG4gICAgICBsaS5yZW1vdmUoKTtcbiAgICAgIC8vIFJlbW92ZXMgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICAgICAgSXRlbXMuc3BsaWNlKGluZGV4IC0gMSwgMSk7XG4gICAgICAvLyBVcGRhdGVkIHRoZSBpbmRleCBvZiB0aGUgcmVtYWluaW5nIHRhc2tzIGluIHRoZSBhcnJheVxuICAgICAgSXRlbXMuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgICB0YXNrLmluZGV4ID0gaTtcbiAgICAgIH0pO1xuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBUbyBEbyBMaXN0IGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KEl0ZW1zKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG15QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uXG4gIG15QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBHZXQgYWxsIHRoZSBsaXN0IGl0ZW1zXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpLWxpc3QnKTtcbiAgICAvLyBGaWx0ZXIgdGhlIGxpc3QgaXRlbXMgdGhhdCBoYXZlIGNoZWNrYm94IGNoZWNrZWRcbiAgICBjb25zdCBjb21wbGV0ZWRJdGVtcyA9IEFycmF5LmZyb20obGlzdEl0ZW1zKS5maWx0ZXIoKGxpKSA9PiBsaS5xdWVyeVNlbGVjdG9yKCcuQ2hlY2tib3hpJykuY2hlY2tlZCk7XG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wbGV0ZWQgaXRlbXMgZnJvbSB0aGUgRE9NXG4gICAgY29tcGxldGVkSXRlbXMuZm9yRWFjaCgobGkpID0+IGxpLnJlbW92ZSgpKTtcbiAgICAvLyBSZW1vdmUgdGhlIGNvbXBsZXRlZCBpdGVtcyBmcm9tIHRoZSBhcnJheVxuICAgIEl0ZW1zID0gSXRlbXMuZmlsdGVyKCh0b2RvKSA9PiAhdG9kby5jb21wbGV0ZWQpO1xuICAgIC8vIFVwZGF0ZWQgdGhlIGluZGV4IG9mIHRoZSByZW1haW5pbmcgdGFza3MgaW4gdGhlIGFycmF5XG4gICAgSXRlbXMuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoSXRlbXMpKTtcbiAgICAvLyBSZWxvYWQgdGhlIHBhZ2VcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFkZEl0ZW1zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
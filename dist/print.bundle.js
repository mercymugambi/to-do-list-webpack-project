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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItems);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBBZGRJdGVtcyA9IChJdGVtcywgRWxlbWVudCkgPT4ge1xuICBsZXQgZmluYWxIdG1sSXRlbSA9ICcnO1xuICBJdGVtcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGZpbmFsSHRtbEl0ZW0gKz0gYFxuICAgICAgPGxpIGNsYXNzID0gXCJsaS1saXN0XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdGRpdlwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJDaGVja2JveGlcIiAvPlxuICAgICAgICA8cD4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIHJlbW92ZS1pY29uXCI+PC9pPlxuICAgICAgPC9saT5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJMaW5lXCI+PC9kaXY+XG4gICAgYDtcbiAgfSk7XG5cbiAgRWxlbWVudC5pbm5lckhUTUwgPSBmaW5hbEh0bWxJdGVtO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIHJlbW92ZSBpY29uXG4gIGNvbnN0IHJlbW92ZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1pY29uJyk7XG4gIHJlbW92ZUljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgLy8gU3BlY2lmeSByYWRpeCAxMCB0byBhdm9pZCB3YXJuaW5nc1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaS5kYXRhc2V0LmluZGV4LCAxMCk7XG4gICAgICBjb25zdCBjaGVja2JveCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy5DaGVja2JveGknKTtcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICAgICAgICBJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAvLyBVcGRhdGVkIHRoZSBpbmRleCBvZiB0aGUgcmVtYWluaW5nIHRhc2tzIGluIHRoZSBhcnJheVxuICAgICAgICBJdGVtcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICAgICAgdGFzay5pbmRleCA9IGk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIFRvIERvIExpc3QgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShJdGVtcykpO1xuICAgICAgICBBZGRJdGVtcyhJdGVtcywgRWxlbWVudCk7IC8vIFJlLXJlbmRlciB0aGUgbGlzdFxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEl0ZW1zOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
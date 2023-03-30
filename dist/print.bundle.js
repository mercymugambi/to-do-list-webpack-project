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
        Items.splice(index - 1, 1); // Remove the corresponding element from the array
        AddItems(Items, Element); // Re-render the list
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItems);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgQWRkSXRlbXMgPSAoSXRlbXMsIEVsZW1lbnQpID0+IHtcbiAgbGV0IGZpbmFsSHRtbEl0ZW0gPSAnJztcbiAgSXRlbXMuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBmaW5hbEh0bWxJdGVtICs9IGBcbiAgICAgIDxsaSBjbGFzcyA9IFwibGktbGlzdFwiIGRhdGEtaW5kZXg9XCIke2luZGV4ICsgMX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0ZGl2XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cIkNoZWNrYm94aVwiIC8+XG4gICAgICAgIDxwPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWwgcmVtb3ZlLWljb25cIj48L2k+XG4gICAgICA8L2xpPlxuICAgICAgPGRpdiBjbGFzcz1cImJvcmRlckxpbmVcIj48L2Rpdj5cbiAgICBgO1xuICB9KTtcblxuICBFbGVtZW50LmlubmVySFRNTCA9IGZpbmFsSHRtbEl0ZW07XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcmVtb3ZlIGljb25cbiAgY29uc3QgcmVtb3ZlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWljb24nKTtcbiAgcmVtb3ZlSWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGxpLmRhdGFzZXQuaW5kZXgsIDEwKTsgLy8gU3BlY2lmeSByYWRpeCAxMCB0byBhdm9pZCB3YXJuaW5nc1xuICAgICAgY29uc3QgY2hlY2tib3ggPSBsaS5xdWVyeVNlbGVjdG9yKCcuQ2hlY2tib3hpJyk7XG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICBJdGVtcy5zcGxpY2UoaW5kZXggLSAxLCAxKTsgLy8gUmVtb3ZlIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAgICAgICAgQWRkSXRlbXMoSXRlbXMsIEVsZW1lbnQpOyAvLyBSZS1yZW5kZXIgdGhlIGxpc3RcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJdGVtczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
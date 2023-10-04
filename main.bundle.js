"use strict";
(self["webpackChunkyet_another_todo"] = self["webpackChunkyet_another_todo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");


const title = document.createElement("h1");
title.textContent = "Yet Another Todo";
document.body.appendChild(title);
const projects = document.createElement("div");
projects.classList.add("projects");
document.body.appendChild(projects);

function updateView() {
  projects.innerHTML = Object.values(_projectController_js__WEBPACK_IMPORTED_MODULE_0__.getState()).reduce(
    (acc, project) => {
      return acc + project.render();
    },
    ``,
  );
}

_projectController_js__WEBPACK_IMPORTED_MODULE_0__.createProject("hi");
// projectController.createProject("second");

updateView();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateView);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");



function project(title, todos) {
  function add() {
    const todoName = document.getElementById(`${title}-name`).value;
    const todoDescription = document.getElementById(
      `${title}-description`,
    ).value;

    _projectController_js__WEBPACK_IMPORTED_MODULE_1__.addTodo(todoName, todoDescription, title);

    todoName.value = "";
    todoDescription.value = "";
  }

  function render() {
    return `
    <div class="project">
      <h2>${title}</h2>
      ${todos.reduce((acc, todo) => {
        return acc.concat(todo.render());
      }, ``)}
      <label for="${title}-name">NAME</label>
      <input id="${title}-name" name="name" type="text"/>
      <label for="${title}-description">DESCRIPTION</label>
      <input id="${title}-description" name="description" type="text"/>
      <button class="new-todo" onclick="add()">+</button>
    </div>
    `;
  }

  return {
    title,
    todos,
    render,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   logState: () => (/* binding */ logState)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




let state = {};

function createProject(name) {
  state = {
    ...state,
    [name]: (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name, []),
  };
}

function addTodo(name, description, projectName) {
  const existingTodos = state[projectName].todos;

  state = {
    ...state,
    [projectName]: (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, [
      ...existingTodos,
      (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description),
    ]),
  };

  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function getState() {
  return { ...state };
}

function logState() {
  console.log(state);
}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function todo(name, description) {
  function render() {
    return `
    <h3>${name}</h3>
    <p>${description}</p>
    `;
  }

  return {
    name,
    description,
    render,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQywyREFBMEI7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsZ0VBQStCO0FBQy9COztBQUVBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qkc7QUFDK0I7O0FBRTVEO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBLFNBQVMsTUFBTTtBQUNmOztBQUVBLElBQUksMERBQXlCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUCxvQkFBb0IsTUFBTTtBQUMxQixtQkFBbUIsTUFBTTtBQUN6QixvQkFBb0IsTUFBTTtBQUMxQixtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q007QUFDTTtBQUNDOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFPO0FBQzFCO0FBQ0EsTUFBTSxvREFBSTtBQUNWO0FBQ0E7O0FBRUEsRUFBRSxxREFBVTtBQUNaOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0Q7Ozs7Ozs7Ozs7Ozs7OztBQ25DdEQ7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YsU0FBUyxZQUFZO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lldC1hbm90aGVyLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veWV0LWFub3RoZXItdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3lldC1hbm90aGVyLXRvZG8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8veWV0LWFub3RoZXItdG9kby8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIllldCBBbm90aGVyIFRvZG9cIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZXcoKSB7XG4gIHByb2plY3RzLmlubmVySFRNTCA9IE9iamVjdC52YWx1ZXMocHJvamVjdENvbnRyb2xsZXIuZ2V0U3RhdGUoKSkucmVkdWNlKFxuICAgIChhY2MsIHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBhY2MgKyBwcm9qZWN0LnJlbmRlcigpO1xuICAgIH0sXG4gICAgYGAsXG4gICk7XG59XG5cbnByb2plY3RDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoXCJoaVwiKTtcbi8vIHByb2plY3RDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoXCJzZWNvbmRcIik7XG5cbnVwZGF0ZVZpZXcoKTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVmlldztcbiIsImltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCAqIGFzIHByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHByb2plY3QodGl0bGUsIHRvZG9zKSB7XG4gIGZ1bmN0aW9uIGFkZCgpIHtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RpdGxlfS1uYW1lYCkudmFsdWU7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBgJHt0aXRsZX0tZGVzY3JpcHRpb25gLFxuICAgICkudmFsdWU7XG5cbiAgICBwcm9qZWN0Q29udHJvbGxlci5hZGRUb2RvKHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRpdGxlKTtcblxuICAgIHRvZG9OYW1lLnZhbHVlID0gXCJcIjtcbiAgICB0b2RvRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgIDxoMj4ke3RpdGxlfTwvaDI+XG4gICAgICAke3RvZG9zLnJlZHVjZSgoYWNjLCB0b2RvKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KHRvZG8ucmVuZGVyKCkpO1xuICAgICAgfSwgYGApfVxuICAgICAgPGxhYmVsIGZvcj1cIiR7dGl0bGV9LW5hbWVcIj5OQU1FPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cIiR7dGl0bGV9LW5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgPGxhYmVsIGZvcj1cIiR7dGl0bGV9LWRlc2NyaXB0aW9uXCI+REVTQ1JJUFRJT048L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPVwiJHt0aXRsZX0tZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuZXctdG9kb1wiIG9uY2xpY2s9XCJhZGQoKVwiPis8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0b2RvcyxcbiAgICByZW5kZXIsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgdXBkYXRlVmlldyBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5sZXQgc3RhdGUgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIFtuYW1lXTogcHJvamVjdChuYW1lLCBbXSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGV4aXN0aW5nVG9kb3MgPSBzdGF0ZVtwcm9qZWN0TmFtZV0udG9kb3M7XG5cbiAgc3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgW3Byb2plY3ROYW1lXTogcHJvamVjdChwcm9qZWN0TmFtZSwgW1xuICAgICAgLi4uZXhpc3RpbmdUb2RvcyxcbiAgICAgIHRvZG8obmFtZSwgZGVzY3JpcHRpb24pLFxuICAgIF0pLFxuICB9O1xuXG4gIHVwZGF0ZVZpZXcoKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB7IC4uLnN0YXRlIH07XG59XG5cbmZ1bmN0aW9uIGxvZ1N0YXRlKCkge1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGFkZFRvZG8sIGxvZ1N0YXRlLCBnZXRTdGF0ZSB9O1xuIiwiZnVuY3Rpb24gdG9kbyhuYW1lLCBkZXNjcmlwdGlvbikge1xuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8aDM+JHtuYW1lfTwvaDM+XG4gICAgPHA+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICByZW5kZXIsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkLocalStorage.js":
/*!**********************************!*\
  !*** ./src/checkLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkLocalStorage)\n/* harmony export */ });\nfunction storageAvailable(type) {\n  var storage;\n  try {\n      storage = window[type];\n      var x = '__storage_test__';\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n  }\n  catch(e) {\n      return e instanceof DOMException && (\n          // everything except Firefox\n          e.code === 22 ||\n          // Firefox\n          e.code === 1014 ||\n          // test name field too, because code might not be present\n          // everything except Firefox\n          e.name === 'QuotaExceededError' ||\n          // Firefox\n          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n          // acknowledge QuotaExceededError only if there's something already stored\n          (storage && storage.length !== 0);\n  }\n}\nconst checkLocalStorage = () => {\nif (storageAvailable('localStorage')) {\n  alert('Yippee! We can use localStorage awesomeness');\n}\nelse {\n  alert('Too bad, no localStorage for us');\n}\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/checkLocalStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkLocalStorage */ \"./src/checkLocalStorage.js\");\n/* harmony import */ var _tab_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_container */ \"./src/tab_container.js\");\n\n\n\nconst projectIdCounter = 1\n const todos = [\n   {\n     projectId: 1,\n     projectTitle: 'Test project',\n     projectDescription: 'Here is my test project description',\n     projectTask: [\n       {\n         taskId: 1,\n         taskTitle: 'Test task1 for Test project',\n         taskDescription: 'Test task description for test project',\n         TaskDueDate: '1/2/3',\n         TaskPriority: 'medium'\n       },\n       {\n        taskId: 2,\n        taskTitle: 'Test task2 for Test project',\n        taskDescription: 'Test task description for test project',\n        TaskDueDate: '1/2/3',\n        TaskPriority: 'medium'\n      }\n     ]\n   }\n ];\n const mainPage = (container) => {\n  function getProject(projectTitle){\n    let i = 0\n  for (i = 0; i < todos.length; i++) {\n    const project = todos[i]\n    if (projectTitle == project.projectTitle) {\n        return project\n    }\n  }\n  }\n  const showTasks = (project) => {\n      (0,_tab_container__WEBPACK_IMPORTED_MODULE_1__.default)(container).appendChild(project);\n\n  };\n const addTab = (ul, title) => {\n  const li = document.createElement('li');\n  ul.appendChild(li);\n  li.textContent = title;\n  li.addEventListener('click', (event) => showTasks(getProject(event.target.textContent)));\n};\n\nconst addTabNavbar = (tabName) => {\n  const navBar = document.querySelector('nav');\n  const ul = document.createElement('ul');\n  navBar.appendChild(ul);\n  addTab(ul, tabName);\n};\n\nconst populateNavbar = (todos) => {\n  let i = 0\n  for (i = 0; i < todos.length; i++) {\n    const project = todos[i]\n    addTabNavbar(project.projectTitle) \n  }\n}\nconst AddProjectButton = document.querySelector('#create_new_project');\nAddProjectButton.addEventListener('click',function() {\n  const x = document.getElementById('myDIV');\n  if (x.style.display === 'none') {\n    x.style.display = 'block';\n  } else {\n    x.style.display = 'none';\n  }\n});\n\nconst SaveProjectButton = document.querySelector('#save_project');\nSaveProjectButton.addEventListener('click',function() {\n  const title = document.querySelector('#project_title').value;\n  const description = document.querySelector('#project_description').value;\n  if ((title === '') || (description === '')) {\n    alert('Fill in the empty field');\n    return;\n  }\n  const NewProject = new Project(title, description);\n  todos.push(NewProject);\n  document.querySelector('#project_title').value = '';\n  document.querySelector('#project_description').value = '';\n  addTabNavbar(title)\n  const x = document.getElementById('myDIV');\n  x.style.display = 'none'\n\n});\n\n\nfunction Project(title, description){\n  this.projectId = projectIdCounter + 1,\n  this.projectTitle = title,\n  this.projectDescription = description,\n  this.projectTask = []\n}\n\n  const run = () => {\n    // addTabNavbar('Movies');\n    populateNavbar(todos)\n    // createMenuButtons();\n    // createNewProject()\n  };\n  return { run };\n}\n\n// checkLocalStorage()\nmainPage(document.querySelector('#content')).run();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tab_container.js":
/*!******************************!*\
  !*** ./src/tab_container.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabFactory)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nconst tabFactory = (container) => {\n  const addTitle = (projectTitle) => {\n    const h1 = document.createElement('h2');\n    h1.textContent = projectTitle;\n    container.appendChild(h1);\n  };\n\n  const taskId = 1\n  function task(title, description, dueDate, priority) {\n    this.taskId = taskId;\n    this.taskTitle = title;\n    this.taskDescription = description;\n    this.TaskDueDate = dueDate;\n    this.TaskPriority = priority;\n  }\n  const AddTaskButton = document.createElement('button');\n  AddTaskButton.innerHTML = 'Create Task'\n\n  const displayTasks = (content) => {\n    const h4 = document.createElement('h4');\n    h4.textContent = content.taskTitle;\n    container.appendChild(h4);\n  \n    const taskDescription = document.createElement('span');\n    taskDescription.textContent = content.taskDescription;\n    container.appendChild(document.createElement('br'));\n    container.appendChild(taskDescription);\n\n    const TaskPriority = document.createElement('span');\n    TaskPriority.textContent = content.TaskPriority;\n    container.appendChild(document.createElement('br'));\n    container.appendChild(TaskPriority);\n\n    const TaskDueDate = document.createElement('span');\n    TaskDueDate.textContent = content.TaskDueDate;\n    container.appendChild(TaskDueDate);\n  };\n\n  const showCreateTaskButton = () =>{\n    AddTaskButton.addEventListener('click',function() {\n      const x = document.getElementById('myTask');\n        x.style.display = 'block';\n        AddTaskButton.style.display = 'none'\n    });\n    container.appendChild(document.createElement('br'));\n      container.appendChild(document.createElement('br'));\n  \n      const x = document.getElementById('myTask');\n  \n      container.appendChild(AddTaskButton);\n  \n      const closeButton = document.querySelector('#close_task_pane');\n      closeButton.addEventListener('click',function(){\n        x.style.display = 'none';\n        AddTaskButton.style.display = 'block'\n      })  \n  }\n\n    const createTask = (obj) => {\n      const createNewTaskButton = document.querySelector('#add_task_to_project');\n      createNewTaskButton.addEventListener('click', function(){\n            const title = document.getElementById('title').value;\n      const due_date = document.getElementById('due_date').value;\n      const prority = document.getElementById('priority').value;\n      const description = document.getElementById('description').value;\n        if ((title === '') || (due_date === '') || (prority === '') || (description === '')) {\n        alert('Fill in the empty field');\n        return;\n        }\n        const NewTask = new task(title, due_date, prority, description);\n        obj.push(NewTask);\n      // alert('New task added')\n      const x = document.getElementById('myTask');\n      document.getElementById('title').value = '';\n      document.getElementById('due_date').value = '';\n      document.getElementById('priority').value = '';\n      document.getElementById('description').value = '';\n      x.style.display = 'none';\n      alert('New Task created successfully')\n      obj.forEach(element => {\n        displayTasks(element);\n      });\n      AddTaskButton.style.display = 'block'\n      })\n    }\n\n  const appendChild = (obj) => {\n    container.innerHTML = '';\n    showCreateTaskButton()\n    createTask(obj.projectTask)\n    \n    obj.projectTask.forEach(element => {\n      displayTasks(element);\n    });\n\n    \n  };\n  \n\n  return { appendChild };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/tab_container.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  color: white;\\n  background-color: black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/checkLocalStorage.js":
/*!**********************************!*\
  !*** ./src/checkLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkLocalStorage)\n/* harmony export */ });\nfunction storageAvailable(type) {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return e instanceof DOMException && (\n    // everything except Firefox\n      e.code === 22\n          // Firefox\n          || e.code === 1014\n          // test name field too, because code might not be present\n          // everything except Firefox\n          || e.name === 'QuotaExceededError'\n          // Firefox\n          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n          // acknowledge QuotaExceededError only if there's something already stored\n          && (storage && storage.length !== 0);\n  }\n}\nconst checkLocalStorage = () => {\n  if (storageAvailable('localStorage')) {\n    alert('Yippee! We can use localStorage awesomeness');\n  } else {\n    alert('Too bad, no localStorage for us');\n  }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/checkLocalStorage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkLocalStorage */ \"./src/checkLocalStorage.js\");\n/* harmony import */ var _tab_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab_container */ \"./src/tab_container.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\nconst projectIdCounter = 1;\nconst ttodos = [\n  {\n    projectId: 1,\n    projectTitle: 'Test project',\n    projectDescription: 'Here is my test project description',\n    projectTask: [\n      {\n        taskId: 'a1',\n        taskTitle: 'First Project',\n        taskDescription: 'First Project description ',\n        TaskDueDate: '1/1/1',\n        TaskPriority: 'high',\n      },\n      {\n        taskId: 'a2',\n        taskTitle: 'Test task2 for Test project',\n        taskDescription: 'Test task description for test project',\n        TaskDueDate: '1/2/3',\n        TaskPriority: 'medium',\n      },\n    ],\n  },\n];\n\nlocalStorage.setItem(\"todos\", JSON.stringify(ttodos));\n\nconst toddos = JSON.parse(localStorage.getItem(\"todos\") || \"[]\");\n\nconst todos = toddos\n\nconst mainPage = (container) => {\n  function getProject(projectTitle) {\n    let i = 0;\n    let project = '';\n    for (i = 0; i < todos.length; i + 1) {\n      project = todos[i];\n      if (projectTitle === project.projectTitle) {\n        // return project;\n        break;\n      }\n    }\n    return project;\n  }\n  const showTasks = (project) => {\n    (0,_tab_container__WEBPACK_IMPORTED_MODULE_1__.default)(container).appendChild(project);\n  };\n  const addTab = (ul, title) => {\n    const li = document.createElement('li');\n    ul.appendChild(li);\n    li.textContent = title;\n    li.addEventListener('click', (event) => showTasks(getProject(event.target.textContent)));\n  };\n\n  const addTabNavbar = (tabName) => {\n    const navBar = document.querySelector('nav');\n    const ul = document.createElement('ul');\n    navBar.appendChild(ul);\n    addTab(ul, tabName);\n  };\n\n  const populateNavbar = (todos) => {\n    let i = 0;\n    for (i = 0; i < todos.length; i + 1) {\n      const project = todos[i];\n      addTabNavbar(project.projectTitle);\n    }\n  };\n  const AddProjectButton = document.querySelector('#create_new_project');\n  AddProjectButton.addEventListener('click', () => {\n    const x = document.getElementById('myDIV');\n    if (x.style.display === 'none') {\n      x.style.display = 'block';\n    } else {\n      x.style.display = 'none';\n    }\n  });\n\n  const SaveProjectButton = document.querySelector('#save_project');\n  SaveProjectButton.addEventListener('click', () => {\n    const title = document.querySelector('#project_title').value;\n    const description = document.querySelector('#project_description').value;\n    if ((title === '') || (description === '')) {\n      alert('Fill in the empty field');\n      return;\n    }\n    const NewProject = new Project(title, description);\n    todos.push(NewProject);\n    document.querySelector('#project_title').value = '';\n    document.querySelector('#project_description').value = '';\n    addTabNavbar(title);\n    const x = document.getElementById('myDIV');\n    x.style.display = 'none';\n  });\n\n\n  function Project(title, description) {\n    this.projectId = (projectIdCounter + 1);\n    this.projectTitle = title;\n    this.projectDescription = description;\n    this.projectTask = [];\n  }\n\n  const run = () => {\n    populateNavbar(todos);\n  };\n  return { run };\n};\n\nmainPage(document.querySelector('#content')).run();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tab_container.js":
/*!******************************!*\
  !*** ./src/tab_container.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabFactory)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst tabFactory = (container) => {\n  const addTitle = (projectTitle) => {\n    const h1 = document.createElement('h2');\n    h1.textContent = projectTitle;\n    container.appendChild(h1);\n  };\n\n  const taskId = 0;\n  function Task(title, description, dueDate, priority) {\n    this.taskId = taskId + 1;\n    this.taskTitle = title;\n    this.taskDescription = description;\n    this.TaskDueDate = dueDate;\n    this.TaskPriority = priority;\n  }\n  const AddTaskButton = document.createElement('button');\n  AddTaskButton.innerHTML = 'Create Task';\n\n  const displayTasks = (project, content) => {\n    const h4 = document.createElement('h4');\n    h4.textContent = content.taskTitle;\n    container.appendChild(h4);\n\n    const taskDescription = document.createElement('span');\n    taskDescription.textContent = content.taskDescription;\n    container.appendChild(document.createElement('br'));\n    container.appendChild(taskDescription);\n\n    const TaskPriority = document.createElement('span');\n    TaskPriority.textContent = content.TaskPriority;\n    container.appendChild(document.createElement('br'));\n    container.appendChild(TaskPriority);\n\n    const TaskDueDate = document.createElement('span');\n    TaskDueDate.textContent = content.TaskDueDate;\n    container.appendChild(TaskDueDate);\n\n    container.appendChild(document.createElement('br'));\n    container.appendChild(document.createElement('br'));\n    const EditButton = document.createElement('button');\n    EditButton.innerHTML = 'Edit Task';\n    container.appendChild(EditButton);\n    EditButton.addEventListener('click', () => {\n      const editedTask = EditTask(project, content.taskId);\n    });\n\n    const DeleteButton = document.createElement('button');\n    DeleteButton.innerHTML = 'Delete Task';\n    container.appendChild(DeleteButton);\n    DeleteButton.addEventListener('click', () => {\n      const deletedTask = DeleteTask(project, content.taskId);\n      showTaskInProject(deletedTask);\n    });\n  };\n\n  const EditTask = (project, taskID) => {\n    const form = document.createElement('p');\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x = document.createElement('LABEL');\n    const t = document.createTextNode('Task Title: ');\n    x.appendChild(t);\n    form.append(x);\n    const title = document.createElement('INPUT');\n    title.setAttribute('type', 'text');\n    form.appendChild(title);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x1 = document.createElement('LABEL');\n    const t1 = document.createTextNode('Description: ');\n    x1.appendChild(t1);\n    form.append(x1);\n    const description = document.createElement('INPUT');\n    description.setAttribute('type', 'text');\n    form.appendChild(description);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x2 = document.createElement('LABEL');\n    const t2 = document.createTextNode('Due Date: ');\n    x2.appendChild(t2);\n    form.append(x2);\n    const dueDate = document.createElement('INPUT');\n    dueDate.setAttribute('type', 'text');\n    form.appendChild(dueDate);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x3 = document.createElement('LABEL');\n    const t3 = document.createTextNode('Priority ');\n    x3.appendChild(t3);\n    form.append(x3);\n    const priority = document.createElement('INPUT');\n    priority.setAttribute('type', 'text');\n    form.appendChild(priority);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n\n    const SaveTaskButton = document.createElement('button');\n    SaveTaskButton.innerHTML = 'Save Task';\n    form.appendChild(SaveTaskButton);\n    container.appendChild(form);\n    const tasks = project.projectTask;\n    let editedTask = '';\n    let task = '';\n    let taskToBeEdited = '';\n    for (let i = 0; i < tasks.length; i + 1) {\n      task = tasks[i];\n      if (taskID === task.taskId) {\n        taskToBeEdited = tasks[i];\n        title.value = task.taskTitle;\n        description.value = task.taskDescription;\n        dueDate.value = task.TaskDueDate;\n        priority.value = task.TaskPriority;\n        SaveTaskButton.addEventListener('click', () => {\n          editedTask = {\n            taskId: taskToBeEdited.taskId,\n            taskTitle: title.value,\n            taskDescription: description.value,\n            TaskDueDate: dueDate.value,\n            TaskPriority: priority.value,\n          };\n          taskToBeEdited = editedTask;\n          project.projectTask[i] = editedTask;\n          showTaskInProject(project);\n        });\n      }\n    }\n  };\n\n  const DeleteTask = (project, taskID) => {\n    const tasks = project.projectTask;\n    for (let i = 0; i < tasks.length; i + 1) {\n      const task = tasks[i];\n      if (taskID === task.taskId) {\n        tasks.splice(i, 1);\n        break;\n      }\n    }\n    return project;\n  };\n\n  const showCreateTaskButton = (obj) => {\n    AddTaskButton.addEventListener('click', () => {\n      createTaskForm(obj);\n      AddTaskButton.style.display = 'none';\n    });\n\n    container.appendChild(document.createElement('br'));\n    container.appendChild(document.createElement('br'));\n    container.appendChild(AddTaskButton);\n  };\n\n  const createTaskForm = (obj) => {\n    const previousForm = container.querySelector('form');\n    if (previousForm) previousForm.remove();\n    const form = document.createElement('form');\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x = document.createElement('LABEL');\n    const t = document.createTextNode('Task Title: ');\n    x.setAttribute('for', 'male');\n    x.appendChild(t);\n    form.append(x);\n    const title = document.createElement('INPUT');\n    title.setAttribute('type', 'text');\n    form.appendChild(title);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x1 = document.createElement('LABEL');\n    const t1 = document.createTextNode('Description: ');\n    x1.appendChild(t1);\n    form.append(x1);\n    const description = document.createElement('INPUT');\n    description.setAttribute('type', 'text');\n    form.appendChild(description);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x2 = document.createElement('LABEL');\n    const t2 = document.createTextNode('Due Date: ');\n    x2.appendChild(t2);\n    form.append(x2);\n    const dueDate = document.createElement('INPUT');\n    dueDate.setAttribute('type', 'text');\n    form.appendChild(dueDate);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n    const x3 = document.createElement('LABEL');\n    const t3 = document.createTextNode('Priority ');\n    x3.appendChild(t3);\n    form.append(x3);\n    const priority = document.createElement('INPUT');\n    priority.setAttribute('type', 'text');\n    form.appendChild(priority);\n\n    form.appendChild(document.createElement('br'));\n    form.appendChild(document.createElement('br'));\n\n    const SaveTaskButton = document.createElement('button');\n    SaveTaskButton.innerHTML = 'Save Task';\n    SaveTaskButton.setAttribute('type', 'submit');\n    form.addEventListener('submit', () => {\n      if ((title.value === '') || (description.value === '') || (dueDate.value === '') || (priority.value === '')) {\n        alert('All fields are neccessary');\n        createTaskForm(obj);\n      } else {\n        const newTask = new Task(title.value, description.value, dueDate.value, priority.value);\n        obj.push(newTask);\n        alert('New task added');\n        showTaskInProject({ projectTask: obj });\n        AddTaskButton.style.display = 'block';\n      }\n    });\n\n    form.appendChild(SaveTaskButton);\n    container.appendChild(form);\n  };\n\n  const showTaskInProject = (project) => {\n    container.innerHTML = '';\n    showCreateTaskButton(project.projectTask);\n    project.projectTask.forEach(element => {\n      displayTasks(project, element);\n    });\n  };\n\n  const appendChild = (obj) => {\n    showTaskInProject(obj);\n  };\n\n  return { appendChild };\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/tab_container.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
import * as view from "./view.js";
import * as model from "./projectModel.js";

function initialize() {
  model.createProject("Test");
  view.initialize();
  updateView();
}

function createProject(name) {
  model.createProject(name);
  updateView();
}

function addTodo(name, description, projectName) {
  model.addTodo(name, description, projectName);
  updateView();
}

function removeTodo(name, projectName) {
  model.removeTodo(name, projectName);
  updateView();
}

function increaseTodoPriority(name, projectName) {
  model.increaseTodoPriority(name, projectName);
  updateView();
}

function decreaseTodoPriority(name, projectName) {
  model.decreaseTodoPriority(name, projectName);
  updateView();
}

function updateView() {
  let state = model.getState();

  view.update(state);
}

export {
  initialize,
  createProject,
  addTodo,
  removeTodo,
  increaseTodoPriority,
  decreaseTodoPriority,
};

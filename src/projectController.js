import todo from "./todo.js";
import project from "./project.js";
import * as view from "./view.js";

let state = {};

function initialize() {
  createProject("hi");
  view.initialize();
  view.update(state);
}

function createProject(name) {
  state = {
    ...state,
    [name]: project(name, []),
  };
}

function addTodo(name, description, projectName) {
  const existingTodos = state[projectName].todos;

  state = {
    ...state,
    [projectName]: project(projectName, [
      ...existingTodos,
      todo(name, description),
    ]),
  };

  view.update(state);
}

function getState() {
  return { ...state };
}

function logState() {
  console.log(state);
}

export { initialize, createProject, addTodo, logState, getState };

import todo from "./todo.js";
import project from "./project.js";

let state = {};

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
}

function getState() {
  return state;
}

function logState() {
  console.log(state);
}

export { createProject, addTodo, logState, getState };

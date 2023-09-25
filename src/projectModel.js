import todo from "./Todo.js";
import project from "./Project.js";

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
      Todo(name, description),
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

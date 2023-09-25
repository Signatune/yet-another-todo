import Todo from "./Todo.js";
import Project from "./Project.js";

let state = {};

function createProject(name) {
  state = {
    ...state,
    [name]: Project(name, []),
  };
}

function addTodo(name, description, projectName) {
  const existingTodos = state[projectName].todos;

  state = {
    ...state,
    [projectName]: Project(projectName, [
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

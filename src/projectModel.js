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
      Todo(name, description, projectName),
    ]),
  };
}

function removeTodo(name, projectName) {
  const remainingTodos = state[projectName].todos.filter(
    (todo) => todo.name != name,
  );

  state = {
    ...state,
    [projectName]: Project(projectName, remainingTodos),
  };
}

function getState() {
  return state;
}

function logState() {
  console.log(state);
}

export { createProject, addTodo, removeTodo, logState, getState };

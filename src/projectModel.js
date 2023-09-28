import Todo from "./Todo.js";
import Project from "./Project.js";

let state = {};

function createProject(name) {
  state = {
    ...state,
    [name]: Project(name, []),
  };
}

function addTodo(name, description, dueDate, expanded, projectName) {
  const existingTodos = state[projectName].todos;

  state = {
    ...state,
    [projectName]: Project(projectName, [
      ...existingTodos,
      Todo(name, description, dueDate, expanded, projectName),
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

function increaseTodoPriority(name, projectName) {
  const todoIndex = findTodoIndex(name, projectName);

  // This condition means both that the todo exists and that it is not
  // the highest todo in the list
  if (todoIndex > 0) {
    let todo = state[projectName].todos[todoIndex];
    let higherTodo = state[projectName].todos[todoIndex - 1];
    state[projectName].todos[todoIndex] = higherTodo;
    state[projectName].todos[todoIndex - 1] = todo;
  }
}

function decreaseTodoPriority(name, projectName) {
  const todoIndex = findTodoIndex(name, projectName);

  if (todoIndex != -1 && todoIndex < state[projectName].todos.length) {
    let todo = state[projectName].todos[todoIndex];

    state[projectName].todos[todoIndex] =
      state[projectName].todos[todoIndex + 1];
    state[projectName].todos[todoIndex + 1] = todo;
  }
}

function toggleTodoExpand(name, projectName) {
  const todoIndex = findTodoIndex(name, projectName);
  const todo = state[projectName].todos[todoIndex];

  state[projectName].todos[todoIndex] = Todo(
    todo.name,
    todo.description,
    todo.dueDate,
    !todo.expanded,
    projectName,
  );
}

function getState() {
  return state;
}

function logState() {
  console.log(state);
}

function findTodoIndex(name, projectName) {
  return state[projectName].todos.findIndex((todo) => todo.name == name);
}

export {
  createProject,
  addTodo,
  removeTodo,
  increaseTodoPriority,
  decreaseTodoPriority,
  toggleTodoExpand,
  logState,
  getState,
};

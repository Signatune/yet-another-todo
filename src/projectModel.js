import Todo from "./Todo.js";
import Project from "./Project.js";

let state = initializeState();

function initializeState() {
  if (localStorage == 0) {
    return {};
  } else {
    let reloadedState = {};

    const savedProjects = getLocalState();

    for (const [projectName, content] of Object.entries(savedProjects)) {
      reloadedState = createProjectOnState(reloadedState, projectName);

      if (content.todos.length > 0) {
        for (const todo of content.todos) {
          reloadedState = addTodoOnState(
            reloadedState,
            todo.name,
            todo.description,
            todo.dueDate,
            todo.expanded,
            projectName,
          );
        }
      }
    }

    return reloadedState;
  }
}

function updateLocalState() {
  localStorage.setItem("projects", JSON.stringify(state));
}

function getLocalState() {
  return JSON.parse(localStorage.getItem("projects"));
}

function createProject(name) {
  state = createProjectOnState(state, name);

  updateLocalState();
}

function createProjectOnState(existingState, name) {
  return {
    ...existingState,
    [name]: Project(name, []),
  };
}

function addTodo(name, description, dueDate, expanded, projectName) {
  state = addTodoOnState(
    state,
    name,
    description,
    dueDate,
    expanded,
    projectName,
  );

  updateLocalState();
}

function addTodoOnState(
  existingState,
  name,
  description,
  dueDate,
  expanded,
  projectName,
) {
  const existingTodos = existingState[projectName].todos;

  return {
    ...existingState,
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

  updateLocalState();
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

  updateLocalState();
}

function decreaseTodoPriority(name, projectName) {
  const todoIndex = findTodoIndex(name, projectName);

  if (todoIndex != -1 && todoIndex < state[projectName].todos.length) {
    let todo = state[projectName].todos[todoIndex];

    state[projectName].todos[todoIndex] =
      state[projectName].todos[todoIndex + 1];
    state[projectName].todos[todoIndex + 1] = todo;
  }

  updateLocalState();
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

  updateLocalState();
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
  initializeState,
  createProject,
  addTodo,
  removeTodo,
  increaseTodoPriority,
  decreaseTodoPriority,
  toggleTodoExpand,
  logState,
  getState,
};

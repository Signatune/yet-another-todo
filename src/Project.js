import Todo from "./Todo.js";
import * as projectController from "./projectController.js";

function project(title, todos) {
  function newTodo() {
    const todoName = document.getElementById(`${title}-name`);
    const todoDescription = document.getElementById(`${title}-description`);

    projectController.addTodo(todoName.value, todoDescription.value, title);

    todoName.value = "";
    todoDescription.value = "";
  }

  window.newTodo = newTodo;

  function render() {
    return `
    <div class="project">
      <h2>${title}</h2>
      ${todos.reduce((acc, todo) => {
        return acc.concat(todo.render().innerHTML);
      }, ``)}
      <label for="${title}-name">NAME</label>
      <input id="${title}-name" name="name" type="text"/>
      <label for="${title}-description">DESCRIPTION</label>
      <input id="${title}-description" name="description" type="text"/>
      <button class="new-todo" onclick="newTodo()">+</button>
    </div>
    `;
  }

  return {
    title,
    todos,
    render,
  };
}

export default project;

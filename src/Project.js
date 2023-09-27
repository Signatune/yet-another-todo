import Todo from "./Todo.js";
import * as projectController from "./projectController.js";

function project(title, todos) {
  function newTodo() {
    const todoName = document.getElementById(`${title}-name`);
    const todoDescription = document.getElementById(`${title}-description`);
    const todoDueDate = document.getElementById(`${title}-due-date`);

    projectController.addTodo(
      todoName.value,
      todoDescription.value,
      new Date(todoDueDate.value),
      title,
    );

    todoName.value = "";
    todoDescription.value = "";
    todoDueDate.value = "";
  }

  function render() {
    let projectEl = document.createElement("div");
    projectEl.classList.add("project");

    projectEl.innerHTML = `
      <h2>${title}</h2>
      <div class="todos"></div>
      <label for="${title}-name">NAME</label>
      <input id="${title}-name" name="name" type="text"/>
      <label for="${title}-description">DESCRIPTION</label>
      <input id="${title}-description" name="description" type="text"/>
      <label for="${title}-due-date">Due Date</label>
      <input id="${title}-due-date" type="date">
      <button id="${title}-add-todo">+</button>
    `;

    projectEl.querySelector(".todos").replaceChildren(
      ...todos.map((todo) => {
        return todo.render();
      }),
    );

    projectEl
      .querySelector(`#${title}-add-todo`)
      .addEventListener("click", newTodo);

    return projectEl;
  }

  return {
    title,
    todos,
    render,
  };
}

export default project;

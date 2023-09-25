import * as projectController from "./projectController.js";

function Todo(name, description, projectName) {
  function remove() {
    projectController.removeTodo(name, projectName);
    console.log("remove");
  }

  function render() {
    let todoEl = document.createElement("li");

    todoEl.innerHTML = `
      <h3>${name}</h3>
      <p>${description}</p>
      <button class="remove">X</button>
    `;

    todoEl.querySelector("button.remove").addEventListener("click", remove);

    return todoEl;
  }

  return {
    name,
    description,
    render,
  };
}

export default Todo;

import * as projectController from "./projectController.js";

function Todo(name, description, projectName) {
  function remove() {
    projectController.removeTodo(name, projectName);
  }

  function render() {
    let todoEl = document.createElement("li");

    todoEl.innerHTML = `
      <h3>${name}</h3>
      <p>${description}</p>
      <button class="remove">X</button>
      <button class="increase">▲</button>
      <button class="decrease">▼</button>
    `;

    todoEl.querySelector("button.remove").addEventListener("click", remove);
    todoEl.querySelector("button.increase").addEventListener("click", () => {
      projectController.increaseTodoPriority(name, projectName);
    });
    todoEl.querySelector("button.decrease").addEventListener("click", () => {
      projectController.decreaseTodoPriority(name, projectName);
    });

    return todoEl;
  }

  return {
    name,
    description,
    render,
  };
}

export default Todo;

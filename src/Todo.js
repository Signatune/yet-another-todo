import * as projectController from "./projectController.js";
import { format } from "date-fns";

function Todo(name, description, dueDate, expanded, projectName) {
  function remove() {
    projectController.removeTodo(name, projectName);
  }

  function render() {
    let todoEl = document.createElement("li");
    let formattedDueDate = format(dueDate, "MM/dd/yyyy");

    todoEl.innerHTML = `
      <h3>${name}</h3>
      <button class="expand">${expanded ? "Collapse" : "Expand"}</button>
      ${expanded ? `<p>${description}</p>` : ``}
      <p>Due date: ${formattedDueDate}</p>
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
    todoEl.querySelector("button.expand").addEventListener("click", () => {
      projectController.expandTodo(name, projectName);
    });

    return todoEl;
  }

  return {
    name,
    description,
    dueDate,
    render,
  };
}

export default Todo;

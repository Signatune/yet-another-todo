import * as projectController from "./projectController.js";

const title = document.createElement("h1");
title.textContent = "Yet Another Todo";
document.body.appendChild(title);
const projects = document.createElement("div");
projects.classList.add("projects");
document.body.appendChild(projects);

projectController.createProject("hi");
projectController.createProject("second");

projectController.addTodo("first", "lorem ipsum dolor sit amet", "hi");

function updateView() {
  projects.innerHTML = Object.values(projectController.getState()).reduce(
    (acc, project) => {
      return acc + project.render();
    },
    ``,
  );
}

updateView();

let projects;

function initialize() {
  const title = document.createElement("h1");
  title.textContent = "Yet Another Todo";
  document.body.appendChild(title);
  projects = document.createElement("div");
  projects.classList.add("projects");
  document.body.appendChild(projects);
}

function update(state) {
  projects.innerHTML = Object.values(state).reduce((acc, project) => {
    return acc + project.render();
  }, ``);
}

export { update, initialize };

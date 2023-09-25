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
  projects.replaceChildren();

  Object.values(state).forEach((project) => {
    projects.appendChild(project.render());
  });
}

export { update, initialize };

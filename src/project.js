function project(title, todos) {
  function render() {
    return `
    <div class="project">
      <h2>${title}</h2>
      ${todos.reduce((acc, todo) => {
        return acc.concat(todo.render());
      }, ``)}
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

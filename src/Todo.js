function Todo(name, description) {
  function render() {
    let todoEl = document.createElement("li");
    let nameEl = document.createElement("h3");
    let descriptionEl = document.createElement("p");

    nameEl.textContent = name;
    descriptionEl.textContent = description;

    todoEl.replaceChildren(nameEl, descriptionEl);

    return todo;
  }

  return {
    name,
    description,
    render,
  };
}

export default Todo;

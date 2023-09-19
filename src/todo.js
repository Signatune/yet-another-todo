function todo(name, description) {
  function render() {
    return `
    <h3>${name}</h3>
    <p>${description}</p>
    `;
  }

  return {
    name,
    description,
    render,
  };
}

export default todo;

function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementbyId('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementbyId('newToDoText';)
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementbyId('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      newLi.appendChild(checkbox);
      toDoList.appendChild(newLi);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};

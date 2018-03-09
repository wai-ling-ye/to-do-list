function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementbyId('addToDoForm');
  let delButton;

  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementbyId('newToDoText';)
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id = id+1;

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementbyId('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const delButton = document.createElement('button')

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      delButton.type = "button";
      delButton.class = "delButton";

      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);
      toDoList.appendChild(newLi);

      delButton.onclick = deleteEvent(toDo);
    });
  }

  function deleteEvent(toDo) {
    let toDelete = toDos.filter(toDo => toDo.id);

    renderTheUI();
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

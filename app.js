function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = '';
  });

  deleteToDo.addEventListener('submit', () => {
    event.preventDefault();

    for (i=toDoList.children.length-1; i>=0; i--) {
      if (toDoList.children[i].lastChild.checked == true) {
        toDoList.removeChild(toDoList.children[i])
      }
    }

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

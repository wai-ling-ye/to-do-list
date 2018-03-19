let todos = [];
const ADD_TODO_FORM = document.getElementById('addToDoForm');
let delButton;

let id = 0;

function onReady() {
  function createNewToDo() {
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TODO_TEXT.value) {return;}

    todos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });

    id = id+1;

    NEW_TODO_TEXT.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    todos.forEach(function(toDo) {
      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      const DEL_BUTTON = document.createElement('button')

      CHECKBOX.type = "checkbox";

      NEW_LI.textContent = toDo.title;
      NEW_LI.setAttribute('data-item-number', toDo.id);

      DEL_BUTTON.type = "button";
      DEL_BUTTON.classList = "delButton mdl-button mdl-js-button mdl-button--raised";
      DEL_BUTTON.textContent = "Delete";

      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(DEL_BUTTON);
      toDoList.appendChild(NEW_LI);

      DEL_BUTTON.addEventListener('click', function(){
        var itemNumber = parseInt(this.parentElement.getAttribute('data-item-number'));
        deleteEvent(itemNumber);
      });
    });
  }

  function deleteEvent(number) {
    // look at our const todos
    // we want to identify which todo needs to be removed
    todos = todos.filter(function(item){
      return item.id !== number;
    })

    renderTheUI();
  }



  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();

    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};

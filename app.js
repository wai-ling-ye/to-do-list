function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let primaryContent = document.createElement('span');

    // The following lets are for the checkbox html
    let secondaryContent = document.createElement('span');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');

    newLi.className = "mdl-list__item";
    // Primary Content - to-do text
    primaryContent.className = "mdl-list__item-primary-content";
    primaryContent.textContent = title;

    // Secondary Content - checkbox
    secondaryContent.className = "mdl-list__item-secondary-action";

    label.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";
    label.htmlFor = "list-checkbox";

    checkbox.type = "checkbox";
    checkbox.className = "mdl-checkbox__input";
    checkbox.id = "chkbox";

    // Upgrade all MDL affected elements
    componentHandler.upgradeElement(primaryContent);
    componentHandler.upgradeElement(checkbox);

    // Creating the checkbox space
    label.appendChild(checkbox);
    componentHandler.upgradeElement(label);
    secondaryContent.appendChild(label);
    componentHandler.upgradeElement(secondaryContent);

    // Creating the list item
    newLi.appendChild(primaryContent);
    newLi.appendChild(secondaryContent);
    componentHandler.upgradeElement(newLi);

    // Adding the new item to the list
    toDoList.appendChild(newLi);

    newToDoText.value = '';
  });

  deleteToDo.addEventListener('submit', () => {
    event.preventDefault();

    for (i=toDoList.children.length-1; i>=0; i--) {
      if (toDoList.children[i].lastChild.firstChild.firstChild.checked == true) {
        toDoList.removeChild(toDoList.children[i])
      }
    }

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

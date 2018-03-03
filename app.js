function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const pasta = document.getElementById('pasta');

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

    console.log(toDoList.childNodes.length);
  });

//   deleteToDo.addEventListener('button', () => {
//     event.preventDefault();
//
//     for (i=toDoList.childNodes.length-1; i>=0; i--) {
//       if (toDoList.childNodes[i][1].checked = true) {
//         toDoList.removeChild(toDoList.childNodes[i])
//       }
//     }
//   })
// }

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

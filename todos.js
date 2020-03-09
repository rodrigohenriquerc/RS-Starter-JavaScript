var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var todos = [
//   'Estudar Javascript',
//   'Estudar ES6',
//   'Estudar GraphQL'
// ];

var todos = JSON.parse(localStorage.getItem('todos_list' || []));
console.log('todos: ', todos);

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');

    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var position = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')')
    var linkText = document.createTextNode(' Excluir');
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

if (todos != undefined) {
  renderTodos();
}

function addTodo() {
  var newTodo = inputElement.value;
  todos.push(newTodo);
  inputElement.value = '';
  renderTodos();
  saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('todos_list', JSON.stringify(todos));
}
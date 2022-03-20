const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};
const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== li.id);
  saveTodos();
};
const paintTodo = (todo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "🍓";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  li.id = todo.id;
  span.innerText = todo.text;
  todoList.appendChild(li);
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { id: Date.now(), text: newTodo };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener("submit", handleTodoSubmit);

const getTodos = localStorage.getItem(TODOS_KEY);

if (getTodos) {
  const parseTodos = JSON.parse(getTodos);
  todos = parseTodos;
  parseTodos.forEach(paintTodo);
}

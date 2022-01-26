const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //button의 부모에 접근가능하다
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //span안의 텍스트가 newTodo는 텍스트에 입력한 value값
  const button = document.createElement("button");
  button.innerText = "❎";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); //li안에 span을 넣는다
  li.appendChild(button);
  toDoList.appendChild(li); //li를 toDoList에 추가하는 것
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //## input의 현재 value를 새로운 변수를 복사하는 것
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string을 array로 바꿔준다
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // forEach는 array의 각 item에 대해 function을 실행하게 해준다
}


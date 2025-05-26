// 변수 선언
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector(".todo-list");
const removeAll = document.querySelector(".remove-all button");

// localStorage에 저장할 키 값
const TODOS_KEY = "toDo";

// 할 일을 저장할 배열
let toDo = [];
let id = 0;

// localStorage.clear();

// localStorage에 데이터 저장하는 함수
function saveTodo(e) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDo));
}

function deleteTodo(e) {
  const delLi = e.target.parentElement.parentElement;
  console.log(delLi);
  delLi.remove();
  toDo = toDo.filter((todo) => todo.id !== parseInt(delLi.id));
  saveTodo();
}

function lineCheck(e) {
  const li = e.target.closest("li");
  const id = parseInt(li.id);

  li.classList.toggle("lineThrough");

  // check 값을 true/false 토글 후 저장
  toDo = toDo.map((todo) => {
    if (todo.id === id) {
      return { ...todo, check: !todo.check };
    }
    return todo;
  });
  saveTodo();
}

function removeAllList(e) {
  localStorage.clear();
  todoList.innerHTML = "";
}

// 할일 목록 화면에 보여주기
function showTodo(newTodo) {
  // li 목록 만들기
  const todoLi = document.createElement("li");
  todoLi.id = newTodo.id;

  const todoSpan = document.createElement("span");
  todoSpan.innerHTML = newTodo.text;

  const todoIcon = document.createElement("div");
  const todoCheck = document.createElement("button");
  const todoRemove = document.createElement("button");
  todoIcon.appendChild(todoCheck);
  todoIcon.appendChild(todoRemove);

  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoIcon);

  todoList.appendChild(todoLi);

  // 닫기 버튼을 클릭하면 목록에서 지워주기
  // localStorage 변경
  todoRemove.addEventListener("click", deleteTodo);
  todoCheck.addEventListener("click", lineCheck);
  removeAll.addEventListener("click", removeAllList);
}

// 폼의 input에 글자를 입력하고, 전송을 하면 localStorage에 데이터 저장
// 입력한 글자, id, check 상태를 체크할 변수
todoForm.addEventListener("submit", (e) => {
  // 기본 이벤트 막아 주기
  e.preventDefault();
  const newTodo = todoInput.value;
  console.log(newTodo);
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: ++id,
    check: false,
  };

  toDo.push(newTodoObj);
  saveTodo();
  showTodo(newTodoObj);
  console.log(toDo);
});

const saveTodos = localStorage.getItem(TODOS_KEY);
if (saveTodos !== null) {
  const parsedTodos = JSON.parse(saveTodos);
  toDo = parsedTodos;
  parsedTodos.forEach(showTodo);
}

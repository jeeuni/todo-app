const todoInput = document.querySelector(".todo-input");
const todoinputbt = document.querySelector(".todo-input-button");
const ul = document.querySelector(".ul");

todoinputbt.addEventListener("click", function () {
  const todo = todoInput.value;

  if (todo != "") {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");

    input.type = "checkbox";
    span.textContent = todo;

    ul.appendChild(li);
    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);

    li.classList.add("todo-item");
    ul.classList.add("ul");
  } else {
    alert("할 일을 입력해주세요.");
  }
});

const toDoList = [];

const addTodo = () => {
  const input = document.getElementById("input");

  const value = input.value;

  if (!value) return

  const item = {
    task: value,

    status: "in progress",

    no: "",
  };

  toDoList.push(item);


  renderTodoTable();
};

const renderTodoTable = () => {
  const table = document.getElementById("table");

  if (table) {

    table.innerHTML =
      "<tr><th>No</th><th>Task</th><th>Status</th><th>Actions</th></tr>";

    toDoList.forEach((item, index) => {
      const row = table.insertRow(-1); 

      const cellNo = row.insertCell(0);

      const cellTask = row.insertCell(1);

      const cellStatus = row.insertCell(2);

      const cellActions = row.insertCell(3);


      cellNo.innerHTML = index + 1; 

      cellTask.innerHTML = item.task;

      cellStatus.innerHTML = item.status;

      cellStatus.innerHTML = item.status;

      if (item.status === "complete") {
        cellStatus.style.color = "rgb(28, 210, 28)";
      }

      cellActions.innerHTML = `

                <button onclick="deleteTodo(${index})" class="todo-table__td__delete-btn">Delete</button>

                <button onclick="completeTodo(${index})" class="todo-table__td__save-btn">Complete</button>

            `;
    });
  }
};

const deleteTodo = (index) => {

  toDoList.splice(index, 1);

  renderTodoTable();
};

const completeTodo = (index) => {

  toDoList[index].status = "complete";

  renderTodoTable();
};

const button = document.getElementById("btn");

button.addEventListener("click", () => {
 const table = document.getElementById('table'); 



  const newTable = document.createElement("table");

  newTable.classList.add("todo-table");

  newTable.setAttribute("id", "table");

  newTable.innerHTML =
    "<tr><th>No</th><th>Task</th><th>Status</th><th>Actions</th></tr>";

  const section = document.getElementById("section");

  section.innerHTML = ""; 

  section.appendChild(newTable);

  renderTodoTable();
});

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

loadTasks();

function addTask(){

    if(taskInput.value.trim()===""){
        alert("Please enter a task");
        return;
    }

    createTask(taskInput.value);

    taskInput.value="";

    saveTasks();
    updateCounter();
}

function createTask(text){

    const li=document.createElement("li");

    li.innerHTML=`

        <span class="task-text">${text}</span>

        <div class="actions">

        <button class="complete-btn"
        onclick="completeTask(this)">
        <i class="fa-solid fa-check"></i>
        </button>

        <button class="edit-btn"
        onclick="editTask(this)">
        <i class="fa-solid fa-pen"></i>
        </button>

        <button class="delete-btn"
        onclick="deleteTask(this)">
        <i class="fa-solid fa-trash"></i>
        </button>

        </div>
    `;

    taskList.appendChild(li);
}

function completeTask(btn){

    btn.parentElement.previousElementSibling
    .classList.toggle("completed");

    saveTasks();
}

function editTask(btn){

    let task=
    btn.parentElement.previousElementSibling;

    let newTask=
    prompt("Edit Task",task.innerText);

    if(newTask){
        task.innerText=newTask;
        saveTasks();
    }
}

function deleteTask(btn){

    btn.parentElement.parentElement.remove();

    saveTasks();
    updateCounter();
}

function saveTasks(){

    localStorage.setItem(
    "tasks",
    taskList.innerHTML
    );
}

function loadTasks(){

    taskList.innerHTML=
    localStorage.getItem("tasks") || "";

    updateCounter();
}

function updateCounter(){

    totalTasks.innerText=
    `Total Tasks: ${
    taskList.children.length
    }`;
}
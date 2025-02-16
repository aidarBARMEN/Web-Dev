document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const clearTasksBtn = document.getElementById("clearTasksBtn");
    const taskList = document.getElementById("taskList");
    const doneList = document.getElementById("doneList");

    function createTaskElement(taskText, isCompleted = false) {
        const li = document.createElement("li");
        li.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isCompleted;

        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑";
        deleteBtn.classList.add("delete-btn");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                moveToDone(li, taskText);
            } else {
                moveToToDo(li, taskText);
            }
        });

        deleteBtn.addEventListener("click", function () {
            removeTask(li, taskText, checkbox.checked);
        });

        li.append(checkbox, span, deleteBtn);
        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        saveTask(taskText, false);
        taskInput.value = "";
    }

    function moveToDone(li, taskText) {
        li.remove();
        const newTask = createTaskElement(taskText, true);
        doneList.appendChild(newTask);
        updateTaskStatus(taskText, true);
    }

    function moveToToDo(li, taskText) {
        li.remove();
        const newTask = createTaskElement(taskText, false);
        taskList.appendChild(newTask);
        updateTaskStatus(taskText, false);
    }

    function removeTask(li, taskText, isCompleted) {
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            deleteTask(taskText, isCompleted);
        }, 300);
    }

    function saveTask(taskText, isCompleted) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ text: taskText, completed: isCompleted });
        localStorage.setItem("tasks", JSON.stringify(tasks)); ////s
    }

    function updateTaskStatus(taskText, isCompleted) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.map(task =>
            task.text === taskText ? { ...task, completed: isCompleted } : task
        );
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function deleteTask(taskText, isCompleted) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task.text !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(({ text, completed }) => {
            const taskElement = createTaskElement(text, completed);
            completed ? doneList.appendChild(taskElement) : taskList.appendChild(taskElement);
        });
    }

    clearTasksBtn.addEventListener("click", function () {
        taskList.innerHTML = "";
        doneList.innerHTML = "";
        localStorage.removeItem("tasks");
    });

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            li.classList.toggle("completed", checkbox.checked);
        });

        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

    
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});



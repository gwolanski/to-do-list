let taskList = [];
let taskForm = document.getElementById("task-form");

export default function submitTask() {
    let title = document.getElementById("title-input").value;
    let description = document.getElementById("description-input").value;
    let dueDate= document.getElementById("date-input").value;
    let priority = document.getElementById("priority-input").value;
    let projectSelection = document.getElementById("project-selection").value;

    let task = new Task(title, description, dueDate, priority, projectSelection);
    taskList.push(task);

    displayTasks();

    closeTaskForm();
    taskForm.reset();
}

class Task {
    constructor(title, description, dueDate, priority, projectSelection) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectSelection = projectSelection;
    }
}

function displayTasks() {
    let tasks = document.getElementById("tasks");
    tasks.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        let taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                //add code here to change class for styling - grey text, strikethrough
            } else {
                //add code here to change class back to normal
            }
        })

        let taskDetails = document.createElement('div');
        taskDetails.classList.add("task-details");
        taskDetails.classList.add("expandable");


        let taskTitle = document.createElement("div");
        taskTitle.classList.add("task-title");
        taskTitle.innerHTML = taskList[i].title;

        let taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.innerHTML = `<b>Description:</b> ${taskList[i].description}`;

        let taskDueDate = document.createElement("div");
        taskDueDate.classList.add("task-due-date");
        taskDueDate.innerHTML = taskList[i].dueDate;

        let taskProject = document.createElement("div");
        taskProject.classList.add("task-project");
        taskProject.innerHTML = `<b>Project:</b> ${taskList[i].projectSelection}`

        let taskPriority = document.createElement("div");
        taskPriority.classList.add("task-priority");
        taskPriority.innerHTML = `<b>Priority:</b> ${taskList[i].priority}`;

        let expandTaskBtn = document.createElement("img");
        expandTaskBtn.classList.add("expand-button");
        expandTaskBtn.src = "./images/expand-arrow.png";
        expandTaskBtn.addEventListener("click", (e) => {
            taskDetails.classList.toggle("expanded");
        })

        let deleteTaskBtn = document.createElement("img");
        deleteTaskBtn.classList.add("delete");
        deleteTaskBtn.src = "./images/trash-black.png";
        deleteTaskBtn.addEventListener("click", (e) => {
            deleteTask(i);
        })

        tasks.appendChild(taskContainer);

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskDetails);
        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDueDate);
        taskDetails.appendChild(taskPriority);
        taskDetails.appendChild(expandTaskBtn);
        taskDetails.appendChild(deleteTaskBtn);
        taskDetails.appendChild(taskDescription);
        taskDetails.appendChild(taskProject);
        taskDetails.appendChild(taskPriority);
        
    }
    
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

export function closeTaskForm() {
    let taskFormContainer = document.getElementById("form-container");
    taskFormContainer.style.display= "none"
}
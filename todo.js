import { projectList } from "./projects";

export let taskList = [];
export let filteredTasks = [];
let taskForm = document.getElementById("task-form");
export let editTaskFormContainer = document.getElementById("edit-form-container");



export default function submitTask() {
    let title = document.getElementById("title-input").value;
    let description = document.getElementById("description-input").value;
    let dueDate= document.getElementById("date-input").value;
    let projectSelection = document.getElementById("project-selection").value;
    let priority = document.getElementById("priority-input").value;
    let taskComplete = false;

    let task = new Task(title, description, dueDate, projectSelection, priority, taskComplete);
    taskList.push(task);

    displayAllTasks();

    closeTaskForm();
    taskForm.reset();
}

class Task {
    constructor(title, description, dueDate, projectSelection, priority, taskComplete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectSelection = projectSelection;
        this.taskComplete = taskComplete;
    }
}

export function displayAllTasks() {
    let tasks = document.getElementById("tasks");
    tasks.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        displayTask(taskList[i], projects);        
    }

}

export function displayFilteredTasks() {
    let tasks = document.getElementById("tasks");
    tasks.innerHTML = "";
    for (let i = 0; i < filteredTasks.length; i++) {
        displayTask(filteredTasks[i], projects);
    }
}

function displayTask(task, projects) {
    let tasks = document.getElementById("tasks");
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskContainer.classList.add("checked");
            task.taskComplete = true;
        } else {
            taskContainer.classList.remove("checked");
            task.taskComplete = false;
        }
    })

    if (task.taskComplete == true) {
        taskContainer.classList.add("checked");
    } else {
        taskContainer.classList.remove("checked");
    }

    let taskDetails = document.createElement('div');
    taskDetails.classList.add("task-details");
    taskDetails.classList.add("expandable");


    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerHTML = task.title;

    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.innerHTML = `<b>Description:</b> ${task.description}`;

    let taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task-due-date");
    taskDueDate.innerHTML = task.dueDate;

    let taskProject = document.createElement("div");
    taskProject.classList.add("task-project");
    taskProject.innerHTML = `<b>Project:</b> ${task.projectSelection}`

    let taskPriority = document.createElement("div");
    taskPriority.classList.add("task-priority");
    taskPriority.innerHTML = `<b>Priority:</b> ${task.priority}`;

    let expandTaskBtn = document.createElement("img");
    expandTaskBtn.classList.add("expand-button");
    expandTaskBtn.src = "./images/expand-arrow.png";
    expandTaskBtn.addEventListener("click", (e) => {
        taskDetails.classList.toggle("expanded");
    })

    let editTaskBtn = document.createElement("img");
    editTaskBtn.classList.add("edit");
    editTaskBtn.setAttribute("id", "edit");
    editTaskBtn.src = "./images/edit.png";
    editTaskBtn.addEventListener("click", (e) => {
        displayEditForm(task);
    })

    let deleteTaskBtn = document.createElement("img");
    deleteTaskBtn.classList.add("delete");
    deleteTaskBtn.src = "./images/trash-black.png";
    deleteTaskBtn.addEventListener("click", (e) => {
        deleteTask(task);
    })

    tasks.appendChild(taskContainer);
    

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskDetails);
    taskDetails.appendChild(taskTitle);
    taskDetails.appendChild(taskDueDate);
    taskDetails.appendChild(taskPriority);
    taskDetails.appendChild(expandTaskBtn);
    taskDetails.appendChild(editTaskBtn);
    taskDetails.appendChild(deleteTaskBtn);
    taskDetails.appendChild(taskDescription);
    taskDetails.appendChild(taskProject);
    taskDetails.appendChild(taskPriority);
}

function deleteTask(task) {
    const index = taskList.indexOf(task);
    taskList.splice(index, 1);
    displayAllTasks(); 
}

export function closeTaskForm() {
    let taskFormContainer = document.getElementById("form-container");
    taskFormContainer.style.display= "none"
}

export function closeEditForm() {
    editTaskFormContainer.style.display = "none";

}

function displayEditForm(task) {
    const index = taskList.indexOf(task);
    let selectedTask = taskList[index];
    displayEditForm.selectedTask = selectedTask;

    let editTitle = document.getElementById("edit-title-input");
    let editDescription = document.getElementById("edit-description-input");
    let editDate = document.getElementById("edit-date-input");
    let editProject = document.getElementById("edit-project-selection");
    let editPriority = document.getElementById("edit-priority-input");

    editTitle.value = selectedTask.title;
    editDescription.value = selectedTask.description;
    editDate.value = selectedTask.dueDate;
    editProject.value = selectedTask.projectSelection;
    editPriority.value = selectedTask.priority;

    editTaskFormContainer.style.display = "block";
}

export function getSelectedTask() {
    return displayEditForm.selectedTask;  
}

export function submitEdits(task) {
    const index = taskList.indexOf(task);
    let selectedTask = taskList[index];
    
    let editedTitle = document.getElementById("edit-title-input");
    let editedDescription = document.getElementById("edit-description-input");
    let editedDate = document.getElementById("edit-date-input");
    let editedProject = document.getElementById("edit-project-selection");
    let editedPriority = document.getElementById("edit-priority-input");
    
    selectedTask.title = editedTitle.value;
    selectedTask.description = editedDescription.value;
    selectedTask.dueDate = editedDate.value;
    selectedTask.projectSelection = editedProject.value;
    selectedTask.priority = editedPriority.value;
    
    if (selectedTask.title == "") {
        alert("Title is required");
        return false;
    } else {
        editTaskFormContainer.style.display = "none";
        displayAllTasks();
     }
}

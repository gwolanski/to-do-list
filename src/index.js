import taskManager from "../dist/todo";

let taskList = [];

let newProjectButton = document.getElementById("new-project");
newProjectButton.addEventListener("click", (e) => {
    console.log("new project");

    // let projectSection = document.getElementById("project-section-container");
    document.getElementById("new-project-form").style.display = "block";
})

let newProjectCancel = document.getElementById("cancel-new-project");
newProjectCancel.addEventListener("click", (e) => {
    document.getElementById("new-project-form").style.display = "none";
})

//When the "add" button is pressed for a new project, 
//the value that is in the form is appended to the end of the project list
//if nothing is typed in, nothing happens
//have an array that contains the projects.
//create a for loop that cycles through the array and draws it to the project list
//when project deleted, it is removed from array and other item indexes change accoridngly

let newProjectSubmit = document.getElementById("add-new-project");

let newTaskButton = document.getElementById("new-task-container");
newTaskButton.addEventListener("click", (e) => {
    document.getElementById("form-container").style.display= "block";
})

let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", (e) => {
    document.getElementById("form-container").style.display= "none";
})

let title = document.getElementById("title");
let description = document.getElementById("description");
let dueDate= document.getElementById("date");
let priority = document.getElementById("priority");

//Take info submitted in the form and create an object.
//Push object to an array


class NewTask {
    constructor(title, description, date, priority) {
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority
    }
}

function createTask(task) {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    let taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerHTML = task.title;

    let taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.innerHTML = task.description;

    let taskPriority = document.createElement("div");
    taskPriority.classList.add("task-priority");
    taskPriority.innerHTML = task.priority;

    taskContainer.appendChild("taskTitle");
    taskContainer.appendChild("taskDescription");
    taskContainer.appendChild("taskPriority");

    return taskContainer;
}
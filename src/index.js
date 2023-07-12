import taskManager from "../dist/todo";

let taskList = [];
let projectList = ["Example"];

let newProjectButton = document.getElementById("new-project");
newProjectButton.addEventListener("click", (e) => {
    // let projectSection = document.getElementById("project-section-container");
    document.getElementById("new-project-form").style.display = "block";
})

let newProjectCancel = document.getElementById("cancel-new-project");
newProjectCancel.addEventListener("click", (e) => {
    document.getElementById("new-project-form").style.display = "none";
    removeError();
})

//When the "add" button is pressed for a new project, 
//the value that is in the form is appended to the end of the project list
//if nothing is typed in, nothing happens
//have an array that contains the projects.
//create a for loop that cycles through the array and draws it to the project list
//when project deleted, it is removed from array and other item indexes change accoridngly

let newProjectSubmit = document.getElementById("add-new-project");
newProjectSubmit.addEventListener("click", (e) => {
    let newProject = document.getElementById("new-project-entry").value;
    let projectInput = document.getElementById("new-project-entry");
    let projectForm = document.getElementById("new-project-form");

    if (newProject != "") {
        removeError();
        projectList.push(newProject);
        projectForm.reset();
        displayProjects();
    } else {
        let emptyProjectError = document.createElement("div");
        emptyProjectError.id = "project-error";
        emptyProjectError.innerHTML = "This field is required*";
        projectInput.parentNode.insertBefore(emptyProjectError, projectInput.nextSibling);
    }


})

function removeError(){
    let errorElement = document.getElementById("project-error");
    if (errorElement) {
        errorElement.remove();
    }
}

function displayProjects() {
    let projects = document.getElementById("projects");
    projects.innerHTML = "";

    for (let i = 0; i < projectList.length; i++) {
        let projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");
        projects.appendChild(projectContainer);

        let projectText = document.createElement("div");
        projectText.classList.add("project-text");
        projectText.innerHTML = projectList[i];
        projectContainer.appendChild(projectText);

        let deleteBtn = document.createElement("img");
        deleteBtn.classList.add("delete");
        deleteBtn.src = "./images/trash.png";
        projectContainer.appendChild(deleteBtn);
    }
} 

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
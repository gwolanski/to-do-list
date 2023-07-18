import taskManager from "../dist/todo";

let taskList = [];
let projectList = ["Example"];
let taskFormContainer = document.getElementById("form-container");
let taskForm = document.getElementById("task-form");

let newProjectButton = document.getElementById("new-project");
newProjectButton.addEventListener("click", (e) => {
    document.getElementById("new-project-form").style.display = "block";
})

let newProjectCancel = document.getElementById("cancel-new-project");
newProjectCancel.addEventListener("click", (e) => {
    document.getElementById("new-project-form").style.display = "none";
    removeError();
})

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
        deleteBtn.addEventListener("click", (e) => {
            deleteProject(i);
            console.log("projectList after delete: " + projectList);
        })

        projectContainer.appendChild(deleteBtn);
    }
}

function deleteProject(index) {
    projectList.splice(index, 1);
    displayProjects();
}



let newTaskButton = document.getElementById("new-task-container");
newTaskButton.addEventListener("click", (e) => {
    taskFormContainer.style.display= "block";
    populateProjectDropdown();
})

let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", (e) => {
   closeTaskForm();
})

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submit();
})

function submit() {
    let title = document.getElementById("title-input");
    console.log("title: " + title);
    let description = document.getElementById("description-input").value;
    let dueDate= document.getElementById("date-input").value;
    let priority = document.getElementById("priority-input").value;
    let projectSelection = document.getElementById("project-selection").value;

    console.log("title: " + title);

    let task = new NewTask(title, description, dueDate, priority, projectSelection);

    closeTaskForm();
    taskForm.reset();
}

function closeTaskForm() {
    taskFormContainer.style.display= "none"
}

function populateProjectDropdown() {
    let projectDropdown = document.getElementById("project-selection");

    projectDropdown.innerHTML = "";
    
    for (let i = 0; i < projectList.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.innerHTML = projectList[i];
        projectDropdown.appendChild(projectOption);
    }
}


class NewTask {
    constructor(title, description, dueDate, priority, projectSelection) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectSelection = projectSelection
    }
}

//Take info submitted in the form and create an object.
//Push object to an array

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
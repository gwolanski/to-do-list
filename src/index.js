import submitTask from "../dist/todo";
import { closeTaskForm, taskList, displayFilteredTasks, filteredTasks, displayAllTasks, closeEditForm } from "../dist/todo";
import submitNewProject from "../dist/projects";
import { projectList, removeError, selectionHeaderContainer } from "../dist/projects";

let tasksFiltered = false;

let taskFormContainer = document.getElementById("form-container");

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
newProjectSubmit.addEventListener("click", submitNewProject);
   
let newTaskButton = document.getElementById("new-task-container");
newTaskButton.addEventListener("click", (e) => {
    taskFormContainer.style.display= "block";
    populateProjectDropdown();
})

let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", (e) => {
   closeTaskForm();
})

let closeEditsButton = document.getElementById("close-edits-button");
closeEditsButton.addEventListener("click", (e) => {
    closeEditForm();
})

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})

function validateForm() {
    let title = document.getElementById("title-input").value;

    if (title == "") {
        alert("Title is required");
        return false;
    } else {
        submitTask();
    }
}

function populateProjectDropdown() {
    let projectDropdown = document.getElementById("project-selection");

    projectDropdown.innerHTML = "";

    let blankProject = document.createElement("option");
    blankProject.innerHTML = " ";
    projectDropdown.appendChild(blankProject);
    
    for (let i = 0; i < projectList.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.innerHTML = projectList[i];
        projectDropdown.appendChild(projectOption);
    }
}

let allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click", (e) => {
    tasksFiltered = false;
    selectionHeaderContainer.innerHTML = "";
    displayAllTasks();
})


let projectSection = document.getElementById("projects");
projectSection.addEventListener("click", (e) => {
    tasksFiltered = true;
    let projectHeader = document.getElementById("selection-header").innerHTML;
    filteredTasks = [];
    taskList.forEach(task => {
        if (task.projectSelection == projectHeader) {
            filteredTasks.push(task);
        }
    });
    displayFilteredTasks();
})



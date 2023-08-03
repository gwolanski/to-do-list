import submitTask from "../dist/todo";
import { closeTaskForm, taskList, displayFilteredTasks, filteredTasks, displayAllTasks, closeEditForm, submitEdits, getSelectedTask} from "../dist/todo";
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
    e.preventDefault();
    closeTaskForm();
})

let closeEditsButton = document.getElementById("close-edits-button");
closeEditsButton.addEventListener("click", (e) => {
    e.preventDefault();
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

let submitEditsBtn = document.getElementById("submit-edits-button");
submitEditsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let currentTask = getSelectedTask();
    console.log("currentTask: " + currentTask);

    submitEdits(currentTask);
});


function populateProjectDropdown() {
    let newTaskProjectDropdown = document.getElementById("project-selection");
    let editTaskProjectDropdown = document.getElementById("edit-project-selection");

    newTaskProjectDropdown.innerHTML = "";
    editTaskProjectDropdown.innerHTML = "";

    let blankProject = document.createElement("option");
    blankProject.innerHTML = " ";
    newTaskProjectDropdown.appendChild(blankProject);
    editTaskProjectDropdown.appendChild(blankProject);
    
    for (let i = 0; i < projectList.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.innerHTML = projectList[i];
        newTaskProjectDropdown.appendChild(projectOption);
        editTaskProjectDropdown.appendChild(projectOption);
    }
}


let editTaskBtn = document.getElementById("edit");
editTaskBtn.addEventListener("click", populateProjectDropdown);
//current issue: trying to find a way to use populateProjectDropdown to populate both forms but 
//they are now not showing up for my new tasks and i get an error in the console since the edit button doesnt exist
//on startup. maybe instead of defining the button, I look at just creating a function that will populate 
//the dropdowns after new projects added or deleted??
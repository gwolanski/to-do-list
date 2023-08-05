import submitTask from "../dist/todo";
import { closeTaskForm, taskList, displayFilteredTasks, filteredTasks, displayAllTasks, closeEditForm, submitEdits, getSelectedTask} from "../dist/todo";
import submitNewProject from "../dist/projects";
import { projectList, removeError, selectionHeaderContainer } from "../dist/projects";

let tasksFiltered = false;
let filteredByProject = false;
let filteredByDate = false;

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
        if (tasksFiltered == true) {
            if (filteredByProject = true) {
                filterTasksByProject();
            } else if (filteredByDate = true) {
                filterTasksByDate();
            }
            displayFilteredTasks();
        } else {
            displayAllTasks();
        }
    }
}


let allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click", (e) => {
    tasksFiltered = false;

    selectionHeaderContainer.innerHTML = "";
    let allTasksHeader = document.createElement("div");
    allTasksHeader.innerHTML = "All Tasks";
    allTasksHeader.setAttribute("id", "selection-header");
    selectionHeaderContainer.appendChild(allTasksHeader);

    displayAllTasks();
});

let todayButton = document.getElementById("today-tasks");
todayButton.addEventListener("click", (e) => {
    tasksFiltered = true;
    filteredByDate = true;

    selectionHeaderContainer.innerHTML = "";
    let todayHeader = document.createElement("div");
    todayHeader.innerHTML = "Due Today";
    todayHeader.setAttribute("id", "selection-header");
    selectionHeaderContainer.appendChild(todayHeader);

    filterTasksByDate();
    displayFilteredTasks();
});

let weekButton = document.getElementById("week-tasks");
weekButton.addEventListener("click", (e) => {
    tasksFiltered = true;
    filteredByDate = true;

    selectionHeaderContainer.innerHTML = "";
    let weekHeader = document.createElement("div");
    weekHeader.innerHTML = "Due Within a Week";
    weekHeader.setAttribute("id", "selection-header");
    selectionHeaderContainer.appendChild(weekHeader);

    filterTasksByDate();
    displayFilteredTasks();
})


let projectSection = document.getElementById("projects");
projectSection.addEventListener("click", (e) => {
    tasksFiltered = true;
    filteredByProject = true;

    filterTasksByProject();
    displayFilteredTasks();
});

function filterTasksByProject() {
    let projectHeader = getFilteredHeader();
    filteredTasks = [];
    taskList.forEach(task => {
        if (task.projectSelection == projectHeader) {
            filteredTasks.push(task);
        }
    });
}

function filterTasksByDate() {
    let currentDate = getDate();
    let oneWeekDate = getWeekDate();
    let dateFilterHeader = getFilteredHeader();
    filteredTasks = [];
    taskList.forEach(task => {
        if (dateFilterHeader == "Due Today") {
            if (task.dueDate == currentDate) {
                filteredTasks.push(task);
            }
        } else if (dateFilterHeader == "Due Within a Week") {
            if (task.dueDate <= oneWeekDate) {
                filteredTasks.push(task);
            }  
        }
    })
};

let submitEditsBtn = document.getElementById("submit-edits-button");
submitEditsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let currentTask = getSelectedTask();

    console.log("tasksFiltered: " + tasksFiltered); 

    if (tasksFiltered == true) {
        submitEdits(currentTask);
        if (filteredByProject = true) {
            filterTasksByProject();
        } else if (filteredByDate = true) {
            filterTasksByDate();
        }
        displayFilteredTasks();
        
    } else {
        submitEdits(currentTask);
    } 
});

function getDate() {
    let jsonDate = new Date().toJSON().slice(0,10);
    console.log("json today: " + jsonDate);
    return jsonDate;
};

function getWeekDate() {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    let oneWeekFromToday = date.toJSON().slice(0,10);
    return oneWeekFromToday;
}

function getFilteredHeader() {
    let filteredHeader = document.getElementById("selection-header").innerHTML;
    return filteredHeader;
}
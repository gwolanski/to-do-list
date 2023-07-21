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

        let deleteProjectBtn = document.createElement("img");
        deleteProjectBtn.classList.add("delete-task");
        deleteProjectBtn.src = "./images/trash.png";
        deleteProjectBtn.addEventListener("click", (e) => {
            deleteProject(i);
        })
        projectContainer.appendChild(deleteProjectBtn);
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
    validateForm();
    // submit();
})

function validateForm() {
    let title = document.getElementById("title-input").value;

    if (title == "") {
        alert("Title is required");
        return false;
    } else {
        submit();
    }
}

function submit() {
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

function closeTaskForm() {
    taskFormContainer.style.display= "none"
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
        if (taskList[i].description) {
            taskDetails.appendChild(taskDescription);
        }
        taskDetails.appendChild(taskProject);
        taskDetails.appendChild(taskPriority);
        
    }
    
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

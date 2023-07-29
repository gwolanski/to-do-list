export let projectList = [];
export let selectionHeaderContainer = document.getElementById("selection-header-container");

export default function submitNewProject() {
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

    return projectList
}

export function removeError(){
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

        projectText.addEventListener("click", (e) => {
            ///When you click on a project, the main part of the page changes so only the tasks related to that project are shown
            //any other task should be "hidden"

            selectionHeaderContainer.innerHTML = "";
            let projectHeader = document.createElement('div');
            projectHeader.innerHTML = projectList[i];
            projectHeader.setAttribute("id", "selection-header");
            selectionHeaderContainer.appendChild(projectHeader);
            
            //run a for loop that cycles through the task list and looks for objects that are designated for a certain project

            ///IDEA: just have the event listener make the "selection header" text appear at the top,
            //then, in the index.js create a function that looks for the selection header div, finds its contents and changes the tasks displayed based on this. 
            //this idea could potentially work for both projects and date related filtering

            // let tasks = document.getElementById("tasks");
            // tasks.innerHTML = "";

            // let focusedProject = projectList[i];
            // let focusedProjectTasks = [];
            
            // for (let i = 0; i < taskList.length; i++) {
            //     if (taskList[i].projectSelection == focusedProject) {
            //         focusedProjectTasks.push(taskList[i]);
            //         displayTasks();
            //     }

            // }
            //create a new object array and push the desired task objects into this new array
            //display contents of array.

        })

        let deleteProjectBtn = document.createElement("img");
        deleteProjectBtn.classList.add("delete");
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
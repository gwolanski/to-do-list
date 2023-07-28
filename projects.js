export let projectList = [];

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
       
            let selectionHeaderContainer = document.getElementById("selection-header-container");

            selectionHeaderContainer.innerHTML = "";
            let projectHeader = document.createElement('div');
            projectHeader.innerHTML = projectList[i];
            projectHeader.classList.add("selection-header");
            selectionHeaderContainer.appendChild(projectHeader);
            
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
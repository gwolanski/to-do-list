export let projectList = [];
export let selectionHeaderContainer = document.getElementById("selection-header-container");

export default function submitNewProject() {
    let newProject = document.getElementById("new-project-entry").value;
    let projectInput = document.getElementById("new-project-entry");
    let projectForm = document.getElementById("new-project-form");
    let projectValid = true;

    if (newProject != "") {
        removeError();
        for (let i = 0 ; i < projectList.length ; i++) {
            if (newProject == projectList[i]) {
                let duplicateProjectError = document.createElement("div");
                duplicateProjectError.id = "project-error";
                duplicateProjectError.innerHTML = "Project already exists*";
                projectInput.parentNode.insertBefore(duplicateProjectError, projectInput.nextSibling);
                projectValid = false;
            }
        }

        if (projectValid) {
            projectList.push(newProject);
            projectForm.reset();
            storeProjectList();
            document.getElementById("new-project-form").style.display = "none";
            displayProjects();
        }
        

    } else {
        let emptyProjectError = document.createElement("div");
        emptyProjectError.id = "project-error";
        emptyProjectError.innerHTML = "This field is required*";
        projectInput.parentNode.insertBefore(emptyProjectError, projectInput.nextSibling);
    }

    populateProjectDropdown();

    return projectList;
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

        projectText.addEventListener("click", () => {
            selectionHeaderContainer.innerHTML = "";
            let projectHeader = document.createElement('div');
            projectHeader.innerHTML = projectList[i];
            projectHeader.setAttribute("id", "selection-header");
            selectionHeaderContainer.appendChild(projectHeader);
        });

        let deleteProjectBtn = document.createElement("img");
        deleteProjectBtn.classList.add("delete-project");
        deleteProjectBtn.src = "./images/trash.png";
        deleteProjectBtn.addEventListener("click", () => {
            deleteProject(i);
        });
        projectContainer.appendChild(deleteProjectBtn);
    }
}

function deleteProject(index) {
    projectList.splice(index, 1);
    storeProjectList();
    displayProjects();
    populateProjectDropdown();
}

function populateProjectDropdown() {
    let newTaskProjectDropdown = document.getElementById("project-selection");
    let editTaskProjectDropdown = document.getElementById("edit-project-selection");

    newTaskProjectDropdown.innerHTML = "";
    editTaskProjectDropdown.innerHTML = "";

    let newBlankProject = document.createElement("option");
    newBlankProject.innerHTML = " ";
    newTaskProjectDropdown.appendChild(newBlankProject);

    let editBlankProject = document.createElement("option");
    editBlankProject.innerHTML = " ";
    editTaskProjectDropdown.appendChild(editBlankProject);
    
    for (let i = 0; i < projectList.length; i++) {
        let newProjectOption = document.createElement("option");
        newProjectOption.innerHTML = projectList[i];
        newTaskProjectDropdown.appendChild(newProjectOption);

        let editProjectOption = document.createElement("option");
        editProjectOption.innerHTML = projectList[i];
        editTaskProjectDropdown.appendChild(editProjectOption);
    }
}

function storeProjectList() {
    localStorage.setItem('projects', JSON.stringify(projectList));
}

function getProjectList() {
    let storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        let parsedProjects = JSON.parse(storedProjects);
        projectList = parsedProjects;
        displayProjects();
        populateProjectDropdown();
    }
}

getProjectList();

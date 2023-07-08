import taskManager from "../dist/todo";

let newTaskButton = document.getElementById("new-task-container");
newTaskButton.addEventListener("click", (e) => {
    document.getElementById("form-container").style.display= "block";
})

let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", (e) => {
    document.getElementById("form-container").style.display= "none";
})

console.log("hi");
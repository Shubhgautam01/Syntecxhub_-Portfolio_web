const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

//reusable function
function addDragEvents(task) {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
}

// apply to existing tasks
document.querySelectorAll(".task").forEach(addDragEvents);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value;
    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    //apply drag to new task
    addDragEvents(newTask);

    todoLane.appendChild(newTask);
    input.value = "";
});
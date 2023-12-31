"use strict";
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        const newTask = {
            id: this.tasks.length + 1,
            description,
            completed: false
        };
        this.tasks.push(newTask);
        taskManager.displayTask();
    }
    displayTask() {
        const taskListElement = document.getElementById("task-list");
        if (taskListElement) {
            taskListElement.innerHTML = "";
            this.tasks.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${task.id},${task.description},${task.completed ? "Completada" : "Pendiente"}`;
                listItem.style.color = task.completed ? "green" : "red";
                taskListElement.appendChild(listItem);
            });
        }
    }
    doneTask(taskId) {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
            const taskListElement = document.getElementById("task-list");
            task.completed = true;
            this.displayTask();
        }
    }
}
const taskManager = new TaskManager();
function addTask() {
    const taskInput = document.getElementById("task-input");
    if (taskInput && taskInput.value.trim() !== "") {
        taskManager.addTask(taskInput.value.trim());
        taskInput.value = "";
    }
}
function taskDone() {
    const taskDoneInput = document.getElementById("task-done-input");
    if (taskDoneInput && taskDoneInput.value.trim() !== "") {
        const taskId = parseInt(taskDoneInput.value.trim());
        taskDoneInput.value = "";
        taskManager.doneTask(taskId);
    }
}

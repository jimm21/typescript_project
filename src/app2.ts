interface Task {
    id: number;
    description: string;
    completed: boolean;
}

class TaskManager <T extends Task> {
    private tasks: T[] = [];

    addTask(description: string): void {
        const newTask: T = {
            id: this.tasks.length + 1,
            description,
            completed: false
        } as T;
        this.tasks.push(newTask);
        taskManager.displayTask();
    }

    displayTask(): void {
        const taskListElement = document.getElementById("task-list");
        if (taskListElement) {
            taskListElement.innerHTML = "";
            this.tasks.forEach((task) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${task.id},${task.description},${task.completed? "Completada":"Pendiente"}`;
                listItem.style.color = task.completed ? "green" : "red";
                taskListElement.appendChild(listItem);
            });
        }
    }

    doneTask(taskId: number): void {
        const task = this.tasks.find((task: T) => task.id === taskId);
        if (task) {
            task.completed = true;
            this.displayTask();
        }
        
    }
}

const taskManager = new TaskManager<Task>();

function addTask(): void {
    const taskInput = document.getElementById("task-input") as HTMLInputElement;
    if (taskInput && taskInput.value.trim() !== "") {
        taskManager.addTask(taskInput.value.trim());
        taskInput.value = "";
    }
}

function taskDone(): void {
    const taskDoneInput = document.getElementById("task-done-input") as HTMLInputElement;
    if (taskDoneInput && taskDoneInput.value.trim() !== "") {
        const taskId = parseInt(taskDoneInput.value.trim());
        taskDoneInput.value = "";
        taskManager.doneTask(taskId);
    }
}
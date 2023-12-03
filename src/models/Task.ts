interface Task {
    id: number,
    description: string,
    completed: boolean,
}

class Tarea {
    public task: Task;
    constructor(task: Task) {
        this.task = task;
    }
    isDone(): void {
        // mark completed as true
        this.task.completed = true;
    }
}

// export Tarea to use in a different file
export {Tarea};
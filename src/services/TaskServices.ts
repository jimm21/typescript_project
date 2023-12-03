import {Tarea} from "../models/Task";

class TaskServices {
    public tareas: Tarea[];
    constructor() {
        this.tareas = [];
    }
    addTarea(task: Tarea): void {
        this.tareas.push(task);
        console.log("Se agrego la tarea: " + task.task.description);
    }
    showTareas(): void {
        console.log(`Todas las tareas:`);
        for (let tarea of this.tareas) {
            console.log(`${tarea.task.id}, ${tarea.task.description}, ${tarea.task.completed}`);
        }
    }
    completarTarea(id: number): void {
        this.tareas[id - 1].isDone();
        console.log(`Tareas despues de marcar una como completada:`)
        for (let tarea of this.tareas) {
            console.log(`${tarea.task.id}, ${tarea.task.description}, ${tarea.task.completed}`);
        }
    }
}

export {TaskServices};
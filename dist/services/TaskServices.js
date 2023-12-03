"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServices = void 0;
class TaskServices {
    constructor() {
        this.tareas = [];
    }
    addTarea(task) {
        this.tareas.push(task);
        console.log("Se agrego la tarea: " + task.task.description);
    }
    showTareas() {
        console.log(`Todas las tareas:`);
        for (let tarea of this.tareas) {
            console.log(`${tarea.task.id}, ${tarea.task.description}, ${tarea.task.completed}`);
        }
    }
    completarTarea(id) {
        this.tareas[id - 1].isDone();
        console.log(`Tareas despues de marcar una como completada:`);
        for (let tarea of this.tareas) {
            console.log(`${tarea.task.id}, ${tarea.task.description}, ${tarea.task.completed}`);
        }
    }
}
exports.TaskServices = TaskServices;

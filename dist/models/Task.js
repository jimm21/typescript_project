"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(task) {
        this.task = task;
    }
    isDone() {
        // mark completed as true
        this.task.completed = true;
    }
}
exports.Tarea = Tarea;

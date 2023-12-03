import { Tarea } from "./models/Task";
import { TaskServices } from "./services/TaskServices";

let tarea1 = new Tarea({id: 1, description: "Hacer la compra", completed: false});
let tarea2 = new Tarea({id: 2, description: "Preparar la presentación", completed: false});

const servicioTareas = new TaskServices();
servicioTareas.addTarea(tarea1);
servicioTareas.addTarea(tarea2);
servicioTareas.showTareas();
servicioTareas.completarTarea(1);
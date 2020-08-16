import { Router } from "express";
import tasksController from "../controllers/tasksController";

class TasksRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", tasksController.listAllTasks);
    this.router.get("/:id/:user", tasksController.listTasksUser);
    this.router.get("/:id", tasksController.getTask);
    this.router.post("/", tasksController.createTask);
    this.router.put("/:id", tasksController.updateTask);
    this.router.delete("/:id", tasksController.deleteTask);
  }
}

const tasksRoutes = new TasksRoutes();
export default tasksRoutes.router;

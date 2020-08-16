import { Request, Response } from "express";
import pool from "../database";

class TasksController {
  public async listAllTasks(req: Request, res: Response): Promise<void> {
    const tasks = await (await pool).query("SELECT * FROM tasks");
    res.json(tasks);
  }

  public async listTasksUser(req: Request, res: Response): Promise<void> {
    const { user } = req.params;
    const tasks = await (
      await pool
    ).query("SELECT * FROM tasks WHERE id_user = ?", [user]);
    res.json(tasks);
  }

  public async getTask(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const task = await (await pool).query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);

    if (task.length > 0) {
      console.log(task[0]);
      return res.json(task[0]);
    }

    res.status(404).json({ message: "Task not found!" });
  }

  public async createTask(req: Request, res: Response): Promise<void> {
    await (await pool).query("INSERT INTO tasks SET ?", [req.body]);
    res.json({ message: "Task saved" });
  }

  public async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await (await pool).query("DELETE FROM tasks WHERE id = ?", [id]);
    res.json({ message: "The task was deleted, id " + id });
  }

  public async updateTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await (await pool).query("UPDATE tasks SET ? WHERE id = ?", [req.body, id]);
    res.json({ text: "The task was updated " + id });
  }
}

const tasksController = new TasksController();
export default tasksController;

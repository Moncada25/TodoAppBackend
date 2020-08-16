import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response): void {
    res.json({
      text: "Server works! API is /api/games or /api/tasks or /api/skills",
    });
  }
}

export const indexController = new IndexController();

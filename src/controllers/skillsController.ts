import { Request, Response } from "express";
import pool from "../database";

class SkillsController {
  public async listAllSkills(req: Request, res: Response): Promise<void> {
    const skills = await (await pool).query("SELECT * FROM skills");
    res.json(skills);
  }

  public async listSkillsUser(req: Request, res: Response): Promise<void> {
    const { user } = req.params;
    const skills = await (
      await pool
    ).query("SELECT * FROM skills WHERE id_user = ?", [user]);
    res.json(skills);
  }

  public async createSkill(req: Request, res: Response): Promise<void> {
    await (await pool).query("INSERT INTO skills SET ?", [req.body]);
    res.json({ message: "Skill saved" });
  }

  public async deleteSkill(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await (await pool).query("DELETE FROM skills WHERE id = ?", [id]);
    res.json({ message: "The skill was deleted, id " + id });
  }

  public async updateSkill(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await (await pool).query("UPDATE skills SET ? WHERE id = ?", [
      req.body,
      id,
    ]);

    res.json({ text: "The skill was updated " + id });
  }
}

const skillsController = new SkillsController();
export default skillsController;

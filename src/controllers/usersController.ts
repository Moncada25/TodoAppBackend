import { Request, Response } from "express";
import pool from "../database";

class UsersController {
  public async listAllUsers(req: Request, res: Response): Promise<void> {
    const users = await (await pool).query("SELECT * FROM users");
    res.json(users);
  }

  public async getUsername(req: Request, res: Response): Promise<any> {
    const { username } = req.params;

    const user = await (
      await pool
    ).query("SELECT * FROM users WHERE username = ?", [username]);

    if (user.length > 0) {
      return res.json(user[0]);
    }

    res.status(404).json({ message: "Username not found!" });
  }

  public async registerUser(req: Request, res: Response): Promise<any> {
    await (await pool).query("INSERT INTO users SET ?", [req.body]);
    res.json({ message: "User saved" });
  }

  public async updateUser(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await (await pool).query("UPDATE users SET ? WHERE id = ?", [req.body, id]);
    res.json({ text: "The user was updated " + id });
  }
}

const usersController = new UsersController();
export default usersController;

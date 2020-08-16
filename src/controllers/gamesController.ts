import { Request, Response } from "express";
import pool from "../database";

class GamesController {
  public async listAllGames(req: Request, res: Response): Promise<void> {
    const games = await (await pool).query("SELECT * FROM games");
    res.json(games);
  }

  public async listGamesUser(req: Request, res: Response): Promise<void> {
    const { user } = req.params;
    const games = await (
      await pool
    ).query("SELECT * FROM games WHERE id_user = ?", [user]);
    res.json(games);
  }

  public async getGame(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const game = await (await pool).query("SELECT * FROM games WHERE id = ?", [
      id,
    ]);

    if (game.length > 0) {
      console.log(game[0]);
      return res.json(game[0]);
    }

    res.status(404).json({ message: "Game not found!" });
  }

  public async createGame(req: Request, res: Response): Promise<void> {
    await (await pool).query("INSERT INTO games SET ?", [req.body]);
    res.json({ message: "Game saved" });
  }

  public async deleteGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await (await pool).query("DELETE FROM games WHERE id = ?", [id]);
    res.json({ message: "The game was deleted, id " + id });
  }

  public async updateGame(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await (await pool).query("UPDATE games SET ? WHERE id = ?", [req.body, id]);
    res.json({ text: "The game was updated " + id });
  }
}

const gamesController = new GamesController();
export default gamesController;

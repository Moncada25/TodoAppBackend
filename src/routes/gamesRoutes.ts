import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get('/', gamesController.listAllGames);
    this.router.get('/:id/:user', gamesController.listGamesUser);
    this.router.get('/:id', gamesController.getGame);
    this.router.post('/', gamesController.createGame);
    this.router.put('/:id', gamesController.updateGame);
    this.router.delete('/:id', gamesController.deleteGame);
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;

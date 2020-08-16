import { Router } from "express";
import usersController from "../controllers/usersController";

class UserRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", usersController.listAllUsers);
    this, this.router.get("/:username", usersController.getUsername);
    this.router.post("/", usersController.registerUser);
    this.router.put("/:id", usersController.updateUser);
  }
}

const usersRoutes = new UserRoutes();
export default usersRoutes.router;

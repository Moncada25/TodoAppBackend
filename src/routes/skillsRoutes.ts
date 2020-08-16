import { Router } from "express";
import skillsController from "../controllers/skillsController";

class SkillsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", skillsController.listAllSkills);
    this.router.get("/:user", skillsController.listSkillsUser);
    this.router.post("/", skillsController.createSkill);
    this.router.put("/:id", skillsController.updateSkill);
    this.router.delete("/:id", skillsController.deleteSkill);
  }
}

const skillsRoutes = new SkillsRoutes();
export default skillsRoutes.router;

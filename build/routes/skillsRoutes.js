"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skillsController_1 = __importDefault(require("../controllers/skillsController"));
class SkillsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", skillsController_1.default.listAllSkills);
        this.router.get("/:user", skillsController_1.default.listSkillsUser);
        this.router.post("/", skillsController_1.default.createSkill);
        this.router.put("/:id", skillsController_1.default.updateSkill);
        this.router.delete("/:id", skillsController_1.default.deleteSkill);
    }
}
const skillsRoutes = new SkillsRoutes();
exports.default = skillsRoutes.router;

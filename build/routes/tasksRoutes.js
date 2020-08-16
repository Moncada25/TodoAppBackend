"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../controllers/tasksController"));
class TasksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", tasksController_1.default.listAllTasks);
        this.router.get("/:id/:user", tasksController_1.default.listTasksUser);
        this.router.get("/:id", tasksController_1.default.getTask);
        this.router.post("/", tasksController_1.default.createTask);
        this.router.put("/:id", tasksController_1.default.updateTask);
        this.router.delete("/:id", tasksController_1.default.deleteTask);
    }
}
const tasksRoutes = new TasksRoutes();
exports.default = tasksRoutes.router;

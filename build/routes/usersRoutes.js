"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", usersController_1.default.listAllUsers);
        this, this.router.get("/:username", usersController_1.default.getUsername);
        this.router.post("/", usersController_1.default.registerUser);
        this.router.put("/:id", usersController_1.default.updateUser);
    }
}
const usersRoutes = new UserRoutes();
exports.default = usersRoutes.router;

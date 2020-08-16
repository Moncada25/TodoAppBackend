"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TasksController {
    listAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield (yield database_1.default).query("SELECT * FROM tasks");
            res.json(tasks);
        });
    }
    listTasksUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const tasks = yield (yield database_1.default).query("SELECT * FROM tasks WHERE id_user = ?", [user]);
            res.json(tasks);
        });
    }
    getTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const task = yield (yield database_1.default).query("SELECT * FROM tasks WHERE id = ?", [
                id,
            ]);
            if (task.length > 0) {
                console.log(task[0]);
                return res.json(task[0]);
            }
            res.status(404).json({ message: "Task not found!" });
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (yield database_1.default).query("INSERT INTO tasks SET ?", [req.body]);
            res.json({ message: "Task saved" });
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query("DELETE FROM tasks WHERE id = ?", [id]);
            res.json({ message: "The task was deleted, id " + id });
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query("UPDATE tasks SET ? WHERE id = ?", [req.body, id]);
            res.json({ text: "The task was updated " + id });
        });
    }
}
const tasksController = new TasksController();
exports.default = tasksController;

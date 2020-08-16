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
class UsersController {
    listAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (yield database_1.default).query("SELECT * FROM users");
            res.json(users);
        });
    }
    getUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.params;
            const user = yield (yield database_1.default).query("SELECT * FROM users WHERE username = ?", [username]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ message: "Username not found!" });
        });
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (yield database_1.default).query("INSERT INTO users SET ?", [req.body]);
            res.json({ message: "User saved" });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query("UPDATE users SET ? WHERE id = ?", [req.body, id]);
            res.json({ text: "The user was updated " + id });
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;

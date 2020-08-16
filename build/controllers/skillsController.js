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
class SkillsController {
    listAllSkills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const skills = yield (yield database_1.default).query("SELECT * FROM skills");
            res.json(skills);
        });
    }
    listSkillsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const skills = yield (yield database_1.default).query("SELECT * FROM skills WHERE id_user = ?", [user]);
            res.json(skills);
        });
    }
    createSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (yield database_1.default).query("INSERT INTO skills SET ?", [req.body]);
            res.json({ message: "Skill saved" });
        });
    }
    deleteSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query("DELETE FROM skills WHERE id = ?", [id]);
            res.json({ message: "The skill was deleted, id " + id });
        });
    }
    updateSkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query("UPDATE skills SET ? WHERE id = ?", [
                req.body,
                id,
            ]);
            res.json({ text: "The skill was updated " + id });
        });
    }
}
const skillsController = new SkillsController();
exports.default = skillsController;

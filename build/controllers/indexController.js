"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            text: "Server works! API is /api/games or /api/tasks or /api/skills",
        });
    }
}
exports.indexController = new IndexController();

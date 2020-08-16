import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";
import tasksRoutes from "./routes/tasksRoutes";
import usersRoutes from "./routes/usersRoutes";
import skillsRoutes from "./routes/skillsRoutes";
import morgan from "morgan";
import cors from "cors";

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/games", gamesRoutes);
    this.app.use("/api/tasks", tasksRoutes);
    this.app.use("/api/users", usersRoutes);
    this.app.use("/api/skills", skillsRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();

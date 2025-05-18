import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
// 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Hello mongodb!");
  });
  
app.use(globalErrorHandler as any);

app.use(notFound as any);

export default app;

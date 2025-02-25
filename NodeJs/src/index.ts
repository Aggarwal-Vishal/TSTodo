import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/todo", todoRoutes);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`server is running  on ${PORT}`);
});

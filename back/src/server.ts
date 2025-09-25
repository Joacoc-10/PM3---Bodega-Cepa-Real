import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes";

const app: Application = express();

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
  origin: "https://bodega-cepa-real.vercel.app",
  credentials: true,
}));
app.options('*', cors());
app.use("/", router);

export default app;

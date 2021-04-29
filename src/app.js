import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import path from "path";
import connect from "../db";

connect();

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));
app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});

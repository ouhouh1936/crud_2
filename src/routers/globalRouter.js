import express from "express";
import globalControllers from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalControllers.homeController);
globalRouter.get("/detail", globalControllers.detailController);
globalRouter.get("/create", globalControllers.createController);

export default globalRouter;

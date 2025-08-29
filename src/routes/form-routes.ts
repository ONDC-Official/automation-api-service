import express from "express";
import { htmlFormController } from "../controllers/form-controller";
const formRouter = express.Router();

formRouter.post("/html-form", htmlFormController);

export default formRouter;

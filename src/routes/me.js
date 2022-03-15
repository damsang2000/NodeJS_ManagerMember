import express from "express";
import MeController from "../app/controllers/MeController.js";
const routerMe = express.Router();
routerMe.get('/store/skill', MeController.show)
export default routerMe
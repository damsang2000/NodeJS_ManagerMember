import express from "express";
import NewsController from "../app/controllers/NewsController.js";
const routerNew = express.Router();

routerNew.get('/:slug',NewsController.detail)
routerNew.get('/',NewsController.index)
export default routerNew
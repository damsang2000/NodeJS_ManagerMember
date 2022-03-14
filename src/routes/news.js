import express from "express";
import NewsController from "../app/controllers/NewsController.js";
const routerNew = express.Router();

routerNew.use('/:slug',NewsController.detail)
routerNew.use('/',NewsController.index)
export default routerNew
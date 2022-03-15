import express from "express";
import SiteController from "../app/controllers/SitesController.js";
const routerSite = express.Router();

routerSite.get('/search',SiteController.search)
routerSite.get('/',SiteController.index)
export default routerSite
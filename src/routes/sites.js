import express from "express";
import SiteController from "../app/controllers/SitesController.js";
const routerSite = express.Router();

routerSite.use('/search',SiteController.search)
routerSite.use('/',SiteController.index)
export default routerSite
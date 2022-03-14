import routerNew from "./news.js";
import routerSite from "./sites.js";
function route(app) {
  app.use('/new',routerNew)
  app.use('/',routerSite)
}
export default route;


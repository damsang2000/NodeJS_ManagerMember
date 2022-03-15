import routerMe from "./me.js";
import routerNew from "./news.js";
import routerSite from "./sites.js";
import routerSkill from "./skill.js";
function route(app) {
  app.use('/new',routerNew)
  app.use('/',routerSite)
  app.use('/skill',routerSkill)
  app.use('/me',routerMe)
}
export default route;


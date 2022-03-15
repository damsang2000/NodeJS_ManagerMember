import Skill from "../models/Skill.js";
import {multipleMoongooseToObject} from "../../util/moogoose.js";
class SiteController {
  //[GET] /
  index(req, res, next) {
    Skill.find({})
      .then((skills) => {
       res.render('home',{skills:multipleMoongooseToObject(skills)})
      })
      .catch((error) => next(error));
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();

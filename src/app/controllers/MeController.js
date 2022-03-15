import Skill from "../models/Skill.js";
import { multipleMoongooseToObject } from "../../util/moogoose.js";
class MeController {
  //[GET] /me/store/skill
  show(req, res, next) {
    Skill.find({})
          .then((skill) => {
            res.render("skill/store_skill", {
            skill: multipleMoongooseToObject(skill),
      })
    }).catch(next)
  }
}

export default new MeController();

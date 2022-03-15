import Skill from "../models/Skill.js";
import { mongooseToObject } from "../../util/moogoose.js";
class SkillController {
  //[GET] /skill/:slug
  show(req, res, next) {
    Skill.findOne({ slug: req.params.slug })
      .then((skill) => {
        res.render("skill/show", { skill: mongooseToObject(skill) });
      })
      .catch(next);
  }
  //[GET] /skill/create
  create(req, res, next) {
    res.render("skill/create");
  }
  //[POST] /skill/store
  store(req, res, next) {
    // res.json(req.body)
    const skill = new Skill(req.body);
    skill
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  //[GET] /skill/:id/edit
  edit(req, res, next) {
    Skill.findById(req.params.id)
      .then((skill) =>
        res.render("skill/edit", {
          skill: mongooseToObject(skill),
        })
      )
      .catch(next);
  }
  //[PUT] /skill/:id
  update(req, res, next) {
      Skill.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/store/skill'))
            .catch(next)
  }
}

export default new SkillController();

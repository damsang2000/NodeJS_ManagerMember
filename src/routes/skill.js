import express from "express";
import SkillController from "../app/controllers/SkillController.js";
const routerSkill = express.Router();
routerSkill.get('/create',SkillController.create)
routerSkill.get('/:slug',SkillController.show)
routerSkill.post('/store',SkillController.store)
routerSkill.get('/:id/edit',SkillController.edit)
routerSkill.put('/:id',SkillController.update)

export default routerSkill
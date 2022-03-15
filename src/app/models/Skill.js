import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Skill = new Schema({
  name: { type: String,required:true },
  slug: { type: String, maxlength: 255 },
},{
  timestamps:true
});

export default mongoose.model("Skills", Skill);

import mongoose from "mongoose";

async function Connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ManagerMember_Dev");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!");
  }
}

export default Connect;

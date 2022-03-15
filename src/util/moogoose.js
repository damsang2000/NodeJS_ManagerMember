export function multipleMoongooseToObject(mongooses) {
  return mongooses.map((mongoose) => mongoose.toObject());
}
export function mongooseToObject(mongoose) {
  return mongoose ? mongoose.toObject() : mongoose;
}


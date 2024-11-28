const mongoose = require("mongoose");

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected")
  } catch (err) {
    console.log("err", err);
  }
};

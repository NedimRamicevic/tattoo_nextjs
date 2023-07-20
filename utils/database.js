import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connecting to database...", process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export default connectDB;

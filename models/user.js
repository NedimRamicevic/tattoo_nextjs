import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);

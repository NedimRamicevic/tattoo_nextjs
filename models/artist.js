import mongoose from "mongoose";

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  photo: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
});

export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);

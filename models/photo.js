import mongoose from "mongoose";

const { Schema } = mongoose;

const photoSchema = new Schema({
  url: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  tattoo_type: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 100,
  },
});

export default mongoose.models.Photo || mongoose.model("Photo", photoSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    // unique: true,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
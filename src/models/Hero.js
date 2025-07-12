import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);

import { Schema, model } from "mongoose";

const industrialOfferBannerModelSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buyNowText: { type: String, },
  learnMoreText: { type: String, },
  date: { type: String }, 
  time: { type: String }, 
  remainingDays: { type: Number, default: 0 },
  photoUrl: { type: String, required: true },
}, {
  timestamps: true,
});

export const IndustrialOfferBanner = model("IndustrialOfferBanner", industrialOfferBannerModelSchema);

import { Schema, model } from "mongoose";
import { IIndustrialBanner } from "./industrialBanner.interface";

const industrialBannerSchema = new Schema<IIndustrialBanner>(
  {
    title: { type: String, required: true },
    photoUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const IndustrialBanner = model<IIndustrialBanner>(
  "IndustrialBanner",
  industrialBannerSchema
);

import mongoose, { Schema, Document } from "mongoose";

export type ClientReviewType = Document & {
  name: string;
  roles: string[];
  testimonial: string;
  photoUrl: string;
};

const clientReviewSchema = new Schema<ClientReviewType>(
  {
    name: { type: String, required: true },
    roles: { type: [String], required: true },
    testimonial: { type: String, required: true },
    photoUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ClientReviewModel = mongoose.model<ClientReviewType>("ClientReview", clientReviewSchema);

export default ClientReviewModel;

import { model, Schema } from "mongoose";

const seminarSchema= new Schema( {
    topic: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    remainingDays: { type: Number, required: true },
  },
  {
    timestamps: true,
  }) 

export const Seminar = model("Seminar", seminarSchema);
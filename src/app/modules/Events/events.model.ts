import mongoose, { Schema, Document } from "mongoose";
import { TEvent } from "./events.interface";


const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    photoUrl: { type: String, required: true },
    date: { type: Date, required: false },
  },
  { timestamps: true }
);

export const Event =mongoose.model<TEvent & Document>("Event", EventSchema);

import { Schema, model } from "mongoose";
import { IApplication } from "./Jobaplications.interfaces";

const applicationSchema = new Schema<IApplication>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String },
    resumeLink: { type: String, required: true },
    academicQualifications: { type: String,  required: true },
    presentAddress: { type: String, required: true },
    portfolio: { type: String },
    exprience: { type: String },
    whyHireYou: { type: String },
    vacancy:{type: String}, 
    certifications: [{ type: String }],
    softSkills: [{ type: String }],
    hardSkills: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Application = model<IApplication>("Jobapplication", applicationSchema);

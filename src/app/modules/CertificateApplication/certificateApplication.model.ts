import { model, Schema } from "mongoose";
import { ICertificateApplications } from "./certificateApplication.interface";



const certificatesApplicationsSchema= new Schema<ICertificateApplications>(

    {
        studentId: { type: String, required: true },
        studentName: { type: String, required: true },
        courseName: { type: String, required: true },
        issueDate: { type: String, required: true },
        instructorName: { type: String, required: true },
        comment: { type: String, default: '' },
        status: { type: String, enum: ["pending", "approved", "rejected",  "applied"], default: 'pending' },
        photoUrl: { type: String },
        appliedAt: { type: Date, default: Date.now },
        approvedAt: { type: Date }, 
    
    },
    {
        timestamps: true,
      } 
) 
export const CertificateApplication = model<ICertificateApplications>(
    "CertificateApplication",
    certificatesApplicationsSchema
  )
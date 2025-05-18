import { Schema, model } from 'mongoose';
import { ICertificate } from './certificate.interface';




const certificateSchema = new Schema<ICertificate>(
  {
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    courseName: { type: String, required: true },
    issueDate: { type: String, required: true },
    instructorName: { type: String, required: true },
    comment: { type: String, default: '' },
    certificateId: { type: String, },

    status: { type: String, enum: ['pending', 'issued', 'revoked', 'applied', 'approved', 'rejected'], default: 'issued' },
    photoUrl: { type: String },
    appliedAt: { type: Date, default: Date.now },
    approvedAt: { type: Date }, 
  },
  {
    timestamps: true,
  }
);

export const Certificate = model<ICertificate>('Certificate', certificateSchema);

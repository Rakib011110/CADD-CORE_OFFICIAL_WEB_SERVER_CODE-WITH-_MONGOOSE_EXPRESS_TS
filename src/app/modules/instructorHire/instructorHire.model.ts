import { Schema, model } from 'mongoose';
import { IInstructorHire } from './instructorHire';
import { string } from 'zod';

const instructorSchema = new Schema<IInstructorHire>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  expertise: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { 
    type: String, 
    required: true,
    enum: ['beginner', 'intermediate', 'expert']
  },
  message: { type: String, required: true },
  cvUrl: { type: String, required: true },
  
  review: { type: String, enum: [ 'ongoing' , 'completed']  },
}, {
  timestamps: true
});

export const InstructorHire = model<IInstructorHire>('InstructorHire', instructorSchema);
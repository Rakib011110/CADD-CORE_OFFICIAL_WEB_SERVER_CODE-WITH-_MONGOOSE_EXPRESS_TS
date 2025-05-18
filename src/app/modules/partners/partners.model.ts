import { Schema, model } from 'mongoose';
import { IPartner } from './partners.interface';

const partnerSchema = new Schema<IPartner>(
  {
    title: { type: String, required: true },
    photoUrl: { type: String, required: true },
    description: { type: String,  },
  },
  { timestamps: true }
);

export const Partner = model<IPartner>('Partner', partnerSchema);

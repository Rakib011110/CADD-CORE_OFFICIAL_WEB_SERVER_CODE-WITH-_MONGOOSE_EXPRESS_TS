import { Document, ObjectId } from 'mongoose';

export interface ICourseSchedule extends Document {
  course: ObjectId;
  batchNo: string;
  onlineStartDate: Date;
  onlineFinishDate: Date;
  onJobTrainingStart?: Date;
  certificationDate?: Date;
  freelancingSessionDate?: Date;
  internshipStartDate?: Date;
  experienceCertificateDate?: Date;
}
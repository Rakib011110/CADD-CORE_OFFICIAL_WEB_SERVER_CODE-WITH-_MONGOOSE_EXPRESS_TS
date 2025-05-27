import { Schema, model } from 'mongoose';
import { ICourseSchedule } from './CourseSchedule.interfaces';

const CourseScheduleSchema = new Schema<ICourseSchedule>({
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  batchNo: { type: String, required: true },
  onlineStartDate: { type: Date, required: true },
  onlineFinishDate: { type: Date, required: true },
  onJobTrainingStart: { type: Date },
  certificationDate: { type: Date },
  freelancingSessionDate: { type: Date },
  internshipStartDate: { type: Date },
  experienceCertificateDate: { type: Date }
}, { timestamps: true });

export const CourseSchedule = model<ICourseSchedule>('CourseSchedule', CourseScheduleSchema);

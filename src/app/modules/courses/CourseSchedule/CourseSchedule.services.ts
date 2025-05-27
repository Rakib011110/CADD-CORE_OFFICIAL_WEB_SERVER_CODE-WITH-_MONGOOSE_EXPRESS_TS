import { Course } from './../courses.model';
import { ICourseSchedule } from "./CourseSchedule.interfaces";
import { CourseSchedule } from "./CourseSchedule.model";

export const createSchedule = async (data: ICourseSchedule) => {
  const schedule = (await CourseSchedule.create(data))

  // Push schedule ID to course
  await Course.findByIdAndUpdate(schedule.course, {
    $push: { courseSchedules: schedule._id },
  });

  return schedule;
};

export const getScheduleById = async (id: string) => {
  return await CourseSchedule.findById(id).populate('course');
};

export const getAllSchedules = async () => {
  return await CourseSchedule.find().populate('course');
};

export const updateSchedule = async (id: string, data: Partial<ICourseSchedule>) => {
  return await CourseSchedule.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSchedule = async (id: string) => {
  return await CourseSchedule.findByIdAndDelete(id);
};

export const getSchedulesByCourse = async (courseId: string) => {
  return await CourseSchedule.find({ course: courseId });
}; 

 export const CourseScheduleService = {
  createSchedule,
  getScheduleById,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
  getSchedulesByCourse
};

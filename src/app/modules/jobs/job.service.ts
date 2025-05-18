import { TJobs } from "./job.interface";
import { Job } from "./job.model";

export const createJob = async (payload: TJobs) => await Job.create(payload);
export const getAllJobs = async () => await Job.find();
export const getSingleJob = async (slug: string) => await Job.findOne({ slug });
export const deleteJob = async (id: string) => await Job.findByIdAndDelete(id);
export const updateJob = async (id: string, payload: TJobs) =>
  await Job.findByIdAndUpdate(id, payload, { new: true });

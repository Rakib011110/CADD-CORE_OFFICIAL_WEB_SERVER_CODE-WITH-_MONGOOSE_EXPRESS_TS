import { TSeminar } from "./seminar.inteface";
import { Seminar } from "./seminar.model";

const createSeminarInDb = async (payload: TSeminar) => {
  return await Seminar.create(payload);
};

const getAllSeminarsFromDb = async () => {
  return await Seminar.find();
};

const getASeminarFromDb = async (id: string) => {
  return await Seminar.findById(id);
};

const updateSeminarInDb = async (id: string, updateData: Partial<TSeminar>) => {
  return await Seminar.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteSeminarFromDb = async (id: string) => {
  return await Seminar.findByIdAndDelete(id);
};

export const SeminarServices = {
  createSeminarInDb,
  getAllSeminarsFromDb,
  getASeminarFromDb,
  updateSeminarInDb,
  deleteSeminarFromDb,
};

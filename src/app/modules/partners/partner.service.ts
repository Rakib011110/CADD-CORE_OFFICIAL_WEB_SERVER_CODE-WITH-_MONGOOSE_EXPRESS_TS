import { IPartner } from "./partners.interface";
import { Partner } from "./partners.model";

export const PartnerService = {
  create: async (data: IPartner) => {
    return await Partner.create(data);
  },

  getAll: async () => {
    return await Partner.find();
  },

  getById: async (id: string) => {
    return await Partner.findById(id);
  },

  update: async (id: string, data: Partial<IPartner>) => {
    return await Partner.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id: string) => {
    return await Partner.findByIdAndDelete(id);
  },
};

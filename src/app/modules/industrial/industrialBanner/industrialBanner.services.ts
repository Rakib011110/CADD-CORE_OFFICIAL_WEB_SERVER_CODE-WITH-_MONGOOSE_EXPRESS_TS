import { IndustrialBanner } from "./industrialBanner.model";
import { IIndustrialBanner } from "./industrialBanner.interface";

export const IndustrialBannerService = {
  createBanner: async (data: IIndustrialBanner) => {
    return await IndustrialBanner.create(data);
  },

  getAllBanners: async () => {
    return await IndustrialBanner.find();
  },

  deleteBannerById: async (id: string) => {
    return await IndustrialBanner.findByIdAndDelete(id);
  },
};

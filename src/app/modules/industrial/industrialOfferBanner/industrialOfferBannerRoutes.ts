import  express  from 'express';
import { IndustrialOfferBannerController } from './industrialOfferBannerController';



 const router = express.Router();


 router.get("/",  IndustrialOfferBannerController.getAllOfferBanners ) 
 router.post("/",  IndustrialOfferBannerController.createOfferBanner ) 
 router.patch("/:id",  IndustrialOfferBannerController.updateIndustrialOfferBanner ) 
 router.delete("/:id",  IndustrialOfferBannerController.deleteIndustrialOfferBanner ) 



export const IndustrialCourseBannerRouter= router
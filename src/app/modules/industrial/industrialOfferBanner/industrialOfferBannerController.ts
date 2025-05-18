import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { IndustrialOfferBannerSerices } from "./industrialOfferBannerServices";
import httpStatus from "http-status";


const createOfferBanner = catchAsync(async(req,res)=>{
const result = await IndustrialOfferBannerSerices.createIndustrialOfferBannerInDb(req.body);

sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Offer banner created successfully",
    data: result,
  });
})
 

const getAllOfferBanners= catchAsync(async(req, res)=>{
const result = await IndustrialOfferBannerSerices.getIndustrialOfferBnnarfromDb();

sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Offer banner retrieved successfully",
    data: result,
  });
}) 

const updateIndustrialOfferBanner= catchAsync(async(req,res)=>{
    const result = await IndustrialOfferBannerSerices.updateIndustrialOfferBannerInDb(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Offer banner updated successfully",
        data: result,
      });
}
)
    
const deleteIndustrialOfferBanner= catchAsync(async(req,res)=>{
    const result = await IndustrialOfferBannerSerices.deleteIndustrialOfferBannerinDB(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Offer banner deleted successfully",
        data: result,
      });
}
)  


export const IndustrialOfferBannerController= {
createOfferBanner, 
getAllOfferBanners, 
updateIndustrialOfferBanner, 
deleteIndustrialOfferBanner

}
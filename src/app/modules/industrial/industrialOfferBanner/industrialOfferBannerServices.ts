import { create } from 'domain';
import { IndustrialOfferBanner } from './industrialOfferBannerModel';
import { IIndustrialOfferBanner } from './industrialOfferBannerInterface';


const createIndustrialOfferBannerInDb = async (payload: IIndustrialOfferBanner) => {
const result = await IndustrialOfferBanner.create(payload);

return result;
}



const getIndustrialOfferBnnarfromDb= async()=>{
    const result = await IndustrialOfferBanner.find({});
    return result;
} 

const updateIndustrialOfferBannerInDb= async(id: string ,payload: IIndustrialOfferBanner) => {
const result = await IndustrialOfferBanner.findByIdAndUpdate(id, payload, { new: true });
return result;
} 

const deleteIndustrialOfferBannerinDB= async(id:string)=>{
    const result = await IndustrialOfferBanner.findByIdAndDelete(id);
    return result;
} 

export const IndustrialOfferBannerSerices= {
createIndustrialOfferBannerInDb,
getIndustrialOfferBnnarfromDb, 
updateIndustrialOfferBannerInDb, 
deleteIndustrialOfferBannerinDB

}
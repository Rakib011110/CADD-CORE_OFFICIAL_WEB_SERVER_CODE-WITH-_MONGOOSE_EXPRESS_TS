import ClientReviewModel from "./clientReview.model";

export const createClientReview = async (payload: any) => {
  return await ClientReviewModel.create(payload);
};

export const getAllClientReviews = async () => {
  return await ClientReviewModel.find();
};

export const getSingleClientReview = async (id: string) => {
  return await ClientReviewModel.findById(id);
};

export const updateClientReview = async (id: string, payload: any) => {
  return await ClientReviewModel.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteClientReview = async (id: string) => {
  return await ClientReviewModel.findByIdAndDelete(id);
};


export const clientReviewService = {
  createClientReview,
  getAllClientReviews
,
  getSingleClientReview,
    updateClientReview,
    deleteClientReview,
};  
    
    
    

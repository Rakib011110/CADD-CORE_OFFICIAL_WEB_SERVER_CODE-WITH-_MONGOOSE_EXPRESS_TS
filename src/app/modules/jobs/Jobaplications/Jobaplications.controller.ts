import { catchAsync } from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ApplicationService } from "./Jobaplications.services";

export const applyToJob = catchAsync(async (req, res) => {
  const result = await ApplicationService.applyToJob(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Application submitted",
    data: result,
  });
});

export const getApplications = catchAsync(async (req, res) => {
  const result = await ApplicationService.getApplicationsByJob(req.params.jobId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Applications fetched",
    data: result,
  });
});
 


const getAllApplications= catchAsync(async(req,res)=>{
const result= await ApplicationService.getAllaplications()

sendResponse(res, {
  statusCode: 200,
  success: true,
  message: "Applications fetched All",
  data: result,
});
})


const getASingleAplications= catchAsync(async(req,res)=>{
const id = req.params.id
const result = await ApplicationService.getAplicationsById(id)

sendResponse(res, {
  statusCode: 200,
  success: true,
  message: "Applications fetched ",
  data: result,
});
})



const deleteAplications= catchAsync(async(req,res)=>{
const id = req.params.id

const result =await ApplicationService.getAplicationsById(id)

sendResponse(res, {
  statusCode: 200,
  success: true,
  message: "Applications fetched ",
  data: result,
});

})

export const ApplicationController= {
    applyToJob, 
    getApplications, 
    getAllApplications, 
    getASingleAplications, 
    deleteAplications



}
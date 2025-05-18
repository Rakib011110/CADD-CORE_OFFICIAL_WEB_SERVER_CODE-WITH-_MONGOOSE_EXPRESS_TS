import { IApplication } from "./Jobaplications.interfaces";
import { Application } from "./Jobaplications.model";

export const applyToJob = async (payload: IApplication) => await Application.create(payload);
export const getApplicationsByJob = async (jobId: string) => await Application.find({ jobId });

const getAllaplications= async()=>{
    return await Application.find().populate("jobId"); 



}

const getAplicationsById= async(id:string, )=>{ 
const result = await Application.findById(id) 
return result 
}


const deleteAplications= async(id: string)=>{
const result = await Application.findByIdAndDelete(id)
result
}


export const ApplicationService= {
applyToJob, 
getApplicationsByJob, 
getAllaplications, 
getAplicationsById, 
deleteAplications

}
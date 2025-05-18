import { ICertificate } from "./certificate.interface";
import { Certificate } from "./certificate.model";

const createCertificate = async (payload: ICertificate) => {
  const newCertificate = await Certificate.create(payload);
  return newCertificate;
};

const getCertificates = async () => {
  return Certificate.find();
};

const updateCertificate = async (id: string, payload: Partial<ICertificate>) => {
  return Certificate.findByIdAndUpdate(id, payload, { new: true });
};




const getCertificateById = async (id: string) => {
    return Certificate.findById(id);
  };
  
  const getCertificatesByStudentId = async (studentId: string) => {
    return Certificate.find({ studentId });
  };
  
  


const deleteCertificates= async (id: string)=>{
return await Certificate.findByIdAndDelete(id)    

}



// ----------for applied--------------- 



// ✅ Get student applications
export const getApplicationsByStudentId = async (studentId: string) => {
  return await Certificate.find({ studentId });
};

export const applyForCertificate = async (studentId: string) => {
    // Check if already applied or approved
    const alreadyApplied = await Certificate.findOne({
      studentId,
      status: { $in: ["applied", "approved"] },
    });
  
    if (alreadyApplied) {
      throw new Error("You have already applied for a certificate.");
    }
  
    // Find pending certificate
    const cert = await Certificate.findOne({
      studentId,
      status: "pending",
    });
  
    if (!cert) {
      throw new Error("No pending certificate found for this student.");
    }
  
    cert.status = "applied";
    cert.appliedAt = new Date();
    await cert.save();
  
    return cert;
  };
  

// ✅ Admin views
export const getAllApplications = async () => {
  return await Certificate.find();
};




export const getPendingCertificates = async () => {
  return await Certificate.find({ status: "pending" });
};

export const getApprovedCertificates = async () => {
  return await Certificate.find({ status: "approved" });
};

// ✅ Approve a certificate (Admin)
export const approveApplication = async (id: string) => {
  return await Certificate.findByIdAndUpdate(
    id,
    { status: "approved", approvedAt: new Date() },
    { new: true }
  );
};




export const CertificateService = {
  createCertificate,
  getCertificates,
  updateCertificate,
  getCertificateById, 
  getCertificatesByStudentId, 
  deleteCertificates, 

// for students
getApplicationsByStudentId,
applyForCertificate,
getAllApplications,
getPendingCertificates,
getApprovedCertificates,
approveApplication,

  
};

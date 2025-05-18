// ✅ Import Interfaces & Models
import { ICertificate } from "../certificates/certificate.interface";
import { CertificateApplication } from "./certificateApplication.model";

// ✅ Create certificate (Admin)
export const createCertificate = async (data: ICertificate) => {
  return await CertificateApplication.create(data);
};

// ✅ Get student applications
export const getApplicationsByStudentId = async (studentId: string) => {
  return await CertificateApplication.find({ studentId });
};

export const applyForCertificate = async (studentId: string) => {
    // Check if already applied or approved
    const alreadyApplied = await CertificateApplication.findOne({
      studentId,
      status: { $in: ["applied", "approved"] },
    });
  
    if (alreadyApplied) {
      throw new Error("You have already applied for a certificate.");
    }
  
    // Find pending certificate
    const cert = await CertificateApplication.findOne({
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
  return await CertificateApplication.find();
};

export const getPendingCertificates = async () => {
  return await CertificateApplication.find({ status: "pending" });
};

export const getApprovedCertificates = async () => {
  return await CertificateApplication.find({ status: "approved" });
};

// ✅ Approve a certificate (Admin)
export const approveApplication = async (id: string) => {
  return await CertificateApplication.findByIdAndUpdate(
    id,
    { status: "approved", approvedAt: new Date() },
    { new: true }
  );
};


export const certificateService = {
    createCertificate,
    getApplicationsByStudentId,
    applyForCertificate,
    getAllApplications,
    getPendingCertificates,
    getApprovedCertificates,
    approveApplication,
}
import express from "express";
import { applyCertificate, approveCertificate, createCertificate, getAllCertificateApplications, getPendingCertificates, getStudentApplications } from "./certificateApplication.controller";


const router = express.Router();

router.post("/create", createCertificate); // ✅ Admin creates certificate template
router.post("/apply", applyCertificate);   // ✅ Student applies for pending one
router.get("/student/:studentId", getStudentApplications); // ✅ For frontend search
router.get("/all", getAllCertificateApplications); // ✅ Admin dashboard
router.get("/pending", getPendingCertificates);    // ✅ Admin review
router.patch("/approve/:id", approveCertificate);   // ✅ Admin approves application 
export const certificatesApplicationsRoutes = router;

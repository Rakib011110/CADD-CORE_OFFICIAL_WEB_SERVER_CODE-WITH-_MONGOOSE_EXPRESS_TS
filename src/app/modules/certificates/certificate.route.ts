import express from 'express';
import { applyCertificate, createCertificate, deleteCertificates, getCertificateById, getCertificates, getCertificatesByStudentId, updateCertificate,getStudentApplications ,getAllCertificateApplications,getPendingCertificates,approveCertificate} from './certificate.controller';


const router = express.Router();

router.post('/', createCertificate);
router.get('/', getCertificates);
router.patch('/:id', updateCertificate);

router.get('/:id', getCertificateById);
router.delete('/:id', deleteCertificates);  



router.get('/student/:studentId', getCertificatesByStudentId);  
router.post("/apply", applyCertificate);   
router.get("/student/:studentId", getStudentApplications); 
router.get("/student/all", getAllCertificateApplications); 
router.get("/student/pending", getPendingCertificates);    
router.patch("/approve/:id", approveCertificate);   
export const certificatesApplicationsRoutes = router;




export const CertificateRoutes = router;

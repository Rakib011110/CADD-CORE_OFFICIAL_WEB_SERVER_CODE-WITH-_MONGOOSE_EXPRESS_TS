import express  from 'express';
import { SeminarControllers } from './seminar.controller';



const router = express.Router(); 

router.post("/create-seminar", SeminarControllers.createSeminar);
router.get("/:id", SeminarControllers.getASeminar);
router.get("/", SeminarControllers.getAllSeminars);
router.delete("/:id", SeminarControllers.deleteSeminar);
router.patch("/:id", SeminarControllers.updateSeminar);
export const SeminarRoutes = router;
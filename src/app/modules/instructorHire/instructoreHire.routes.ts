import express from 'express';
import { InstructorController } from './instructoreHire.controller';

const router = express.Router();

router.post('/',InstructorController.createInstructor);

router.get('/', InstructorController.getAllInstructors);
router.get('/:id', InstructorController.getSingleInstructor);

// Protected routes

router.patch('/:id',
//   validateRequest(InstructorValidation.update),
InstructorController.updateInstructor
);

router.delete('/:id', InstructorController.deleteInstructor);

router.post(
  '/:id/review',
//   validateRequest(InstructorValidation.review),
  InstructorController.reviewInstructor
);

export const InstructorHereRoutes = router;
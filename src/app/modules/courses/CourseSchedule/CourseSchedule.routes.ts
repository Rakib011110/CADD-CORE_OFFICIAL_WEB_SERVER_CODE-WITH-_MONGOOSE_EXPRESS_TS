import express from 'express';
import { CourseScheduleController } from './CourseSchedule.controller';

const router = express.Router();

router.post('/', CourseScheduleController.createSchedule);
router.get('/', CourseScheduleController.getAllSchedules);
router.get('/:id', CourseScheduleController.getSchedule);
router.put('/:id', CourseScheduleController.updateSchedule);
router.delete('/:id', CourseScheduleController.deleteSchedule);

export const CourseScheduleRoutes = router;
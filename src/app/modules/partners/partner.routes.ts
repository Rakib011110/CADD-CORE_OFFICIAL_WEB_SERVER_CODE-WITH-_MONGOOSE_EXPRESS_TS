import express from 'express';
import { PartnerController } from './partner.controller';

const router = express.Router();

router.post('/', PartnerController.create);
router.get('/', PartnerController.getAll);
router.get('/:id', PartnerController.getById);
router.put('/:id', PartnerController.update);
router.delete('/:id', PartnerController.delete);

export const PartnersRoutes= router;

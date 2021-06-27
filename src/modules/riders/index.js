import { Router } from 'express';
import { asyncHandler } from '../../middlewares/asyncHandler';
import Controller from './riders.controller';

const router = Router();

router.post('/riders', asyncHandler(Controller.createRider));

export default router;


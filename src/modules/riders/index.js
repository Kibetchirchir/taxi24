import { Router } from 'express';
import { asyncHandler } from '../../middlewares/asyncHandler';
import DriverController from '../drivers/drivers.controller';
import Controller from './riders.controller';

const router = Router();

router.post('/riders', asyncHandler(Controller.createRider));
router.get('/riders', asyncHandler(DriverController.getDriver));

export default router;


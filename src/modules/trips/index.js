import {Router} from 'express';
import { asyncHandler } from '../../middlewares/asyncHandler';
import Controller from './trips.controller';


const router = Router();

router.post('/trip/rider/:rider_id', asyncHandler(Controller.createTrip));

export default router;

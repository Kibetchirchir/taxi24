import {Router} from 'express';
import { asyncHandler } from '../../middlewares/asyncHandler';
import Controller from './trips.controller';


const router = Router();

router.post('/trips/riders/:rider_id', asyncHandler(Controller.createTrip));
router.get('/trips/riders', asyncHandler(Controller.getTrip));


export default router;

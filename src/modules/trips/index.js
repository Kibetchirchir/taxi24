import {Router} from 'express';
import { asyncHandler } from '../../middlewares/asyncHandler';
import Controller from './trips.controller';


const router = Router();

router.post('/trips/riders/:rider_id', asyncHandler(Controller.createTrip));
router.get('/trips/riders', asyncHandler(Controller.getTrip));
router.get('/trips/:trip_id/:status', asyncHandler(Controller.updateTrip));


export default router;

import { Router } from 'express';
import driverRouter from './drivers'
import ridersRouter from './riders'
import tripRouter from './trips/';


const router = Router();

router.use(driverRouter);
router.use(ridersRouter);
router.use(tripRouter)

export default router;

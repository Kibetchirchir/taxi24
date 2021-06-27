import { Router } from 'express';
import driverRouter from './drivers'
import ridersRouter from './riders'


const router = Router();

router.use(driverRouter);
router.use(ridersRouter);

export default router;
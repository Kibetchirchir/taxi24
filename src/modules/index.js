import { Router } from 'express';
import driverRouter from './drivers'


const router = Router();

router.use(driverRouter);

export default router;
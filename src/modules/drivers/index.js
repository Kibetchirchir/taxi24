import { Router } from 'express';
import Controller from './drivers.controller'
import { asyncHandler } from '../../middlewares/asyncHandler'
import { userValidator } from './drivers.validators';
import {celebrate}  from 'celebrate';

const router = Router();

router.post('/drivers', asyncHandler(Controller.createDriver));

export default router;
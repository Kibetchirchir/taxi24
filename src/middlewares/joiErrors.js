import { isCelebrate } from 'celebrate';
import { BAD_REQUEST } from '../constants/statusCodes';

const joiErrors = () => (err, req, res, next) => {
if (!isCelebrate(err)) return next(err);
  const errors = err.joi.details || [];

  console.log('dfsdgfdgd', errors);

  const message = 'Bad Request';

  return res.status(BAD_REQUEST).json({
    status: BAD_REQUEST,
    message: errors.length && errors[0] ? errors[0].message || message : message,
    errors,
  });
};

export default joiErrors
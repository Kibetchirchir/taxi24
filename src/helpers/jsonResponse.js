import { SERVER_ERROR } from '../constants/statusCodes';
/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {ServerResponse} Response
 */
const jsonResponse = (data) => {
  const status = data.status || 500;
  return data.res.status(status).json({
    status,
    ...data,
    res: undefined,
  });
};

export default jsonResponse;

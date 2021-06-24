import { SERVER_ERROR } from "../constants/statusCodes";

const isProduction = process.env.NODE_ENV === 'production';


export const asyncHandler = (cb) => async (req, res, next) => {
    try {
        await cb(req, res, next)
    } catch (err) {

        console.log(err);

        let message = err.message || err.data.errorMessage;

        const status = err.status || SERVER_ERROR;

        return res.status(status).json({
          status,
          message,
          error: err,
        });
    }
}
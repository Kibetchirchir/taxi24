import express from 'express';
import createError from 'http-errors';
import api from './modules';
import JoiErrors from './middlewares/joiErrors';

const app = express();

app.use(express.json({ limit: '3mb' }));


app.use('/api/v1', api);




// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || SERVER_ERROR;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });});

export default app;

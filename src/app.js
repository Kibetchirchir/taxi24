import express from 'express';
import createError from 'http-errors';

const app = express();

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error
  res.status(err.status);
  res.json({ error: err.message });
});

export default app;

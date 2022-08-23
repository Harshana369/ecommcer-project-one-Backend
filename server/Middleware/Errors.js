
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//The error that comes when the url is wrong (Client)
// pass karana url id waradi unahama(500 -> clint api end point eka hariyata dunne na -> 404)
// ObjectId eka waradiyata dunnahama(200 -> clint send karana id adala deta ekak hoyaganna ba -> 500)
const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
export { notFound, errorHandler };

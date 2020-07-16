const handleError = (res, error) => {
  console.log("handleError", error);
  res.status(error.status || 500).json({ ...error, message: error.message });
};

module.exports = handleError;

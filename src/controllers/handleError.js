const handleError = (res, error) => {
  res.status(error.status || 500).json(error);
};

module.exports = handleError;
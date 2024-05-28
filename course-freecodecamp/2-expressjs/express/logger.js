const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();
  console.log(`Url: ${url}, Method: ${method}, Time: ${time}`);
  next();
};

module.exports = logger;

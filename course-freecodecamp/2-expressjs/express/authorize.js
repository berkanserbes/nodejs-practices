const authorize = (req, res, next) => {
  console.log("Authorized");
  const { user } = req.query;
  if (user) {
    req.user = { name: user, id: Math.floor(Math.random() * 100) };
    res.status(200).send(res.json(req.user));
    next();
  }
  res.status(401).send("Unauthorized");
  next();
};

module.exports = authorize;

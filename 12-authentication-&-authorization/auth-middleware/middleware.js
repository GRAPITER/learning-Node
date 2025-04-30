const jwt = require("jsonwebtoken");

async function AuthMiddleware(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const tockenValue = authHeader && authHeader.split(" ")[1];
    if (!tockenValue) {
      return res.status(404).json({
        status: false,
        message: "there is no tocken found",
      });
    }

    const decodedToken = jwt.verify(tockenValue, process.env.PRIVATE_KEY_JWT);
    if (!decodedToken) {
      return res.status(404).json({
        status: false,
        message: "there is no decoded tocken found",
      });
    }

    req.userInfo = decodedToken;

    next();
  } catch (error) {
    res.status(404).json({
      status: false,
      message: "there is an error",
    });
  }
}

module.exports = AuthMiddleware;

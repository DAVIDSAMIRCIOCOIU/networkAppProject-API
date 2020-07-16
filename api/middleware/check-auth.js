const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Get what comes after Bearer
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    console.log(decoded);
    next();
  } catch (erro) {
    return res.status(401).json({
      message: "Auth failed.",
    });
  }
};

const jwt = require("jsonwebtoken")
require("dotenv").config({ path: `${__dirname}/../.env` });
const tokenSecret=process.env.TOKEN_SECRET


exports.generateToken = (user) => {
    return jwt.sign(
        {
            data: user,
        },
        tokenSecret,
        { expiresIn: "30d" }
    );
}

exports.verify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) res.status(403).json({ error: "You are not authorized to access this api" });
    else {
      jwt.verify(token.split(" ")[1], tokenSecret, (err, value) => {
        if (err) res.status(500).json({ error: "your token has expired" });
        req.user = value.data;
        console.log(value.data);
        next();
      });
    }
  }; 
  
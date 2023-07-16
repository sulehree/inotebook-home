var jwt = require("jsonwebtoken");

const JWT_SECRET_TOKEN = "AbbasismyN@meandiliveinL@hore"; // it should be store in some global place. config or env file

const fetchUser = async (req, res, next) => {
  // here is next
  //Get the user from the JWT token and id to req object
  const token = req.header("auth-token"); // we will send request through header
  if (!token) {
    res.status(401).send({ error: "Please Authenticate using a valid Token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET_TOKEN); // this will verify the token with the jwt secret token that we used to create the token

    req.user = data.user;

    next(); // this line will execute the next function where the fetchuser function was called
  } catch (error) {
    res.status(401).send({ error: "Give Valid JWT Token" });
  }
};

module.exports = fetchUser;

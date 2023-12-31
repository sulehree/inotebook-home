const express = require("express");
const User = require("../models/users.model");
const router = express.Router();
const { check, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs"); // to hash the password and to store in db
var jwt = require("jsonwebtoken"); // want to create JWT Token
const fetchAuthentincUser = require("../middlewares/fetchuser.middleware");

const JWT_SECRET_TOKEN = process.env.JWT_TOKEN;
let success = false;
const controller = require("../controllers").user;
// const controller = require("../../controllers").user;
router.post("/create", controller.signUp);
//Route:1=> Endpoint /auth/create : here we will entertain the request of Creating User, no login required
// router.post(
//   "/create",
//   // email must be an email
//   check("name", "minimum lengith is 3").notEmpty().isLength({ min: 3 }),
//   // email must be an email
//   check("email", "Email Should be in Proper format").isEmail(),
//   // password must be at least 5 chars long
//   check("password", "Password cant be empty").isLength({ min: 5 }),

//   async (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     try {
//       let user = await User.findOne({ email: req.body.email }); // Here i am checking wether this email already exist or not
//       if (user) {
//         return res.status(400).json({
//           success: false,
//           error:
//             req.body.email +
//             " Email is Already Existisng , Choose some other email address",
//         }); //if exist .. email id will be shown
//       }
//       // here i will apply hash on the password
//       let salt = bcrypt.genSaltSync(10);
//       let hashPassword = await bcrypt.hash(req.body.password, salt);

//       user = await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashPassword,
//       });
//       //cont tokenExpir=30min

//       let data = {
//         user: {
//           id: user.id,
//         },
//       };

//       const Auth_Token = jwt.sign(data, JWT_SECRET_TOKEN);
//       console.log(Auth_Token);
//       res.json({ success: true, Auth_Token });
//     } catch (error) {
//       console.error(error.message);
//       res.json({ success: false, error: Error.message });
//     }

//     // User Created by using promise
//     //  User.create({
//     //     name: req.body.name,
//     //     email: req.body.email,
//     //     password: req.body.password,
//     //   })
//     //     .then((user) => res.json(user))
//     //     .catch((Error) => {
//     //       console.log(Error);
//     //       res.json(Error.message);
//     //     });
//   }
// );

//Route 2: Endpoint /auth/login : here we will entertain the request of validating User, no login required
router.post("/login", controller.login);
// router.post(
//   "/login",
//   // email must be an email
//   check("email", "Email Should be in Proper format").isEmail(),
//   // password must be at least 5 chars long
//   check("password", "Wrong Password ").isLength({ min: 5 }),

//   async (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }
//     const { email, password } = req.body; // defactarizatin of variable into two variables.

//     try {
//       const user = await User.findOne({ email: email }); // Here i am checking wether this email already exist or not
//       if (!user) {
//         return res.status(400).json({
//           success: false,
//           error:
//             email + " Email Dont Exist, Check Email and Password are correct",
//         });
//       } else {
//         if (!bcrypt.compareSync(password, user.password)) {
//           return res.status(400).json({
//             success: false,
//             error:
//               " Credentials are not Correct, Check Email and Password are correct",
//           });
//         }
//       }

//       const data = {
//         user: {
//           id: user.id,
//         },
//       };

//       const Auth_Token = jwt.sign(data, JWT_SECRET_TOKEN);
//       console.log(Auth_Token);
//       res.json({ success: true, Auth_Token });
//     } catch (error) {
//       res.json({ success: false, error: Error.message });
//       console.error(error.message);
//     }
//   }
// );

// Route 3: Endpoint /auth/getuser  : here we will get the logged in User Detail, Login Required
router.post("/getUser", fetchAuthentincUser, async (req, res) => {
  try {
    let userId = req.user.id;
    // console.log(userId);
    const user = await User.findById(userId).select("-password"); // this Select will select all other value other then password

    res.send(user);
    console.log(user);
  } catch (error) {
    res.json(Error.message);
    console.error(error.message);
  }
});

module.exports = router;

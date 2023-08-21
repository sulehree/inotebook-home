const mongoose = require("mongoose");
require("dotenv").config();
mongoURI = process.env.DBSERVER;

newconnectToDB = async () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, //  Abbas
    })
    .then(() => {
      console.log("Data Base Connected");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

// oldconnectToDB = async () => {
//   // provided by digimarks
//   try {
//     const result = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       family: 4, //  Abbas
//     });
//     console.log("db connected");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

module.exports = { newconnectToDB };

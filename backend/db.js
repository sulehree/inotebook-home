const mongoose = require("mongoose");
mongoURI = "mongodb://localhost:27017/inotebook";

newconnectToDB = async () => { // made by me by using promise

    // As mongoose.connect is a return promise, we can use then and catch
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, //  Abbas
  }).then(() => { console.log("Data Base Connected") })
    .catch((err) => { console.log("err", err) });
}

oldconnectToDB = async () => {  // provided by digimarks
  try {
    const result = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, //  Abbas
    });
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
};







module.exports=  { oldconnectToDB, newconnectToDB };
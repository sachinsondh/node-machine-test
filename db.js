const mongoose = require("mongoose");

module.exports = function () {
  //initializing the database using mongoose
  const db = "mongodb://localhost:27017/test";
  mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log(`Connected to ${db}...`));

  mongoose.connection //checking the connection
    .once("open", () => console.log("connected to"))
    .on("error", (error) => {
      console.log(error);
    });
};

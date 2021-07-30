const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// route registering
app.use("/", require("./router/noteRoute"));

// database connection
mongoose.connect(
  "mongodb://localhost:27017/quickNote",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err, done) {
    if (err) {
      console.log("Error connecting to db >>" + err);
    } else {
      console.log("db connection successs");
    }
  }
);

// server connection
app.listen(3005, function () {
  console.log("Server is running on port : 3005");
});

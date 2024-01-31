const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;
console.log(process.env);

mongoose.connect(
  "mongodb+srv://kshitijshresth2004:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.6h8tujm.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});


// require pakages
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/Models");
require("dotenv").config();
const app = express();

app.get("/", async function (req, res) {
  let data = await User.find({});
  res.send(data);
});
// data server code for mongo db
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectToDatabase();

// server create express
app.listen(3000);

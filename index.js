// require pakages
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/Models");
const app = express();

app.get("/", async function (req, res) {
  let data = await User.find({});
  res.send(data);
});

// data server code for mongo db
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://pritam7796419792:Api%401234@api.gnnrght.mongodb.net/?retryWrites=true&w=majority&appName=Api"
    );
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

connectToDatabase();

// server create express
app.listen(3000);

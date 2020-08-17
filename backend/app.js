const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("mongodb databse connection establiched succefully");
});

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`Listening on port ${port}`);
});

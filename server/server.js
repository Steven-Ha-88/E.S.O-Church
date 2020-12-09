const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Dotenv loads environment variables from a .env file into process.env.
require("dotenv").config();

// creates express applciaition
const app = express();
const port = process.env.PORT || 5000;

//allows us to request third party data from localhost
app.use(cors());
// adds body-parser middleware, which will transform raw request body into json format.
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// importing routes for given endpoint
const songsRouter = require("./routes/songs");

// app uses endpoints for following url and its routes
app.use("/songs", songsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

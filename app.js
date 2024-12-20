const express = require("express");
const app = express();

require("dotenv").config();
const connectDB = require("./db/db-connect");

app.use(express.static("./public")); // run the starting html file

// run the methods and routes
app.use(express.json());
// user and admin routes
const registerLoginRoute = require("./routes/register-login-route");
app.use("/", registerLoginRoute);

// lost items routes
const lostItemRoute = require("./routes/lost-item-route");
app.use("/api/items", lostItemRoute);

const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION_STRING);

    app.listen(5000, () => {
      console.log("server is listening on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

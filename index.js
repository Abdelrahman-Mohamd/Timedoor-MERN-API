// main entry point to connect everything together

const express = require("express");
const connectDB = require("./config/db.config");
const config = require("./config/env.config");
const mongoose = require("mongoose");
const appointmentRoute = require("./routes/appointment.route");
const app = express();

// middlewares:
// parse incoming JSON payloads from the request body and make the parsed data available in req.body as JS objects
app.use(express.json());
// parse incoming URL-encoded requests from forms and make the parsed data available in req.body as JS objects
app.use(express.urlencoded({ extended: false }));

// base route
app.use("/timedoorSchedule", appointmentRoute);

connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
});

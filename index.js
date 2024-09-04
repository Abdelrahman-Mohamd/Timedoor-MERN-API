const express = require("express");
const mongoose = require("mongoose");
const appointmentRoute = require("./routes/appointment.route");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/timedoorSchedule", appointmentRoute);

// home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(
    "mongodb+srv://abdelrahman181181:Tdd4j2SEu23EIC8C@timedoor-api.kgahw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=timedoor-api"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

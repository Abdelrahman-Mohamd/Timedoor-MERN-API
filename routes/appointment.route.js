// define the API endpoints and link them to the appropriate controller functions
const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment.model");
const {
  getAllAppointments,
  getAppointmentById,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointment.controller");

// get all appointments
router.get("/getAllAppointments", getAllAppointments);
// get appointment by id
router.get("/getAppointment/:id", getAppointmentById);
// add appointment
router.post("/addAppointment", addAppointment);
// update / edit appointment
router.put("/updateAppointment/:id", updateAppointment);
// delete appointment
router.delete("/deleteAppointment/:id", deleteAppointment);

module.exports = router;

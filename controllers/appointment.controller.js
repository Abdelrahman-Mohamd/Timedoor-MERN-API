// logic for handling requests. Each function corresponds to an endpoint

const Appointment = require("../models/appointment.model");

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: "Appointment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const addAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(200).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (appointment) {
      const updatedAppointment = await Appointment.findById(req.params.id);
      res.status(200).json(updatedAppointment);
    } else {
      res.status(404).json({ message: "Appointment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (appointment) {
      res.status(200).json({ message: "Appointment deleted successfully" });
    } else {
      res.status(404).json({ message: "Appointment not found" });
    }
  } catch (error) {}
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  addAppointment,
  updateAppointment,
  deleteAppointment,
};

const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  courseName: { type: String, required: true }, // Teens Web, Teens JS , Kids Scratch, Kids AI, Kids Pyhton, Kids Pygame, Kids Roblox, Juniors Beginner, Juniors Intermediate, Juniors Advanced
  students: [
    {
      name: { type: String, required: true },
      attended: { type: Boolean, required: true },
    },
  ],
  scheduleDetails: [
    {
      dayOfWeek: { type: String, required: true }, // e.g., 'Monday'
      startingTime: { type: String, required: true }, // e.g., '09:00'
      date: { type: Date, required: false },
    },
  ],
  sessionType: { type: String, required: true }, // online - offline
  language: { type: String, required: true }, // arabic - english
  sessionStatus: { type: String, required: true }, // done - cancelled
  notes: { type: [String], required: false }, // e.g., 'stopped at page 55', 'send them the book'
  numberOfAttendeesOffline: { type: Number, required: false }, // e.g., 4, 13
  twoAttendeesPerOnlineSession: { type: Boolean, required: false }, // true - false
  oneSessionPerDay: { type: Boolean, required: true }, // true - false
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;

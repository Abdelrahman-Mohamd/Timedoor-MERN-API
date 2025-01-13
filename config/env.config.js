require("dotenv").config(); // Load environment variables from .env file

// Configuration object for the app
const config = {
  port: process.env.PORT || 3000, // Set the port from environment or default to 3000
  dbURI:
    process.env.DB_URI ||
    "mongodb+srv://abdelrahman181181:Tdd4j2SEu23EIC8C@timedoor-api.kgahw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=timedoor-api", // Fallback to a default DB URI
};

module.exports = config;

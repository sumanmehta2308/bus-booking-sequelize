const express = require("express");
const sequelize = require("./config/database");
require("dotenv").config();
const app = express();
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized successfully");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

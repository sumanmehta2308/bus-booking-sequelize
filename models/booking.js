const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define(
  "booking",
  {
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Bookings",
    timestamps: false,
  }
);
module.exports = Booking;

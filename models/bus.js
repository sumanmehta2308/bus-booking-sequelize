const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Bus = sequelize.define(
  "bus",
  {
    busNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Buses",
    timestamps: false,
  }
);

module.exports = Bus;

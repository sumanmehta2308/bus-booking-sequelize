const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    timestamps: false,
  }
);
module.exports = User;

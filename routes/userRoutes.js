const express = require("express");
const router = express.Router();
const {createUser,getUserBookings} = require("../controllers/bookingController");
router.post("/", createUser);
router.get("/:id/bookings", getUserBookings);
module.exports = router;

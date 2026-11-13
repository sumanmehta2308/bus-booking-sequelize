const express = require("express");
const router = express.Router();
const {createBus,getBusBookings,} = require("../controllers/bookingController");
router.post("/", createBus);
router.get("/:id/bookings", getBusBookings);
module.exports = router;

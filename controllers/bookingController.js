const { User, Bus, Booking } = require("../models");
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);

    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    const user = await User.findByPk(userId);
    const bus = await Bus.findByPk(busId);

    if (!user || !bus) {
      return res.status(404).json({
        message: "User or Bus not found",
      });
    }

    const booking = await Booking.create({
      userId,
      busId,
      seatNumber,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: {
        userId: req.params.id,
      },
      include: [
        {
          model: Bus,
          as: "bus",
          attributes: ["busNumber"],
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBusBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: {
        busId: req.params.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

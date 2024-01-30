// The car controller is a very generic built one.
// This will be worked on later on but for now, use this. 

const Car = require("../models/carModel");
const mongoose = require("mongoose");

// Get all cars
const getCars = async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
};

// Get a single car
const getCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car does not exist" });
  }

  const car = await Car.findById(id);
  if (!car) {
    return res.status(404).json({ error: "Car does not exist" });
  }
  res.status(200).json(car);
};

// Create new car
const createCar = async (req, res) => {
  const { name, online_name, games, summary } = req.body;

  try {
    const car = await Car.create({ name, online_name, games, summary });
    res.status(200).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a car
const deleteCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car does not exist" });
  }

  const car = await Car.findOneAndDelete({ _id: id });

  if (!car) {
    return res.status(404).json({ error: "Car does not exist" });
  }
  res.status(200).json(car);
};

// Update a car
const updateCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Car does not exist" });
  }

  const car = await Car.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!car) {
    return res.status(404).json({ error: "Car does not exist" });
  }
  res.status(200).json(car);
};

module.exports = {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
};

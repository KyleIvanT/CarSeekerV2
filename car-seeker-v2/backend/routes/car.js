// As of: 9/21/2023
// Routes have been built to match generic built controller. 

const express = require("express");
const { 
    getCars,
    getCar,
    createCar,
    deleteCar,
    updateCar

} = require("../controllers/carController");

const router = express.Router();

// GET all Cars
router.get("/", getCars);

// GET SINGLE Car
router.get("/:id", getCar);

// POST new Car
router.post("/", createCar);

// DELETE Single Car
router.delete("/:id", deleteCar);

// UPDATE new Car
router.patch("/:id", updateCar);

module.exports = router;

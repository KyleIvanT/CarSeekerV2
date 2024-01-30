const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    make:{
      type: String,
      require: true
    },
    model:{
      type:String,
      require: true
    },
    year:{
      type: Number,
      require: true
    },
    engine:{
      type: Number,
      enum: [3,4,5,6,8,10,12]
    },
    bodyType:{
      type: String,
      enum: ['Sedan','Coupe','SUV','Truck','Convertible','CrossOver','Hatchback','Wagon']
    },
    seats:{
      type: Number,
      enum:[2,4,5,6,7,8]
    },
    transmission:{
      type: String,
      enum: ['Automatic','Manual','CVT']
    },
    induction: {
      type: String,
      enum: ['NA', 'Supercharged', 'Turbo']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);

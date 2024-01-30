require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const carRoutes = require('./routes/car')

//express app
const app = express();

app.use(cors());

// global middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
// this is one example of middleware
app.use('/api/car', carRoutes);

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        })
    })
    .catch((e) => {
        console.log(e)
    });
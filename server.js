require('dotenv').config();
const express = require('express');
const morgan = require("morgan")

const server = express();


server.use(morgan("common"))


server.get('/', (req, res) => {
    res.status(200).json({API: "up and running"})
})




module.exports = server
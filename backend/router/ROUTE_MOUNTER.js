const express = require("express")
const admin = require("./admin")
const doctor=require('./doctor')
module.exports = app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin", admin)
app.use('/doctor',doctor)
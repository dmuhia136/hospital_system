const express = require("express")
const app = express()
require("dotenv").config()
require("cors")
const mongoConnect = require("./config/config")

const port = process.env.PORT
app.use(require("./router/ROUTE_MOUNTER"));

mongoConnect.connect()
app.listen(port, "192.168.0.102", () => {
    console.log("You are listening to port ", port)
})


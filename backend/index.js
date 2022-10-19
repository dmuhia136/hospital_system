const express = require("express")
const app = express()
require("dotenv").config()
require("cors")
const port =process.env.PORT

app.listen(port,()=>{
console.log("You are listening to port ",port)
})


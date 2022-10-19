const express = require("express")
const adminRouter = express.Router()
const adminController = require("../controller/admin")

adminRouter.post('/', adminController.create)
adminRouter.post('/login',adminController.login)

module.exports = adminRouter
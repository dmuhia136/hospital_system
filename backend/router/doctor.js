const express = require("express")
const doctorRouter = express.Router();
const doctorController = require("../controller/doctor")

doctorRouter.post('/', doctorController.create)
doctorRouter.get('/', doctorController.getAll)
doctorRouter.patch('/:id', doctorController.update)
doctorRouter.get('/:id', doctorController.getOne)
doctorRouter.delete('/:id', doctorController.delete)

module.exports = doctorRouter
const doctorModel = require('../model/doctor')

exports.create = async (req, res) => {
    try {
        var doctor = new doctorModel(req.body)
        var response = await doctor.save()
        res.json({ status: true, body: response })
    } catch (error) {
        res.json({ status: false, messsage: error.message })
    }
}

exports.getAll = async (req, res) => {
    try {
        var doctor = await doctorModel.find({}).sort({ createdAt: -1 });
        res.json({ status: true, body: doctor })
    } catch (error) {
        res.json({ status: false, messsage: error.message })
    }
}

exports.update = async (req, res) => {
    try {
        await doctorModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.json({ status: true, message: "Doctor information updated" })
    } catch (error) {
        res.json({ status: false, messsage: error.message })
    }
}

exports.getOne = async (req, res) => {
    try {
        var doctor = await doctorModel.findById(req.params.id)
        res.json({ status: true, body: doctor })
    } catch (error) {
        res.json({ status: false, messsage: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        await doctorModel.findByIdAndDelete(req.params.id)
        res.json({ status: true, message: "Doctor deleted" })
    } catch (error) {
        res.json({ status: false, messsage: error.message })
    }
}
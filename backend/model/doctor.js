const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AdminSchema = mongoose.Schema(
    {
        name: { type: String },
        role: { type: String },
        gender: { type: String, default: "male" },
        contact: { type: String },
        onduty: { type: Boolean, default: false },

    },

    { timestamps: true, autoIndex: true, autoCreate: true }
);
const Admin = mongoose.model("doctor", AdminSchema);
module.exports = Admin;

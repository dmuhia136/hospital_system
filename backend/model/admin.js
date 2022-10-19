const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AdminSchema = mongoose.Schema(
    {
        name: { type: String },
        username: { type: String },
        password: { type: String },
        email: {
            type: String, unique: true, required: "Please enter your email",
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
    },

    { timestamps: true, autoIndex: true, autoCreate: true }
);
const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin;

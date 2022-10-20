const adminModel = require("../model/admin")
const middleware = require('../shared/middleware')
const bcrypt = require("bcrypt");
const rounds = 5;


exports.create = async (req, res) => {
    try {
        var admin = await adminModel.find({ email: req.body.email })
        if (admin.length != 0) {
            res.json({ status: false, message: "User with that email already exists" })
        } else {
            bcrypt.hash(req.body.password, rounds, (error, hash) => {
                if (error) {
                    res.status(500).json({ error: "there was an error" });
                } else {
                    const newuser = new adminModel({
                        name: req.body.name,
                        username: req.body.username,
                        password: hash,
                        email: req.body.email
                    });
                    newuser
                        .save()
                        .then(async (user) => {
                            console.log(user);
                            res.status(200).json({
                                status: true,
                                token: middleware.generateToken(user),
                                body: user,
                                message: "Admin created successfully"
                            });
                        })
                }
            });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        adminModel
            .findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ status: false, error: "No user with that email found" });
                } else {
                    bcrypt.compare(req.body.password, user.password, async (error, match) => {
                        if (error) {
                            res.json({ status: false, message: error.message });
                        } else if (match) {
                            res
                                .status(200)
                                .json({ status: true, token: middleware.generateToken(user), body: user });
                        } else {
                            res.status(403).json({ status: false, error: "password did not match" });
                        }
                    });
                }
            })

    } catch (error) {
        res.json({ status: false, message: error.message });
    }
};
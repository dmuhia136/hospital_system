var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);
exports.connect = () => {
    mongoose.connection
        .once("open", function () {
            console.log("Mongodb connected");
        })
        .on("error", function (error) {
            console.log("Mongodb error:", error);
        });
}
   
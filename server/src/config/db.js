const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error : ", err));
};

module.exports = connectDB;

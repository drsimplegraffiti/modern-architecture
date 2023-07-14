const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const logger = require("../logger/logger");

let {MONGO_URI,NODE_ENV, MONGO_URI_DEV} = process.env;

const connectDB = async () => {
    try {
        let connect_uri = NODE_ENV === "production" ? MONGO_URI : MONGO_URI_DEV;
        const conn = await mongoose.connect(connect_uri);
        logger.info(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
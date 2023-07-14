const dotenv = require("dotenv");
const express = require("express");
const { notFound, errorHandler } = require("./utils/errors/errorhandler");
const connectDB = require("./database/db");
const userRoutes = require("./routes/user.routes");
const limiter = require("./utils/ratelimit");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use("/api/v1", userRoutes);


app.use(notFound);
app.use(errorHandler);


module.exports = app;
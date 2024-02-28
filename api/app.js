var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
require('dotenv').config();
const ErrorHandler = require("./middlewares/errors/ErrorHandle");

const cors = require('cors');

var app = express();
app.get('env');

app.use(cors());



app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);


// error handler
app.use(ErrorHandler);

module.exports = app;

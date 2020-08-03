const express = require("express");
const bodyParser = require("body-parser");
const fs = require ("fs");

const app = express();
app.use(bodyParser.json());

const routes = require("./routes/line-routes");
app.use("/", routes);


module.exports = app;

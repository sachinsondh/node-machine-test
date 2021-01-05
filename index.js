const express = require("express"); //import express for sending http request
const app = express(); //initializing express

const mongoose = require("mongoose"); //importing mongoose for connecting to mongodb server
const routes = require("./routes"); //importing routes from current directory
require("./db")(); //initilizing the database
app.use(routes); //using routes

const port = process.env.PORT || 3000; //stating the port

app.listen(port, () => console.log(`listening on port ${port}`)); //initializing console

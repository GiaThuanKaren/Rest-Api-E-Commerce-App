const express = require('express');
const mongoose = require('mongoose');
const MainRoute = require('./routes/index');
const ConnectDB = require('./Config/db')
const app = express();
app.use(express.json());

ConnectDB()
// mongodb+srv://<username>:<password>@cluster0.a6cyoli.mongodb.net/?retryWrites=true&w=majority
MainRoute(app);
app.listen(5000,()=>{
    console.log("Backend server is running at" + 5000);
})
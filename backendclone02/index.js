import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoute.js";


let app = express();

app.use(bodyParser.json());

//let mongoUrl = "mongodb+srv://Admin:123@cluster0.s3sie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongoose.connect(mongoUrl)

let connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})
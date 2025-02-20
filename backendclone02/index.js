import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoute.js";


let app = express();

app.use(bodyParser.json());
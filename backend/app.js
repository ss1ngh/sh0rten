import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from "dotenv";
import Url from './src/models/Url.js';
import shortenUrl from './src/routes/urlRoutes.js'
import connectDB from './src/config/db.js';
import { redirectFromShortUrl } from './src/controller/urlController.js';
dotenv.config("./env")
const app = express();

connectDB();

app.use(express.json())

app.use("/api/create", shortenUrl );

app.get("/:id", redirectFromShortUrl);

app.listen(5000, ()=> {
    console.log("Server is running on http://localhost:5000");
})
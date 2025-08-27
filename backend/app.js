import express from 'express';
import { nanoid } from 'nanoid';
import dotenv from "dotenv";
import Url from './src/models/Url.js';
import shortUrl from './src/routes/urlRoutes.js'
import connectDB from './src/config/db.js';

dotenv.config("./env")
const app = express();

connectDB();

app.use(express.json())

app.use("/api/create", shortUrl );

app.get("/:id", redirectFromShortUrl);

app.listen(5000, ()=> {
    console.log("Server is running on http://localhost:5000");
})
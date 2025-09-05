import express from 'express';
import dotenv from "dotenv";
import connectDB from './src/config/db.js';
import urlRoutes from './src/routes/urlRoutes.js'
import { redirectFromShortUrl } from './src/controller/redirectController.js';

dotenv.config("./.env")

const app = express();

connectDB();

app.use(express.json())

app.use("/api", urlRoutes );

app.get("/:shortId", redirectFromShortUrl);


app.listen(5000, ()=> {
    console.log("Server is running on http://localhost:5000");
})
import express from 'express';
import dotenv from "dotenv";
import connectDB from './src/config/db.js';
import urlRoutes from './src/routes/urlRoutes.js'
import { redirectFromShortUrl } from './src/controller/redirectController.js';
import cors from 'cors';

dotenv.config("./.env")

const PORT = process.env.PORT

const app = express();

app.use(cors({
     origin: "http://localhost:3000",
     credentials: true,
    }));

connectDB();

app.use(express.json())

app.use("/api", urlRoutes );

app.get("/:shortId", redirectFromShortUrl);


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
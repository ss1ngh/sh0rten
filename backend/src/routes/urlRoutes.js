import express from "express";
import  {createShortUrl}  from "../controller/urlController.js";
import { generateQrCode } from "../controller/qrController.js";

const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/qr/:shortId", generateQrCode)

export default router;

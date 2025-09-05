import URL from "../models/url.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: "URL is required" });
        }

        const shortID = nanoid(8);

        await URL.create({
            shortId: shortID,
            fullUrl : url,
        })

        res.status(201).json({
            shortUrl: `${req.protocol}://${req.get("host")}/${shortID}`,
            fullUrl: url
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

import URL from "../models/url.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    //check if the shortened URL already exists in the DB
    let existingUrl = await URL.findOne({ fullUrl: url });
    if (existingUrl) {
      return res.status(200).json({
        shortUrl: `${req.protocol}://${req.get("host")}/${existingUrl.shortId}`,
        fullUrl: existingUrl.fullUrl
      });
    }

    //otherwise create a new shortened URL
    const shortID = nanoid(8);

    const newUrl = await URL.create({
      shortId: shortID,
      fullUrl: url,
      totalClicks: 0
    });

    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get("host")}/${newUrl.shortId}`,
      fullUrl: newUrl.fullUrl
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

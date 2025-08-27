import { createShortUrlService } from "../services/urlServices.js";

export const createShortUrl = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: "URL is required" });
        }

        const newUrl = await createShortUrlService(url);

        res.status(201).json({
            shortUrl: `${process.env.APP_URL}/${newUrl.shortUrl}`,
            fullUrl: newUrl.fullUrl,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const redirectFromShortUrl= async(req, res) => {
    const {id} = req.params
    const url = await findUrlFromShortUrl(id)
    res.redirect(url);
}
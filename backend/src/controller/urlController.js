import URL from '../models/url.js';
import { nanoid } from 'nanoid';

export const createShortUrl = async (req, res) => {
  try {
    let { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: 'URL is required' });
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }

    // check if the shortened URL already exists in the DB
    let existingUrl = await URL.findOne({ fullUrl: url });
    if (existingUrl) {
      return res.status(200).json({
        shortUrl: `${process.env.BASE_URL || `${req.protocol}://${req.get('host')}`}/${existingUrl.shortId}`,
        fullUrl: existingUrl.fullUrl,
      });
    }

    //create short url
    const shortId = nanoid(8);

    const newUrl = await URL.create({
      shortId: shortId,
      fullUrl: url,
      totalClicks: 0,
    });

    res.status(201).json({
      shortUrl: `${process.env.BASE_URL || `${req.protocol}://${req.get('host')}`}/${newUrl.shortId}`,
      fullUrl: newUrl.fullUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
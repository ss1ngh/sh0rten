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

    
    const baseUrl = process.env.BASE_URL || 'https://sh0rten.onrender.com';

    //check if the URL exists in DB
    const existingUrl = await URL.findOne({ fullUrl: url });
    if (existingUrl) {
      return res.status(200).json({
        shortUrl: `${baseUrl}/${existingUrl.shortId}`,
        fullUrl: existingUrl.fullUrl,
      });
    }

    //create new short URL
    const shortId = nanoid(8);
    const newUrl = await URL.create({
      shortId,
      fullUrl: url,
      totalClicks: 0,
    });

    res.status(201).json({
      shortUrl: `${baseUrl}/${newUrl.shortId}`,
      fullUrl: newUrl.fullUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

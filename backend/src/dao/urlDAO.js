import Url from "../models/Url.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    const newUrl = new Url({
        fullUrl: longUrl,
        shortUrl: shortUrl
    });

    if (userId) {
        newUrl.user = userId;
    }

    await newUrl.save();
};

export const getShortUrl = async (shortUrl) => {
    return await Url.findOneAndUpdate({shortUrl : shortUrl }, {$inc:{clicks:1}});
};

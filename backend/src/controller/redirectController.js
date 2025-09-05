import URL from "../models/url.js";

export const redirectFromShortUrl = async(req, res) => {
    const {shortId} = req.params
    const url  = await URL.findOneAndUpdate(
        { shortId},
        { $inc : { totalClicks : 1}},
        { new: true}
    );

    if(!url) {
        return res.status(400).json({ message : "Short URL not found"});
    }

    res.redirect(url.fullUrl);
}
export const saveShortUrl = async(shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    if(userId){
        newUrl.user._id = userId;
    }
    newUrl.save();
}

export const getShortUrl = async(shortUrl) => {
    return await urlSchema.findOne({short_url : shortUrl})
}
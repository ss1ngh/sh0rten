import { generateNanoId } from "../utils/helper.js";
import Url from "../models/Url.js";

export const createShortUrlService = async (fullUrl) => {
    const shortUrl = await generateNanoId(7);

    const newUrl = await Url.create({
        fullUrl,
        shortUrl,
    });

    return newUrl;
};

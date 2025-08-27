import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    clicks: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);
export default Url;

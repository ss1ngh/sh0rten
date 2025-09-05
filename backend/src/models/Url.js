import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    totalClicks: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true }
);

const URL = mongoose.model("Url", urlSchema);
export default URL;


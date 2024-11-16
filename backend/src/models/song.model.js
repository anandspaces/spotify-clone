import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    audioUrl: {
        typre: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    albumID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false,
    },
}, { timestamps: true }
);

export const Song = mongoose.model("Song",songSchema);
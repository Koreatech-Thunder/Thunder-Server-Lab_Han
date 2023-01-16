import mongoose from "mongoose";
import { ThunderInfo } from "../interfaces/thunder/ThunderInfo";

const ThunderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dDay: {
        type: String,
        required: true
    },
    meetTime: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    hashtags: {
        type: [Number],
        required: true
    },
    hostId: {
        type: String,
        required: true
    },
    players: {
        type: [String]
    },
    limitPlayerCount: {
        type: Number,
        required: true
    },
    ceatedAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
});

export default mongoose.model<ThunderInfo & mongoose.Document>("Thunder", ThunderSchema);
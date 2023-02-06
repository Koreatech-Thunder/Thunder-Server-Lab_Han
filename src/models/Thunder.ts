import mongoose from "mongoose";
import { ThunderInfo } from "../interfaces/thunder/ThunderInfo";

const ThunderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: ''
    },
    deadline: {
        type: String,
        required: true,
        defalut: Date.now
    },
    content: {
        type: String,
        required: true,
        default: ''
    },
    hashtags: {
        type: [String],
        required: false,
        default: [null]
    },
    members: {
        type: [mongoose.Types.ObjectId],
        required: true
        //default:[hostId]
    },
    limitMembersCnt: {
        type: Number,
        required: true
    },
    ceatedAt: {
        type: Date,
        required: false
    },
    updateAt: {
        type: Date,
        required: false
    }
});

ThunderSchema.static('find', function(any, callback){return this.find({}, callback);});
export default mongoose.model<ThunderInfo & mongoose.Document>("Thunder", ThunderSchema);
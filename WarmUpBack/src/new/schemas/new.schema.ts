import { Schema } from "mongoose";

export const NewSchema = new Schema({
    created_at: Date,
    title: String,
    url: String,
    author: String,
    story_id: Number,
    story_title: String,
    story_url: String,
    status: {
        type: Boolean,
        default: true,
    }
});
import { Document } from "mongoose";

export interface New extends Document{
    created_at: Date;
    title: string;
    url: string;
    author: string;
    story_id: number;
    story_title: string;
    story_url: string;
    status: boolean;
}
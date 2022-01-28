import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NewDocument = New & Document

@Schema()
export class New{
    @Prop()
    created_at: Date

    @Prop()
    title: string

    @Prop()
    url: string

    @Prop()
    author: string

    @Prop()
    story_id: number

    @Prop()
    story_title: string

    @Prop()
    story_url: string

    @Prop()
    status: boolean
}

export const NewSchema = SchemaFactory.createForClass(New)
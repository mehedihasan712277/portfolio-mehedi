import { Schema, Document, model, Model } from "mongoose";

export interface IAbout extends Document {
    name: string;
    image: string;
    tag: string[];
    description: string;
    states?: {
        value: string;
        description: string;
    }[];
    createdAt?: Date;
    updatedAt?: Date;
}

const AboutSchema = new Schema<IAbout>(
    {
        name: { type: String, required: true, unique: true, trim: true },
        image: { type: String, required: true },
        tag: { type: [String], required: true },
        description: { type: String, required: true },
        states: {
            type: [
                {
                    value: { type: String, required: true },
                    description: { type: String, required: true },
                },
            ],
            default: [],
        },
    },
    { timestamps: true },
);

const About: Model<IAbout> = model<IAbout>("About", AboutSchema);

export default About;

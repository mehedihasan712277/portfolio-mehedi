import { Schema, Document, model, Model } from "mongoose";

export interface IProject extends Document {
    title: string;
    date: string;
    status: "Completed" | "Ongoing" | "Upcoming";

    shortDescription: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true, unique: true, trim: true },
        date: { type: String, required: true },
        status: { type: String, required: true, enum: ["Completed", "Ongoing", "Upcoming"] },
        shortDescription: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
);

const Project: Model<IProject> = model<IProject>("Project", ProjectSchema);

export default Project;

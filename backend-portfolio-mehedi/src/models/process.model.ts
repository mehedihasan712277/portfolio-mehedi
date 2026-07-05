import { Schema, Document, model, Model } from "mongoose";

export interface IProcess extends Document {
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ProcessSchema = new Schema<IProcess>(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String },
    },
    { timestamps: true },
);

const Process: Model<IProcess> = model<IProcess>("Process", ProcessSchema);

export default Process;

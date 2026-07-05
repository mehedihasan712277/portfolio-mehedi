import { Schema, Document, model, Model } from "mongoose";

export interface IResult extends Document {
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ResultSchema = new Schema<IResult>(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String },
    },
    { timestamps: true },
);

const Result: Model<IResult> = model<IResult>("Result", ResultSchema);

export default Result;

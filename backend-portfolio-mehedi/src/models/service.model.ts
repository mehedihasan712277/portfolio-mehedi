import { Schema, Document, model, Model } from "mongoose";

export interface IService extends Document {
    title: string;
    subtitle: string;
    shortDescription: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ServiceSchema = new Schema<IService>(
    {
        title: { type: String, required: true, unique: true, trim: true },
        subtitle: { type: String, required: true },
        shortDescription: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
);

const Service: Model<IService> = model<IService>("Service", ServiceSchema);

export default Service;

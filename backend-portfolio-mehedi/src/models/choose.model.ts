import { Schema, Document, model, Model } from "mongoose";

export interface IChoose extends Document {
    feature: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ChooseSchema = new Schema<IChoose>(
    {
        feature: { type: String, required: true, unique: true },
    },
    { timestamps: true },
);

const Choose: Model<IChoose> = model<IChoose>("Choose", ChooseSchema);

export default Choose;

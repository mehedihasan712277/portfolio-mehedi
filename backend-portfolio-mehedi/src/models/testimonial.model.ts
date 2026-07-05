import { Schema, Document, model, Model } from "mongoose";

export interface ITestimonial extends Document {
    name: string;
    designation: string;
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
    {
        name: { type: String, required: true },
        designation: { type: String, required: true },
        text: { type: String, required: true },
    },
    { timestamps: true },
);

const Testimonial: Model<ITestimonial> = model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;

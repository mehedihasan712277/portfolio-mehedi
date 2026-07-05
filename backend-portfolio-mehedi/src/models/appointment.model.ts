import { Schema, Document, model, Model } from "mongoose";

export interface IAppointment extends Document {
    name: string;
    phone: string;
    email: string;
    message: string;
    schedule: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
    {
        name: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        message: { type: String, required: true },
        schedule: { type: String, required: true },
    },
    { timestamps: true },
);

const Appointment: Model<IAppointment> = model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;

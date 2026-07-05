import { Request, Response } from "express";
import { sendToTelegram } from "../utils/telegram";
import Appointment from "../models/appointment.model";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { name, phone, email, message, schedule } = req.body;

        // Basic validation
        if (!name || !phone || !email || !message || !schedule) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const submission = new Appointment({
            name,
            phone,
            email,
            message,
            schedule,
        });

        await submission.save();
        await sendToTelegram(submission);

        res.status(201).json({
            success: true,
            message: "Submission received and sent to Telegram",
            data: submission,
        });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

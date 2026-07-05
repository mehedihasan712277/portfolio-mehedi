import axios from "axios";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export const sendToTelegram = async (data: { name: string; phone: string; email: string; message: string; schedule: string }) => {
    const text = `
🔔 *New Form Submission*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
✉️ *Email:* ${data.email}
📅 *Schedule:* ${data.schedule}

💬 *Message:*
${data.message}
  `.trim();

    try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
        });
        console.log("✅ Message sent to Telegram");
    } catch (error: any) {
        console.error("❌ Telegram Error:", error.response?.data || error.message);
        throw new Error("Failed to send Telegram message");
    }
};

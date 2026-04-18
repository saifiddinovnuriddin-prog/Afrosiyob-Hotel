import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 O'ZINGNI TOKEN VA CHAT ID
const TELEGRAM_TOKEN = "BOT_TOKEN_YOZ";
const CHAT_ID = "CHAT_ID_YOZ";

// 🔥 GOOGLE SCRIPT LINK
const GOOGLE_SCRIPT_URL = "GOOGLE_SCRIPT_URL_YOZ";

app.post("/booking", async (req, res) => {
  const data = req.body;

  try {
    // ===== TELEGRAM =====
    const text = `
🏨 YANGI BRON!

👤 ${data.firstName} ${data.lastName}
📞 +998${data.phone}
📧 ${data.email}

🏠 ${data.roomTitle}
📅 ${data.checkIn} - ${data.checkOut}

💰 ${data.totalPrice} UZS
🍳 Breakfast: ${data.withBreakfast ? "HA" : "YO‘Q"}
    `;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    });

    // ===== GOOGLE SHEETS =====
    await axios.post(GOOGLE_SCRIPT_URL, data);

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Xatolik" });
  }
});

app.listen(5000, () => console.log("Server ishladi 5000 portda"));
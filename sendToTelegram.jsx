const sendToTelegram = async (form) => {
  const token = "631082455:AAGqiw0RiN9cmWWSYuMsMKZm4M9OSEDQdts";
  const chatId = "6983052784";

  const text = `
📩 New Event Request

👤 Name: ${form.name}
👤 Surname: ${form.surname}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
💬 Comment: ${form.comment}
  `;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const data = await res.json();
    console.log("Telegram response:", data);
  } catch (err) {
    console.log("Telegram error:", err);
  }
};
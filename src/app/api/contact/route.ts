import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, contact, service, message } = await request.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { success: false, message: "Telegram env variables are missing" },
        { status: 500 }
      );
    }

    const text = `
Нова заявка з сайту

Ім'я: ${name}
Контакт: ${contact}
Послуга: ${service}
Повідомлення: ${message || "Не вказано"}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.log("Telegram error:", telegramData);

      return NextResponse.json(
        { success: false, message: "Telegram error", details: telegramData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Server error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
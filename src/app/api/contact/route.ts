import { NextResponse } from "next/server";

const requests = new Map<string, { count: number; time: number }>();

const LIMIT = 3;
const WINDOW = 60 * 60 * 1000; // 1 година

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const now = Date.now();
    const record = requests.get(ip);

    if (record && now - record.time < WINDOW) {
      if (record.count >= LIMIT) {
        return NextResponse.json(
          { success: false, message: "Too many requests" },
          { status: 429 }
        );
      }

      requests.set(ip, {
        count: record.count + 1,
        time: record.time,
      });
    } else {
      requests.set(ip, {
        count: 1,
        time: now,
      });
    }

    const { name, contact, service, message, website } = await request.json();

    // Honeypot: якщо це поле заповнене — це бот
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !contact || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      String(name).length > 100 ||
      String(contact).length > 100 ||
      String(service).length > 100 ||
      String(message || "").length > 1000
    ) {
      return NextResponse.json(
        { success: false, message: "Too long fields" },
        { status: 400 }
      );
    }

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

    if (!telegramResponse.ok) {
      const telegramData = await telegramResponse.json();
      console.log("Telegram error:", telegramData);

      return NextResponse.json(
        { success: false, message: "Telegram error" },
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
import { NextResponse } from "next/server";
import { Resend } from "resend";

// ۱. مجبور کردن Next.js به این که این مسیر را در زمان بیلد به صورت استاتیک رندر نکند
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // ۲. بررسی وجود کلید API قبل از هر چیز (جلوگیری از کرش در زمان مقداردهی)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("خطا: کلید API برای سرویس Resend تعریف نشده است.");
      return NextResponse.json(
        { error: "پیکربندی سرور ناقص است. لطفاً بعداً تلاش کنید." },
        { status: 500 }
      );
    }

    // ۳. مقداردهی ایمن داخل تابع
    const resend = new Resend(apiKey);

    const { name, email, message } = await request.json();

    // اعتبار سنجی مقادیر ورودی
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "لطفاً تمامی فیلدها را به درستی پر کنید." },
        { status: 400 }
      );
    }

    // ارسال ایمیل با استفاده از API سرویس Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", 
      to: process.env.RECEIVER_EMAIL || "mobinebr3@gmail.com", // ایمیل مقصد
      subject: `Form Contact: پیام جدید از طرف ${name}`,
      replyTo: email, 
      html: `
        <div dir="rtl" style="font-family: Tahoma, sans-serif; padding: 20px; line-height: 1.8; color: #333;">
          <h2 style="color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">پیام جدید از فرم تماس سایت</h2>
          <p><strong>نام فرستنده:</strong> ${name}</p>
          <p><strong>ایمیل فرستنده:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="margin: 0; font-weight: bold; color: #4b5563;">متن پیام:</p>
            <p style="margin-top: 5px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // اگر خود ریسند خطایی برگرداند
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "خطایی از سمت سرویس ارسال ایمیل رخ داد." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است. لطفاً بعداً تلاش کنید." },
      { status: 500 }
    );
  }
}
// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      id: "ballut",
      title: "سامانه هوشمند املاک بلوط",
      category: "web",
      categoryLabel: "وب اپلیکیشن",
      icon: "building",
      desc: "پلتفرم پیشرفته جستجو و مدیریت املاک با نقشه تعاملی.",
      longDesc: "پروژه بلوط یک راهکار جامع برای بازار مسکن است که از تکنولوژی‌های مدرن برای جستجوی سریع و دقیق استفاده می‌کند. این سیستم شامل پنل کاربری، مدیریت فایل‌های ملکی و چت اختصاصی بین مشاور و مشتری است.",
      tags: ["Next.js 15", "React Query", "Tailwind", "Django", "PostgreSQL", "Redis"],
      link: "https://ballut.app",
      github: "https://github.com/behshadrhp",
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
      accentColor: "sky",
      stats: { "سرعت لود": "۰.۸ ثانیه", "کاربران": "+۵۰۰۰" }
    },
    {
      id: "traxlate",
      title: "مترجم هوشمند Traxlate",
      category: "ai",
      categoryLabel: "هوش مصنوعی",
      icon: "brain",
      desc: "ترجمه آنی متون و اسناد با استفاده از مدل‌های زبانی پیشرفته.",
      longDesc: "این پلتفرم با بهره‌گیری از مدل‌های Gemini و DeepSeek، توانایی ترجمه دقیق متون تخصصی به ۱۸۰ زبان را دارد. همچنین سیستم OCR داخلی آن امکان استخراج متن از تصاویر را فراهم می‌کند.",
      tags: ["Python", "Go", "Next.js", "Gemini API", "Celery", "RabbitMQ", "Stripe"],
      link: "https://traxlate.com",
      github: "https://github.com/behshadrhp",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      accentColor: "violet",
      stats: { "تاخیر": "<200ms", "زبان‌ها": "+۱۸۰" }
    },
    {
      id: "shadpay",
      title: "درگاه پرداخت امن شادپی",
      category: "fintech",
      categoryLabel: "فین‌تک",
      icon: "shield",
      desc: "سیستم توزیع‌شده پردازش تراکنش‌های مالی با امنیت بالا.",
      longDesc: "شادپی یک زیرساخت فین‌تک برای مدیریت تراکنش‌های آنلاین است. این پروژه بر پایه معماری میکروسرویس طراحی شده و از رمزنگاری AES-256 برای امنیت داده‌ها استفاده می‌کند.",
      tags: ["Django", "DRF", "RabbitMQ", "Docker", "PostgreSQL", "JWT", "Redis"],
      github: "https://github.com/behshadrhp/ShadPay",
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
      accentColor: "orange",
      stats: { "امنیت": "AES-256", "معماری": "Microservice" }
    },
    {
      id: "shadium",
      title: "پلتفرم محتوای Shadium",
      category: "web",
      categoryLabel: "وب اپلیکیشن",
      icon: "rocket",
      desc: "سرویس اشتراک‌گذاری محتوا با جستجوی فوق سریع Elasticsearch.",
      longDesc: "یک پلتفرم مدرن برای انتشار و مدیریت محتوا که با استفاده از Elasticsearch، امکان جستجوی لحظه‌ای در بین میلیون‌ها رکورد را برای کاربران فراهم می‌کند.",
      tags: ["Elasticsearch", "Django", "Docker", "JWT", "PostgreSQL"],
      github: "https://github.com/behshadrhp/shadium-api",
      gradient: "from-rose-400 via-red-500 to-orange-500",
      accentColor: "rose",
      stats: { "جستجو": "Elastic", "آپتایم": "۹۹.۹٪" }
    },
    {
      id: "shadchat",
      title: "پیام‌رسان آنی ShadChat",
      category: "web",
      categoryLabel: "وب اپلیکیشن",
      icon: "sparkles",
      desc: "ارتباطات لحظه‌ای بر پایه پروتکل WebSocket و معماری توزیع‌شده.",
      longDesc: "یک چت‌روم پیشرفته که از Django Channels برای مدیریت ارتباطات دوطرفه استفاده می‌کند. قابلیت ارسال پیام، مدیریت وضعیت آنلاین بودن و تاریخچه پیام‌ها در آن پیاده‌سازی شده است.",
      tags: ["Django", "Django-Channels", "PostgreSQL", "WebSocket", "Redis"],
      github: "https://github.com/behshadrhp/shadchat",
      gradient: "from-indigo-400 via-blue-500 to-cyan-500",
      accentColor: "indigo",
      stats: { "تکنولوژی": "WS", "امنیت": "SSL" }
    },
    {
      id: "contentor",
      title: "تولید محتوای هوشمند Contentor",
      category: "ai",
      categoryLabel: "هوش مصنوعی",
      icon: "sparkles",
      desc: "دستیار هوشمند تولید محتوای متنی و سئو با OpenAI.",
      longDesc: "این ابزار به بازاریابان محتوا کمک می‌کند تا با استفاده از مدل‌های زبانی GPT، مقالات بهینه‌شده برای موتورهای جستجو را در کمترین زمان تولید کنند.",
      tags: ["Django", "React", "OpenAI API", "AWS", "Celery", "Stripe"],
      link: "https://contentor.ca",
      gradient: "from-fuchsia-400 via-pink-500 to-purple-600",
      accentColor: "fuchsia",
      stats: { "تولید محتوا": "AI", "سرعت": "بالا" }
    }
  ];

  return NextResponse.json(projects);
}
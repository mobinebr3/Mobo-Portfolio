import { NextResponse } from "next/server";

type Project = {
  id: string;
  title: string;
  category: "web" | "ai" | "landing";
  categoryLabel: string;
  type: "client" | "personal";
  role: string;
  year: string;
  icon: string;
  desc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  highlights?: string[];
  link?: string;
  github?: string;
  coverImage?: string;
  images?: string[];
  gradient: string;
  accentColor: string;
  confidential?: boolean;
  stats?: Record<string, string>;
};

export async function GET() {
  const projects: Project[] = [
    {
      id: "ballut",
      title: "سامانه هوشمند املاک بلوط",
      category: "web",
      categoryLabel: "وب اپلیکیشن",
      type: "client",
      role: "Frontend Developer",
      year: "2025",
      icon: "building",
      desc: "پلتفرم پیشرفته مدیریت و جستجوی املاک با تجربه کاربری سریع و مدرن.",
      longDesc:
        "بلوط یک پروژه کاملاً خلاقانه و بدون اتکا به فیگما یا دیزاین آماده بود که از صفر با تصمیم‌های طراحی و پیاده‌سازی خودم جلو رفت. این سامانه شامل سیستم سابسکریپشن، سه نقش کاربری، فرم‌های پیشرفته و بزرگ، نقشه تعاملی، بخش آکادمی، بلاگ و ساختار محتوایی منظم است. در این پروژه تمرکز اصلی روی تجربه کاربری روان، سرعت بالا، هندل دقیق وضعیت‌ها و معماری تمیز فرانت بوده است.",
      features: [
        "سیستم سابسکریپشن",
        "سه نقش کاربری",
        "فرم‌های پیشرفته و بزرگ",
        "نقشه تعاملی",
        "بخش آکادمی",
        "بخش بلاگ",
        "هندل دقیق متن‌ها و حالت‌ها",
        "رابط کاربری سریع و ریسپانسیو",
      ],
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "MapLibre GL",
        "MapLibre Draw",
        "Radix UI",
        "Framer Motion",
        "Lucide React",
        "Next Intl",
      ],
      highlights: [
        "طراحی و پیاده‌سازی کاملاً اختصاصی",
        "بدون استفاده از فیگما یا قالب آماده",
        "تمرکز روی UX و performance",
      ],
      link: "https://ballut.app",
      coverImage: "/projects/ballut/cover.jpg",
      images: [
        "/projects/ballut/1.jpg",
        "/projects/ballut/2.jpg",
        "/projects/ballut/3.jpg",
      ],
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
      accentColor: "sky",
      stats: {
        "نوع": "Client Project",
        "تمرکز": "Front-end",
        "وضعیت": "Live",
      },
    },
    {
      id: "contentor",
      title: "تولید محتوای هوشمند Contentor",
      category: "ai",
      categoryLabel: "هوش مصنوعی",
      type: "client",
      role: "Frontend Developer",
      year: "2023",
      icon: "sparkles",
      desc: "ابزار تولید محتوا و تصویر برای سوشیال مدیا با تجربه‌ای ساده و کاربردی.",
      longDesc:
        "Contentor یک پروژه کارفرمایی برای تولید محتوای متنی و تصویری بود که سال 2023 توسعه داده شد. یکی از بخش‌های مهم این پروژه، ادیتور عکس خام و اختصاصی بود که بدون استفاده از کتابخانه‌های آماده ساخته شد. این پروژه برای تولید خروجی‌های محتوایی، مدیریت جریان کار، و تجربه‌ای روان و سریع برای کاربر طراحی شد.",
      features: [
        "تولید محتوای متنی",
        "تولید محتوای تصویری",
        "ادیتور عکس خام اختصاصی",
        "هندل استیت‌های پیچیده",
        "خروجی مناسب سوشیال مدیا",
        "رابط کاربری سبک و سریع",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Canvas API",
        "Custom Image Editor",
      ],
      highlights: [
        "ادیتور عکس بدون کتابخانه آماده",
        "مناسب تولید محتوا برای سوشیال مدیا",
        "ساخته شده با تمرکز روی UX",
      ],
      link: "https://contentor.ca",
      coverImage: "/projects/contentor/cover.png",
      images: [
        "/projects/contentor/1.png",
        // "/projects/contentor/2.png",
      ],
      gradient: "from-rose-400 via-red-500 to-rose-700",
      accentColor: "fuchsia",
      stats: {
        "سال": "2023",
        "تمرکز": "AI Content",
        "وضعیت": "Live",
      },
    },
    {
      id: "traxlate",
      title: "مترجم هوشمند Traxlate",
      category: "ai",
      categoryLabel: "هوش مصنوعی",
      type: "client",
      role: "Frontend Developer",
      year: "2024",
      icon: "brain",
      desc: "ترجمه اسناد، متن و تصاویر با پشتیبانی از زبان‌های متعدد و تجربه کاربری ساده.",
      longDesc:
        "Traxlate یک پروژه کاملاً اختصاصی و خلاقانه بود که بدون تکیه بر فیگما یا دیزاین آماده از صفر پیش رفت. این سیستم برای ترجمه اسناد، متن و تصویر ساخته شد و فرایندهای پیچیده ترجمه را با یک رابط تمیز و ساده برای کاربر جمع‌وجور کرد. در این پروژه روی هندل مناسب متن‌ها، مدیریت استیت، فرم‌های ورودی و تجربه کاربری روان تمرکز زیادی انجام شد.",
      features: [
        "ترجمه متن و اسناد",
        "پشتیبانی از ورودی‌های مختلف",
        "هندل متن‌های طولانی",
        "فرم‌های بزرگ و دقیق",
        "رابط ساده و حرفه‌ای",
        "سیستم ترجمه چندزبانه",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Framer Motion",
      ],
      highlights: [
        "بدون استفاده از فیگما یا طرح آماده",
        "ساخته شده با خلاقیت کامل",
        "نمایش عمومی ندارد",
      ],
      confidential: true,
      gradient: "from-violet-500 via-purple-500 to-indigo-600",
      accentColor: "violet",
      stats: {
        "نوع": "Client Project",
        "تمرکز": "Front-end",
        "دسترسی": "Private",
      },
    },
    {
      id: "amlakapp",
      title: "لندینگ سایت املاک یار",
      category: "landing",
      categoryLabel: "لندینگ پیج",
      type: "client",
      role: "Frontend Developer",
      year: "2024",
      icon: "globe",
      desc: "صفحه فرود معرفی محصول با ساختار فروش‌محور و CTA واضح.",
      longDesc:
        "این لندینگ برای معرفی محصول و هدایت کاربر به اقدام اصلی طراحی شد. تمرکز کار روی ساختار شفاف، اسکرول روان، بخش‌بندی مناسب و نمایش حرفه‌ای اطلاعات بود.",
      features: [
        "ساختار فروش‌محور",
        "CTA واضح",
        "طراحی ریسپانسیو",
        "انیمیشن‌های سبک",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://amlakapp.ir",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accentColor: "emerald",
      stats: {
        "نوع": "Landing Page",
        "تمرکز": "Front-end",
        "وضعیت": "Live",
      },
    },
    {
      id: "roino",
      title: "لندینگ تیم روینو",
      category: "landing",
      categoryLabel: "لندینگ پیج",
      type: "client",
      role: "Frontend Developer",
      year: "2024",
      icon: "rocket",
      desc: "لندینگ تمیز و مینیمال برای معرفی تیم و خدمات.",
      longDesc:
        "روینو یک لندینگ تمیز و خوش‌ساخت بود که با تمرکز روی معرفی تیم، انتقال پیام سریع و تجربه‌ای مینیمال پیاده‌سازی شد. ساختار پروژه برای نمایش حرفه‌ای خدمات و هویت برند طراحی شده است.",
      features: [
        "معرفی تیم",
        "نمایش خدمات",
        "طراحی مینیمال",
        "ریسپانسیو کامل",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "https://roino.ir",
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
      accentColor: "orange",
      stats: {
        "نوع": "Landing Page",
        "تمرکز": "Front-end",
        "وضعیت": "Live",
      },
    },
  ];

  return NextResponse.json(projects);
}
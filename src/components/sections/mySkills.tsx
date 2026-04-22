"use client";

import React, { ReactNode } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Layout,
  Server,
  Database,
  Terminal,
  Figma,
  Framer,
  Github,
  Sparkles,
  Wand2,
  Box,
  Zap,
  MonitorSmartphone,
  BatteryFullIcon,
} from "lucide-react";
import { motion, } from "framer-motion";

import { BentoCard as Card } from "../ui/bento-grid";

import { FrontendVisual } from "./skillGridSections/FrontendVisual";
import { Marquee3D } from "./skillGridSections/Marquee3Dsections";
import { BackendVisual } from "./skillGridSections/BackendVisual";
import { UiUxVisual } from "./skillGridSections/UiUxVisual";








const features = [
  {
    className:
      "md:col-span-2 shadow-2xl shadow-blue-500/5 dark:shadow-blue-900/10",
    name: "معماری فرانت‌اند مدرن",
    description:
      "توسعه وب‌اپلیکیشن‌های پیشرفته با Next.js و React. تمرکز روی Performance، سئو تکنیکال (SSR/SSG)، ساختار مقیاس‌پذیر و کدنویسی تمیز با TypeScript.",
    Icon: Code2,
    href: "#",
    cta: "Learn more",
    background: <FrontendVisual />,
  },
  {
    name: "جادوی انیمیشن و UI/UX",
    Icon: Wand2,
    description:
      "پیاده‌سازی دقیق طرح‌های Figma به کد. خلق انیمیشن‌های نرم و تعاملی با استفاده از Framer Motion، GSAP و Anime.js برای خیره کردن کاربران.",
    href: "#",
    cta: "Learn more",
    className:
      "md:col-span-1 shadow-2xl shadow-purple-500/5 dark:shadow-purple-900/10",
    background: <UiUxVisual />,
  },
  {
    className:
      "md:col-span-1 shadow-2xl shadow-emerald-500/5 dark:shadow-emerald-900/10",
    name: "توسعه‌دهنده بک‌اند (فول‌استک)",
    description:
      "من فقط فرانت‌اند کار نمی‌کنم! تسلط به معماری بک‌اند با Node.js، طراحی دیتابیس، ساخت RESTful API و مدیریت ارتباطات Real-time بین کلاینت و سرور.",
    Icon: Server,
    background: <BackendVisual />,
    href: "#",
    cta: "Learn more",
  },
  {
    className:
      "md:col-span-2 shadow-2xl shadow-slate-500/5 dark:shadow-slate-900/10",
    name: "اکوسیستم و ابزارهای حرفه‌ای",
    description:
      "تسلط کامل بر ابزارهای روز دنیا از سیستم‌های ورژن کنترل (Git) و مدیریت پکیج‌ها تا کانتینرسازی (Docker) برای افزایش سرعت توسعه، دیباگینگ و کیفیت نهایی محصول.",
    Icon: Layers,
    href: "#",
    cta: "Learn more",
    background: <Marquee3D />,
  },
];

export default function SkillsBentoGrid() {
  return (
    <section
      className="relative w-full min-h-screen bg-background  py-20 px-4 md:px-8 overflow-hidden "
      dir="rtl">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 text-sm font-medium backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            تخصص‌ها و مهارت‌های من
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight">
            تسلط کامل از <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              فرانت‌اند
            </span>{" "}
            تا{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              بک‌اند
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
            ترکیبی از هنر طراحی UI/UX و مهندسی دقیق نرم‌افزار. خلق تجربه‌های
            کاربری چشم‌نواز با مدرن‌ترین ابزارها، در کنار توسعه بک‌اندی قدرتمند
            و مقیاس‌پذیر.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(320px,auto)]">
          {features.map((feature, idx) => (
            <Card key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    
    </section>
  );
}
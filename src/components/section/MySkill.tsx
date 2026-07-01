"use client";

import { Code2, Layers, Server, Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

import { BentoCard as Card } from "../ui/bento-grid";

import { FrontendVisual } from "./skillGridSections/FrontendVisual";
import { Marquee3D } from "./skillGridSections/Marquee3Dsections";
import { BackendVisual } from "./skillGridSections/BackendVisual";
import { UiUxVisual } from "./skillGridSections/UiUxVisual";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../ui/animated-shiny-text";

const features = [
  {
    className: "md:col-span-2  border border-border/50 ",
    name: "معماری فرانت‌اند مدرن",
    description:
      "ساخت وب‌اپلیکیشن‌های سریع، قابل‌اعتماد و بهینه با Next.js و React؛ با تمرکز بر عملکرد، سئو، معماری مقیاس‌پذیر و کدنویسی تمیز با TypeScript.",
    Icon: Code2,
    background: <FrontendVisual />,
    cta: "راه‌حل‌های مدرن و آماده‌ی رشد",
  },
  {
    name: "تجربه کاربری جذاب و تعاملی",
    Icon: Wand2,
    description:
      "تحویل طراحی‌های دقیق و روان از Figma به کد، همراه با انیمیشن‌های ظریف و تعامل‌های حرفه‌ای برای ایجاد تجربه‌ای ماندگار.",
    className: "md:col-span-1 border border-border/50 ",
    background: <UiUxVisual />,
    cta: "UI/UX شفاف، جذاب و حرفه‌ای",
  },
  {
    className: "md:col-span-1  border border-border/50 ",
    name: "توسعه بک‌اند قوی و قابل اعتماد",
    description:
      "ساخت APIهای امن و مقیاس‌پذیر با Node.js، طراحی دیتابیس حرفه‌ای و مدیریت ارتباطات real-time برای پایداری و سرعت در محصول.",
    Icon: Server,
    background: <BackendVisual />,
    cta: "عملکرد پایدار و ساختار مطمئن",
  },
  {
    className: "md:col-span-2 border border-border/50  ",
    name: "ابزارها و اکوسیستم حرفه‌ای",
    description:
      "استفاده از بهترین ابزارهای توسعه مثل Git، Docker و مدیریت پکیج‌ها برای افزایش سرعت، کیفیت و همکاری در پروژه‌ها.",
    Icon: Layers,
    background: <Marquee3D />,
    cta: "توسعه سریع‌تر، دقیق‌تر و حرفه‌ای‌تر",
  },
];
export function MySkill() {
  return (
    <section
      className="relative w-full min-h-screen bg-background  py-20 px-4 md:px-8 overflow-hidden "
      dir="rtl">
      {/* <div className="w-full h-full absolute inset-0 ">
        <div className="  flex h-[1990px] w-full flex-col items-center justify-center ">
          <AnimatedGridPattern
            numSquares={80}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            x={-1}
            y={-1}
            strokeDasharray={4}
            className={cn(
              "mask-[radial-gradient(1950px_circle_at_center,white,transparent)]",
              "inset-x-8 inset-y-[-31%] h-[201%] skew-y-13",
            )}
          />
        </div>
      </div> */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <AnimatedShinyText className="inline-flex items-center  text-md justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">    تخصص‌ها و مهارت‌های من</AnimatedShinyText>
        
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-400 tracking-tight">
            از ایده تا اجرا؛ از <br className="md:hidden" />
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
      <div className="bg-linear-to-t from-background   to-transparent w-full  bottom-0 left-0 h-50 z-50 absolute" />{" "}
      <div className="bg-linear-to-b from-background   to-transparent w-full  top-0 left-0 h-50 z-50 absolute" />
    </section>
  );
}

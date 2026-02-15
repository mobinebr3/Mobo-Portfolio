"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { PixelImage } from "../ui/pixel-image";
import { TextAnimate } from "@/components/ui/text-animate";
import { Code2, Sparkles, Terminal } from "lucide-react";

// انیمیشن‌های کانتینر اصلی
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// انیمیشن آیتم‌ها
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// انیمیشن شناور تصویر
const floatingAnimation = {
  y: [0, -15, 0],
  rotate: [0, 1, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function AboutMe() {
  // رفع باگ Hydration: تا زمانی که کامپوننت مونت نشود، رندر کلاینت را تایید نمی‌کنیم
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // یا یک Skeleton ساده برای جلوگیری از پرش محتوا
  }

  return (
    <section className="relative w-full py-24 lg:py-32 px-6 lg:px-20 min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* --- بخش تصویر (سمت چپ) --- */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
          <motion.div
            animate={floatingAnimation}
            className="relative z-10 w-full max-w-md"
          >
            <div className="relative rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md p-4 shadow-2xl shadow-slate-200/50">
              <div className="overflow-hidden rounded- pt-4  relative bg-slate-100">
                <PixelImage
                  src="/myphoto.jpg"
                  grid="4x6" 
                
                />
              </div>
              
              {/* Badge وضعیت */}
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Code2 size={24} />
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-slate-400 font-medium tracking-tighter">STATUS</p>
                    <p className="text-sm font-bold text-slate-800 tracking-tighter">در حال خلق کردن...</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- بخش متن (سمت راست) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 order-1 lg:order-2 text-right dir-rtl flex flex-col items-end lg:items-start"
        >
          <Terminal className="absolute -top-10 -left-10 w-64 h-64 text-slate-900/5 rotate-12 -z-10" />

          {/* Badge کوچک */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <Sparkles className="w-4 h-4 text-amber-500" />
              درباره من
            </span>
          </motion.div>

          {/* تایتل اصلی */}
          <motion.div variants={itemVariants} className="mb-6 w-full">
             <TextAnimate 
                animate="fadeInUp" 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
             >
                {"من کیستم؟"}
             </TextAnimate>
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 96 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="h-2 bg-gradient-to-l from-primary to-blue-400 rounded-full mt-2" 
             />
          </motion.div>

          {/* محتوای متن با حفظ تمام کلمات شما */}
          <div className="space-y-6 text-right w-full">
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 leading-8 md:leading-9 font-medium">
              من یک{" "}
              <Highlighter action="underline" >
                توسعه‌دهنده فرانت‌اند
              </Highlighter>{" "}
              هستم؛ پسری خلاق با ذهنی کنجکاو که همیشه به دنبال یادگیری، تجربه‌کردن و
              ساختن چیزهای جدید است. برای من برنامه‌نویسی فقط نوشتن کد نیست، بلکه راهی
              برای تبدیل ایده‌ها به واقعیتی قابل لمس است.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 leading-relaxed">
              دنیای من جایی است که طراحی و منطق در کنار هم معنا پیدا می‌کنند. جایی
              که هر تصمیم کوچک می‌تواند تجربه‌ای بزرگ بسازد. من به{" "}
              <Highlighter action="highlight" >
                جزئیات
              </Highlighter> اهمیت می‌دهم، چون
              باور دارم کیفیت واقعی در تک‌تک پیکسل‌ها شکل می‌گیرد.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 leading-relaxed">
              علاقه‌مند به ساخت رابط‌های کاربری دقیق، سریع و قابل توسعه‌ام. همیشه
              تلاش می‌کنم کدی بنویسم که خوانا، ساختاریافته و آینده‌دار باشد. رشد
              برای من یک هدف مقطعی نیست؛ یک مسیر مداوم است که از{" "}
              <Highlighter action="box" >
                کنجکاوی
              </Highlighter> و اشتیاق به بهتر شدن شروع می‌شود.
            </motion.p>

            {/* نقل قول نهایی */}
            <motion.div variants={itemVariants} className="relative mt-8 group">
              <div className="absolute inset-0 bg-slate-200/50 -skew-x-2 rounded-xl -z-10 transition-transform group-hover:skew-x-0" />
              <div className="border-r-4 border-primary pr-6 py-4 bg-white/50 backdrop-blur-sm rounded-l-xl shadow-sm">
                <p className="text-base md:text-lg text-slate-500 italic leading-relaxed">
                  "هنوز خودم را «مهندسِ کوچک» می‌دانم، چون هر پروژه برایم شروعی تازه و
                  فرصتی برای پیشرفت است. اما در همین مسیر، با تمرکز، نظم و وسواس
                  حرفه ای، تلاش می‌کنم تجربه‌هایی بسازم که ماندگار باشند."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
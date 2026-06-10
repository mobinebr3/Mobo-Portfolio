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
    repeat: 2,
    ease: "easeInOut" as const,
  },
};

export default function AboutMe() {
  return (
    <section className="relative w-full py-24 lg:py-32 px-6  lg:px-20 min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-1 lg:order-1 relative flex justify-center items-center flex-col">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="flex items-center gap-2 text-center px-4 py-1.5 rounded-full bg-primary/20 dark:bg-white/60 text-primary text-sm font-semibold z-20">
              ✨ درباره من
            </span>
          </motion.div>
          <motion.div
            animate={floatingAnimation}
            className="relative z-10 w-full max-w-md">
            <div className="">
              <div className="overflow-hidden rounded- pt-4  relative grid place-items-center">
                <PixelImage src="/myphoto.jpg" grid="4x6"   />
              </div>

              {/* Badge وضعیت */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Code2 size={24} />
                 </div>
                 <div className="text-right">
                    <p className="text-xs text-slate-400 font-medium tracking-tighter">STATUS</p>
                    <p className="text-sm font-bold text-slate-800 tracking-tighter">در حال خلق کردن...</p>
                 </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* --- بخش متن (سمت راست) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 order-2 lg:order-2 text-right dir-rtl flex flex-col items-end lg:items-start">

          {/* Badge کوچک */}

          {/* تایتل اصلی */}
          <motion.div variants={itemVariants} className="mb-6 w-fit mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              {"من کیستم؟"}
            </h1>
            <div className="flex justify-center gap-1  ">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-2 bg-gradient-to-l from-primary to-primary/70 rounded-sm mt-2"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-2 bg-gradient-to-l from-primary/60 to-primary/60 rounded-sm mt-2"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-2 bg-gradient-to-l from-primary/60 to-primary rounded-sm mt-2"
              />
            </div>
          </motion.div>

          {/* محتوای متن با حفظ تمام کلمات شما */}
     <div className="space-y-6 text-right w-full">
  <motion.p
    variants={itemVariants}
    className="text-lg md:text-xl text-secondary-foreground leading-8 md:leading-9 font-medium"
  >
    من یک{" "}
    <Highlighter
      action="underline"
      iterations={5}
      color="#2b2f83"
      animationDuration={10000}
    >
      توسعه‌دهنده فول استک
    </Highlighter>{" "}
    هستم؛ فردی خلاق با ذهنی کنجکاو که همیشه به دنبال یادگیری، تجربه‌کردن و ساختن چیزهای جدید است. برای من برنامه‌نویسی فقط نوشتن کد نیست، بلکه راهی برای تبدیل ایده‌ها به واقعیتی قابل لمس است.
  </motion.p>

  <motion.p
    variants={itemVariants}
    className="text-base md:text-lg text-muted-foreground leading-relaxed"
  >
    دنیای من جایی است که طراحی و منطق در کنار هم معنا پیدا می‌کنند. جایی که هر تصمیم کوچک می‌تواند تجربه‌ای بزرگ بسازد. من به{" "}
    <Highlighter
      action="highlight"
      iterations={3}
      color="#2b2f83"
      animationDuration={50000}
    >
      <span className="text-primary-foreground"> جزئیات </span>
    </Highlighter>{" "}
    اهمیت می‌دهم، چون باور دارم کیفیت واقعی در تک‌تک پیکسل‌ها شکل می‌گیرد.
  </motion.p>

  <motion.p
    variants={itemVariants}
    className="text-base md:text-lg text-muted-foreground leading-relaxed"
  >
    علاقه‌مند به ساخت رابط‌های کاربری دقیق، سریع و قابل توسعه‌ام. همیشه تلاش می‌کنم کدی بنویسم که خوانا، ساختاریافته و آینده‌دار باشد. رشد برای من یک هدف مقطعی نیست؛ یک مسیر مداوم است که از{" "}
    <Highlighter
      action="box"
      iterations={3}
      color="#2b2f83"
      animationDuration={100000}
    >
      کنجکاوی
    </Highlighter>{" "}
    و اشتیاق به بهتر شدن شروع می‌شود.
  </motion.p>
</div>
        </motion.div>
      </div>
    </section>
  );
}

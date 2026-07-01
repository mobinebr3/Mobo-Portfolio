"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { PixelImage } from "../ui/pixel-image";
import { TextAnimate } from "@/components/ui/text-animate";
import { Code2, Sparkles, Terminal } from "lucide-react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import Image from "next/image";

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
    <section className="relative w-full py-24 lg:py-32 px-6  lg:px-20 flex  flex-col  items-center overflow-hidden bg-background">
      {/* Background Decor */}
      <AnimatedShinyText className="inline-flex items-center mx-auto text-md justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span className="flex items-center gap-2 text-center px-4 py-1.5">
          ✨ درباره من
        </span>
      </AnimatedShinyText>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 lg:mt-15 items-center">
        <div className="lg:col-span-5 order-1 lg:order-1 relative flex justify-center items-center flex-col">
          <div
         
            className="relative z-10 w-full max-w-md mt-20">
            <div className="">
              <div className="   relative grid place-items-center">
                <Image src="/myphoto.jpg" width={400} height={600} alt="Profile Image"   className=" w-100 h-130 rounded-3xl  lg:-mt-30 object-cover  max-sm:w-80 max-sm:h-105 max-sm:rounded-4xl " />
              </div>

              {/* Badge وضعیت */}
            </div>
          </div>
        </div>

        {/* --- بخش متن (سمت راست) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 order-2 lg:order-2 text-right dir-rtl flex flex-col justify-between items-center">
          {/* Badge کوچک */}

          {/* تایتل اصلی */}
          <motion.div
            variants={itemVariants}
            className="mb-10 -mt-40 w-fit max-lg:hidden mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              {"من کیستم؟"}
            </h1>
          </motion.div>

          <div className="space-y-7 text-right w-full">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-secondary-foreground leading-8 md:leading-9 font-medium">
              من به عنوان یک{" "}
              <Highlighter
                action="underline"
                iterations={2}
                color="#2b2f83"
                animationDuration={800}>
                توسعه‌دهنده فرانت‌‌اند
              </Highlighter>{" "}
              تلاشم این است که پلی میان منطق بک‌اند و تجربه کاربر بسازم. درک من
              از زیرساخت پروژه، نه برای انجام همه‌ی کارها، بلکه برای اتخاذ
              تصمیماتی است که خروجی نهایی را در لایه‌ی فرانت‌اند بهینه‌تر و
              پایدارتر کند.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed">
              شاید هویت حرفه‌ای من در سه کلمه خلاصه شود:{" "}
              <Highlighter
                action="highlight"
                iterations={1}
                color="#2d5bff"
                animationDuration={1000}>
                <span className="text-primary-foreground">
                  {" "}
                  کنجکاوی، کمال‌گرایی و روحیه تسلیم‌ناپذیر.{" "}
                </span>
              </Highlighter>{" "}
              این‌ها به من کمک می‌کنند تا در مواجهه با چالش‌های پیچیده، به جای
              راه‌حل‌های دم‌دستی، به دنبال ریشه‌ها بگردم. در این مسیر، هوش
              مصنوعی برای من یک همکار است تا عمیق‌تر فکر کنم، نه اینکه به جای من
              فکر کند.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed  bg-card p-3 rounded-2xl after:bg-primary after:h-25 after:w-1.5 after:rounded-2xl relative after:absolute inset-shadow-2xs after:-right-0 pr-4  after:top-1/2 after:-translate-y-1/2">
              کمال‌گرایی برای من نه یک خصلت اخلاقی، بلکه یک استاندارد فنی است؛
              وقتی روی موضوعی پافشاری می‌کنم، بر مبنای استدلال و برای حفظ کیفیت
              است. باور دارم تفاوت یک محصول معمولی با یک محصول عالی، در همان{" "}
              <Highlighter
                action="box"
                iterations={2}
                color="#2d5bff"
                animationDuration={1200}>
                جزئیاتی
              </Highlighter>{" "}
              نهفته است که معمولاً نادیده گرفته می‌شوند. هدف من همیشه ایجاد
              تعادل میان نیاز کارفرما، پایداری کد و رضایت کاربر نهایی است.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
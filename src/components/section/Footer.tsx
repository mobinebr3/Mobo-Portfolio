"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { Globe } from "../ui/globe";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground">
      {/* Atmospheric Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* TOP STRIP */}
        <div className="flex items-center justify-between gap-16 max-md:flex-col max-md:text-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              بیایید چیزی بسازیم
              <span className="block text-primary">
                که متمایز باشد.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-muted-foreground text-lg">
              من یک توسعه‌دهنده فرانت‌اند هستم با تمرکز بر عملکرد،
              معماری تمیز و تجربه کاربری هدفمند.
              در حال حاضر آماده همکاری در پروژه‌های فریلنس
              و موقعیت‌های شغلی جونیور هستم.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 max-md:justify-center">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
              >
                شروع همکاری
              </a>

              <a
                href="#portfolio"
                className="px-7 py-3 rounded-full border border-border hover:border-primary transition-all duration-300"
              >
                مشاهده نمونه‌کارها
              </a>
            </div>
          </motion.div>

          {/* Globe Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative w-[380px] h-[380px] mx-auto rounded-full overflow-hidden ring-1 ring-border/40">
              <Globe />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center text-center gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              aria-label="GitHub"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="space-y-2 mb-4">
          
            <p className="text-xs text-muted-foreground/70">
   توسعه داده شده با عشق در هر پیکسل همراه با کمی قهوه
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
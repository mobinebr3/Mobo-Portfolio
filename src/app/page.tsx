"use client";

import React from "react";
import { ArrowLeft, Github, Linkedin, Code2, Terminal } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section 
      dir="rtl" 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white selection:bg-blue-500/20 selection:text-blue-900"
    >
      {/* --- 1. Background Atmosphere (More Minimal) --- */}
      {/* A large subtle gradient mesh instead of blobs */}
      {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-70" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 opacity-70" /> */}
      
      {/* Refined Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}

      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Right Column: Text Content --- */}
          {/* Order changed logically for Mobile (Text first usually looks better on mobile but keeping your RTL flow) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right space-y-8 order-2 lg:order-1 animate-fade-in-up">
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-600 text-xs font-semibold tracking-wide">آماده همکاری در پروژه‌های جدید</span>
            </div>

            {/* Main Headline with better Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.15]">
              خلق تجربه‌های <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                دیجیتال و خلاقانه
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-lg md:text-xl text-slate-500 leading-relaxed font-light">
              من <span className="font-semibold text-slate-800">مبین</span> هستم؛ توسعه‌دهنده فرانت‌اند.
              تمرکز من بر ترکیب <span className="underline decoration-blue-200 decoration-2 underline-offset-4">زیبایی بصری</span> با <span className="underline decoration-indigo-200 decoration-2 underline-offset-4">عملکرد فنی</span> است تا محصولاتی ماندگار بسازم.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a 
                href="#portfolio" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 transition-all duration-300 hover:shadow-slate-900/20 hover:-translate-y-1"
              >
                 {/* Button Hover Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <span>مشاهده نمونه‌کارها</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </a>
              
              <div className="flex gap-3 justify-center">
                {[
                  { icon: Github, href: "https://github.com", label: "Github" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 text-slate-500 bg-white border border-slate-200 rounded-2xl hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/50 hover:scale-105 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- Left Column: Visual/Image (Glassmorphism Style) --- */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            
            {/* The Floating Container */}
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] animate-[float_6s_ease-in-out_infinite]">
              
              {/* Back Glow */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/30 rounded-full blur-[80px]" /> */}

              {/* Glass Card */}
              <div className="relative inset-0 w-full h-full rounded-[3rem] bg-gradient-to-br from-white/80 to-white/40 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-md flex items-center justify-center ">
                
                {/* Decorative Grid inside Card */}
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]" />
                
                {/* Floating Elements inside */}<div className="absolute -top-3 -right-3 rounded-full p-3 bg-card">
                <div className="p-3 bg-card shadow rounded-full backdrop-blur  ">
                  <Code2 className="w-6 h-6 text-blue-500" />
                </div></div>
                <div className="absolute bottom-12 left-8 p-3 bg-white/80 backdrop-blur rounded-2xl shadow-lg animate-bounce delay-[2000ms]">
                  <Terminal className="w-6 h-6 text-indigo-500" />
                </div>

                {/* Logo Image */}
                <div className="relative z-10 transition-transform duration-500 hover:scale-110 cursor-pointer">
                    {/* Add a subtle drop shadow to the logo specifically */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                    <Image 
                      src="/mobi3tlogo.png" 
                      alt="Mobi3t Logo" 
                      width={400} 
                      height={400} 
                      className="relative w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
                      priority
                    />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Custom Keyframes for the 'float' animation if not in tailwind config */}
   
    </section>
  );
}
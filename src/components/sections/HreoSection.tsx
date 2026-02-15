"use client";

import React from "react";
import { ArrowLeft, Github, Linkedin, Code2, Terminal } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import { WordRotate } from "@/components/ui/word-rotate";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import Link from "next/link";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

/**
 * DecorativeDots
 * - SVG overlay with faint colored circles/dots spread across the hero.
 * - pointer-events-none so it never interferes with interactions.
 * - low opacity and soft blur to keep it subtle.
 */
function DecorativeDots({ className = "" }: { className?: string }) {
  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none z-10 opacity-80",
        className,
      )}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true">
      <defs>
        <filter id="soft-blur">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* big soft blobs */}
      <g opacity="0.06" filter="url(#soft-blur)">
        <circle cx="1100" cy="80" r="120" fill="#3b82f6" />
        <circle cx="60" cy="700" r="160" fill="#7c3aed" />
        <circle cx="300" cy="140" r="80" fill="#06b6d4" />
        <circle cx="950" cy="500" r="100" fill="#f97316" />
      </g>

      {/* small colored dots pattern */}
      <g opacity="0.12">
        <circle cx="200" cy="60" r="4" fill="#3b82f6" />
        <circle cx="260" cy="48" r="3" fill="#60a5fa" />
        <circle cx="320" cy="82" r="3.5" fill="#7c3aed" />
        <circle cx="420" cy="140" r="3" fill="#06b6d4" />
        <circle cx="520" cy="120" r="2.5" fill="#f97316" />
        <circle cx="800" cy="30" r="3" fill="#34d399" />
        <circle cx="980" cy="110" r="3.5" fill="#fb7185" />
        <circle cx="880" cy="220" r="2.5" fill="#60a5fa" />
        <circle cx="680" cy="420" r="3.5" fill="#7c3aed" />
        <circle cx="540" cy="520" r="3" fill="#06b6d4" />
        <circle cx="200" cy="680" r="3" fill="#f97316" />
        <circle cx="350" cy="600" r="2.5" fill="#34d399" />
        <circle cx="1050" cy="640" r="3" fill="#fb7185" />
      </g>
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section className="relative w-full h-dvh grid place-items-center overflow-hidden bg-background selection:bg-blue-500/20 selection:text-blue-900">


      {/* Animated grid (same) */}
      <div className="w-full h-full absolute inset-0 ">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          x={-1}
          y={-1}
          strokeDasharray={4}
          className={cn(
            "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[180%] skew-y-12",
          )}
        />
      </div>

      {/* Decorative dots overlay (subtle shapes across the page) */}
      <DecorativeDots />

      {/* --- Content (adjusted typography & spacing) --- */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Right: Text column */}
          <div className="w-full lg:w-2/3 text-center lg:text-right">
            {/* small badge (kept minimal) */}
      
            
           
                <AnimatedShinyText className="inline-flex items-center  text-md justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span> 👋 سلام خوش اومدی </span>
                </AnimatedShinyText>
         
    
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug tracking-tight">
               من{" "}
              <Highlighter action="underline" color="#1e4bff">
                {" "}
                مبین{" "}
              </Highlighter>{" "}
              هستم؛ مهندسِ کوچک
            </h1>

            <div className="mt-3 text-xs sm:text-sm md:text-base text-primary font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
              در تلاش‌ام تا با خلاقیت،
              <SparklesText
                sparklesCount={5}
                className="inline text-sm sm:text-base px-2 font-semibold text-foreground">
                {" هر پیکسل "}
              </SparklesText>
              را جان ببخشم.
            </div>

            <div className="mt-6 w-full h-[2px] bg-secondary mx-auto lg:mx-0 rounded-full" />

            <div className="mt-4 text-sm text-slate-700 flex items-center justify-center lg:justify-start gap-2">
              <span className="opacity-80">تمرکز:</span>
              <WordRotate
                words={[
                  "دقت پیکسلی",
                  "خلاقیت هدفمند",
                  "سرعت در اجرا",
                  "تجربه تمیز",
                ]}
                className="text-sm font-semibold text-slate-900"
              />
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:-translate-y-[2px] transition-transform">
                مشاهده پروژه‌ها
              </Link>
            </div>
          </div>

          {/* Left: Visual (kept structure, only responsive sizing) */}
          <div className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] flex-shrink-0">
            <div className="relative flex justify-center items-center">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 border rounded-full z-10 size-100" />
                <div className=" -top-20  translate-x-1/2 right-1/2 size-3 absolute bg-primary/30 anim left-0 rounded-full " />
                <div className="relative inset-0 w-full h-full z-20 rounded-[2rem] bg-gradient-to-br from-white border border-2 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-md flex items-center justify-center ">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]" />
                  <div className="relative z-10 transition-transform duration-500 hover:scale-105 cursor-pointer">
                    <Image
                      src="/mobi3tlogo.png"
                      alt="Mobi3t Logo"
                      width={400}
                      height={400}
                      className="relative w-80 h-80 object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* border-bottom under the whole hero content */}
        {/* <div className="mt-12 border-t border-slate-100" /> */}
      </div>
    </section>
  );
}

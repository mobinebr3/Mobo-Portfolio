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
import { BorderBeam } from "../ui/border-beam";
import { HexagonPattern } from "../ui/hexagon-pattern";
import SoftAurora from "../SoftAurora";

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
    <section className="relative w-full h-dvh grid place-items-center  bg-card selection:bg-blue-500/20 selection:text-blue-900">
      {/* Animated grid (same) */}{" "}
      {/* <div className="w-full absolute inset-0 z-10   h-full">
        <SoftAurora
          speed={0.6} 
          scale={1.5}
          brightness={1.5}
          color2="#ff0000"
          color1="#0c20ff"
          noiseFrequency={3}
          noiseAmplitude={4}
          bandHeight={0.3}
          bandSpread={1}
          octaveDecay={0.2}
          layerOffset={4}
          colorSpeed={1}
          // enableMouseInteraction
          mouseInfluence={0}
        />
      </div> */}
      <div className="w-full h-full absolute inset-0 ">
        <div className="  flex h-[500px] w-full flex-col items-center justify-center ">
          <HexagonPattern
            hexagons={[
              [1, 1],
              [4, 4],
              [2, 2],
              [3, 4],
              [5, 4],
              [8, 2],
              [6, 3],
              [8, 5],
              [9, 11],
              [13, 15],
              [16, 17],
            ]}
            className={cn(
              "mask-[radial-gradient(420px_circle_at_center,white,transparent)]",
              "inset-0 skew-y-6",
            )}
          />
        </div>
      </div>
      {/* Decorative dots overlay (subtle shapes across the page) */}
      
      {/* --- Content (adjusted typography & spacing) --- */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col max-lg:items-center lg:flex-row-reverse items gap-6 sm:gap-8 lg:gap-10">
          {/* Right: Text column */}
          <div className="w-full lg:-mr-20 z-30 lg:w-2/3 text-center lg:text-right">
            {/* small badge (kept minimal) */}

            <AnimatedShinyText className="inline-flex items-center  text-md justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span> 👋 سلام خوش اومدی </span>
            </AnimatedShinyText>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug tracking-tight">
              من{" "}
              <Highlighter
                action="underline"
                animationDuration={3000}
                iterations={3}
                color="#1e4bff">
                {" "}
                مبین{" "}
              </Highlighter>{" "}
              هستم؛
            </h1>
            <h1 className="text-sm mt-2 sm:text-md md:text-xl lg:text-2xl font-normal text-foreground/90 leading-snug tracking-tight">
              {" "}
           توسعه‌دهنده وب (فرانت‌اند / فول‌استک)
            </h1>
            <div className=" h-0.5 bg-linear-to-r my-6 w-full  from-transparent via-primary/50 to-transparent" />
            <div className="mt-3 text-xs sm:text-sm md:text-base text-secondary-foreground bg-card/60 border-t border-b-[0.1px] px-4 py-2 w-fit rounded-full font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
              در تلاش‌ام تا با خلاقیت،
              <SparklesText
                sparklesCount={5}
                className="inline text-sm sm:text-base px-2 font-semibold text-foreground">
                {" هر پیکسل "}
              </SparklesText>
              را جان ببخشم.
            </div>

            {/* <div className=" bg-gray-500/30 mx-auto lg:mx-0 rounded-full" /> */}

            {/* <div className="mt-4 text-sm text-secondary-foreground flex items-center justify-center lg:justify-start gap-2">
              <span className="opacity-80">تمرکز:</span>
              <WordRotate
                words={[
                  "دقت پیکسلی",
                  "خلاقیت هدفمند",
                  "سرعت در اجرا",
                  "تجربه تمیز",
                ]}
                className="text-sm font-semibold text-foreground"
              />
            </div> */}

            {/* <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href="#portfolio"
                className="px-7 inset-shadow-2xs shadow-white py-2 bg-primary  text-white rounded-xl z-20 border border-white/20   text-sm font-semibold hover:-translate-y-[2px] transition-transform">
                مشاهده پروژه‌ها
              </Link>
            </div> */}
          </div>

          {/* Left: Visual (kept structure, only responsive sizing) */}
          <div className="w-[220px] sm:w-[260px] lg:-mt-10 md:w-[320px] lg:w-[360px] max-lg:mx-auto  ">
            <div className="relative flex justify-center items-center w-full">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] animate-[float_6s_ease-in-out_infinite]">
                {/* <div className="absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 border-2 rounded-full z-10 size-40 bg-primary/10"></div>
                <div className="absolute translate-x-1/2 right-1/2 bottom-1/9 translate-y-1/12 border-2 rounded-full z-10 size-10 bg-primary/20"></div>
                <div className="absolute translate-x-1/2 right-1/2 top-1/9 -translate-y-1/12 border-2 rounded-full z-10 size-10 bg-primary/20"></div>
                <div className="absolute translate-x-1/12 left-1/12 top-1/2 -translate-y-1/2 border-2 rounded-full z-10 size-10 bg-primary/20"></div>
                <div className="absolute translate-x-1/12 right-1/12 top-1/2 -translate-y-1/2 border-2 rounded-full z-10 size-10 bg-primary/20"></div>
                <div className="absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 border-2 rounded-full z-10 size-10 bg-primary/20"></div> */}
                {/* <div className="absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 border rounded-full z-10 size-100 max-md:size-70   max-md:border-1 max-md:border-dashed ">
                  {" "}
                  <BorderBeam
                    duration={30}
                    delay={5}
                    size={200}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    className="rounded-2xl! max-md:hidden"
                    borderWidth={1}
                  />
                </div> */}
                {/* <div className="absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 border rounded-full z-10 max-sm:size-50 md:size-70 max-md:hidden">
                  {" "}
                  <BorderBeam
                    duration={50}
                    delay={100}
                    size={600}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    className="rounded-2xl! "
                    borderWidth={1}
                  />
                </div> */}
                {/* <div className="absolute translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 border rounded-full z-10 size-50 will-change-transform">
                  {" "}
                  <BorderBeam
                    duration={8}
                    delay={0}
                    size={600}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    className="rounded-2xl! "
                    borderWidth={1}
                  />
                  <BorderBeam
                    duration={8}
                    delay={80}
                    size={600}
                    colorFrom="#3b82f6"
                    colorTo="#8b5cf6"
                    className="rounded-2xl! "
                    borderWidth={1}
                    initialOffset={-50}
                  />
                </div> */}
                <div className=" -top-20  translate-x-1/2 right-1/2 size-3 absolute bg-primary/30 anim left-0 rounded-full "></div>

                <div className="relative inset-0 w-full h-full z-20 overflow-hidden bg-background/50  border-b-[0.4px] -rotate-45 dark:border-gray-800  rounded-full   inset-shadow-2xs dark:inset-shadow-white/10 backdrop-blur-[5px]  flex items-center justify-center ">
                  {/* <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:15px_15px] opacity-[0.25]" /> */}
                  <div className="relative rounded-full z-10 cursor-pointer  ">
                    {" "}
                    {/* <BorderBeam
                      duration={50}
                      delay={50}
                      size={500}
                      colorFrom="#3b82f6"
                      colorTo="#8b5cf6"
                      className="hidden md:block "
                      borderWidth={1}
                    /> */}
                    <Image
                      src="/mobi3tlogo.png"
                      alt="Mobi3t Logo"
                      width={400}
                      height={400}
                      className="relative w-80 h-80 rotate-45 object-contain transition-transform duration-500 hover:scale-105 "
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
      <div className="bg-linear-to-t from-background   to-background/0 w-full  bottom-0 left-0 h-50 z-50 absolute"/>
    </section>
  );
}

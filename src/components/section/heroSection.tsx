"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";


import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

import { HexagonPattern } from "../ui/hexagon-pattern";


export default function HomeHero() {
  return (
    <section className="relative w-full h-dvh grid place-items-center  bg-background">
  
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
       
                <div className=" -top-20  translate-x-1/2 right-1/2 size-3 absolute bg-primary/30 anim left-0 rounded-full "></div>

                <div className="relative inset-0 w-full h-full z-20 overflow-hidden bg-background/50  border-b-[0.4px] dark:border-gray-800  rounded-full   inset-shadow-2xs dark:inset-shadow-white/10 backdrop-blur-[5px]  flex items-center justify-center ">
                  {/* <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:15px_15px] opacity-[0.25]" /> */}
                  <div className="relative rounded-full z-10 cursor-pointer  ">
                    {" "}

                    <Image
                      src="/mobi3tlogo.png"
                      alt="Mobi3t Logo"
                      width={320}
                      height={320}
                      className="relative w-80 h-80  object-contain transition-transform duration-500 hover:scale-105 "
                      // priority
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

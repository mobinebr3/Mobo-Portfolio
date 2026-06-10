"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaReact } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

type NodeProps = {
  className?: string;
  children?: React.ReactNode;

  color?: string;
};

const Node = forwardRef<HTMLDivElement, NodeProps>(
  ({ className, children, color }, ref) => {
    return (
      <div
        ref={ref}
        style={
          {
            // ایجاد یک سایه ملایم و رنگی متناسب با نود
            boxShadow: color
              ? ` inset 1px 1px 0px 0.001px ${color}`
              : "0.1px -0.5px 0px 0.1px rgba(256,256,256,0.2)",
          } as React.CSSProperties
        }
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full  transition-color duration-300",
          // استایل پایه: شیشه‌ای مات و سفید
          " backdrop-blur-xs",
          // استایل هاور برای جذابیت بیشتر
          "hover:scale-105 hover:bg-secondary",
          className,
        )}>
        {children}
      </div>
    );
  },
);
Node.displayName = "Node";

const CoreWindow = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // تقویت Glassmorphism: بلور بیشتر، حاشیه گرادینت
          "z-20 flex h-40 w-64 max-lg:w-56 items-stretch overflow-hidden rounded-3xl bg-card/50 backdrop-blur-xs border-b inset-shadow-xs inset-shadow-white/20",
          // حالت لایت (کد قبلی خودت)
          // "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(240,244,255,1)_35%,rgba(215,225,250,1)_100%)]",

          // حالت دارک (افزوده شد) - یک هاله بنفش/اندوگو فوق‌العاده شیک که به مشکی ختم می‌شود
          // "dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,rgba(15,23,42,1)_50%,rgba(2,6,23,1)_100%)]",
          // "backdrop-blur-2xl transition-all duration-500 hover:border-sky-300/50 hover:shadow-[0_30px_80px_-10px_rgba(56,189,248,0.25)]",
          className,
        )}>
        {/* نوار سمت چپ (Mac-style) - کمی تیره تر برای تضاد */}
        <div className="flex w-6 flex-col items-center justify-start gap-1.5 border-l border-border/50 p-4">
          <span className="size-2.5 rounded-full bg-[#FF5F56] shadow-inner" />
          <span className="size-2.5 rounded-full bg-[#FFBD2E] shadow-inner" />
          <span className="size-2.5 rounded-full bg-[#27C93F] shadow-inner" />
        </div>

        {/* محتوای اصلی - شبیه به یک پنل مدیریتی کوچک یا ادیتور */}
        <div className="flex flex-1 flex-col justify-between p-5 text-left">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold tracking-[0.25em] text-foreground uppercase">
                  Engine Core
                </div>
                <div className="mt-1 max-sm:text-sm text-base font-extrabold tracking-tight text-secondary-foreground">
                  Frontend Craft
                </div>
              </div>
              <div className="rounded-full bg-sky-600/10 px-3 py-1 text-[10px] font-bold text-sky-700 border border-600/20 shadow-sm">
                v1.2.0
              </div>
            </div>

            {/* المان‌های بصری داخل پنجره (به جای اسکلت بی روح) */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-full rounded-full bg-secondary-foreground/10" />
                <div className="h-1.5 w-16 rounded-full bg-sky-500" />
              </div>
              <div className="h-1.5 w-4/5 rounded-full bg-secondary-foreground/10" />
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-10 rounded-full bg-violet-400" />
                <div className="h-1.5 w-3/5 rounded-full bg-secondary-foreground/10" />
              </div>
            </div>
          </div>

          {/* دکمه‌های پایینی */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-6  rounded-lg bg-slate-600/10 shadow-sm hover:bg-slate-800 cursor-pointer" />
            <div className="h-6  rounded-lg bg-sky-600/10 border border-sky-600/20" />
          </div>
        </div>
      </div>
    );
  },
);
CoreWindow.displayName = "CoreWindow";

export function FrontendVisual({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const uiRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const a11yRef = useRef<HTMLDivElement>(null);
  const perfRef = useRef<HTMLDivElement>(null);

  const coreRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-100 max-sm:h-150 w-full items-center justify-center overflow-hidden bg-background  shadow-white rounded-4xl p-10 max-lg:p-3 max-sm:pb-10",
        // گرادینت پس‌زمینه عمیق‌تر و جذاب‌تر
        // حالت لایت (کد قبلی خودت)
        // "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(240,244,255,1)_35%,rgba(215,225,250,1)_100%)]",

        // حالت دارک (افزوده شد) - یک هاله بنفش/اندوگو فوق‌العاده شیک که به مشکی ختم می‌شود
        // "dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,rgba(15,23,42,1)_50%,rgba(2,6,23,1)_100%)]",
        className,
      )}>
      <div className="relative flex max-sm:flex-col-reverse size-full max-w-6xl items-center justify-between gap-12 max-lg:gap-5">
        {/* ستون نودهای ورودی */}
        <div className="flex sm:flex-col  max-sm:flex-row gap-5">
          <Node
            ref={uiRef}
            color="rgba(14, 165, 233, 0.4)"
            className="size-16 border-sky-200">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl">✨</span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-sky-600">
                UI/UX
              </span>
            </div>
          </Node>

          <Node
            ref={motionRef}
            color="rgba(168, 85, 247, 0.4)"
            className="size-16 border-purple-600/20">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl">
                <FcDocument />
              </span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-purple-600">
                seo
              </span>
            </div>
          </Node>

          <Node
            ref={reactRef}
            color="rgba(6, 182, 212, 0.4)"
            className="size-16 border-cyan-200">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold text-cyan-600">
                <FaReact />
              </span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-cyan-600">
                React
              </span>
            </div>
          </Node>

          {/* <Node ref={a11yRef} color="rgba(249, 115, 22, 0.4)" className="size-16 border-orange-200">
             <div className="flex flex-col items-center text-center">
              <span className="text-xl">♿</span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-orange-950">A11y</span>
            </div>
          </Node> */}

          <Node
            ref={perfRef}
            color="rgba(34, 197, 94, 0.4)"
            className="size-16 border-green-200">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl">🚀</span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-green-600">
                Perf
              </span>
            </div>
          </Node>
        </div>

        {/* بخش مرکزی */}
        <div className="flex flex-1 items-center justify-center">
          <CoreWindow ref={coreRef} />
        </div>

        {/* بخش خروجی کاربر */}
        <div className="flex flex-col items-center justify-center gap-5">
          <Node
            ref={userRef}
            className="size-20 backdrop-blur-xs border-b-[0.2px] ">
            <div className="flex flex-col items-center leading-none ">
              <span className="text-3xl">🧑‍💻</span>
              <span className="mt-2 text-xs font-bold text-secondary-foreground">
                User
              </span>
            </div>
          </Node>

          {/* متن توضیحات زیر کاربر - شیک تر */}
          <div className="flex flex-col items-center gap-1.5 max-w-[180px] text-center">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-tight text-foreground max-lg:text-xs">
                Fast & Responsive
              </span>
            </div>
            <div className="text-sm font-medium text-muted-foreground max-lg:text-xs">
              Polished Interfaces
            </div>
          </div>
        </div>
      </div>

      {/* پرتوهای متحرک - با گرادینت و درخشش */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={uiRef}
        toRef={coreRef}
        className="text-sky-500"
        gradientStartColor="#38bdf8" 
        gradientStopColor="#0ea5e9"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={motionRef}
        toRef={coreRef}
        className="text-purple-500"
        gradientStartColor="#c084fc"
        gradientStopColor="#a855f7"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={reactRef}
        toRef={coreRef}
        className="text-cyan-500"
        gradientStartColor="#22d3ee"
        gradientStopColor="#06b6d4"
      />
      {/* <AnimatedBeam 
        containerRef={containerRef} fromRef={a11yRef} toRef={coreRef} 
        className="text-orange-500" gradientStartColor="#fb923c" gradientStopColor="#f97316"
      /> */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={perfRef}
        toRef={coreRef}
        className="text-green-500"
        gradientStartColor="#4ade80"
        gradientStopColor="#22c55e"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={coreRef}
        toRef={userRef} delay={1}
        className="text-blue-600"
        gradientStartColor="#60a5fa" 
        gradientStopColor="#2563eb" duration={10}
  
      />
      <div className="w-full absolute bottom-0 h-25 sm:h-30  z-50 bg-linear-to-t from-background to-transparent "></div>
    </div>
  );
}

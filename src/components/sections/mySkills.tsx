"use client";

import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Eye, CloudLightning, Rocket, Code2, User } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title?: string }
>(({ className, children, title }, ref) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    ref={ref}
    className={cn(
      "z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 bg-white/80 p-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md md:h-24 md:w-24 md:rounded-full",
      className
    )}
  >
    {children}
    {title && (
      <span className="absolute -bottom-8 hidden w-max text-xs font-medium text-slate-500 md:block">
        {title}
      </span>
    )}
  </motion.div>
));
Circle.displayName = "Circle";

export default function MySkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);

  const skills = [
    { ref: r1, icon: <Eye className="text-blue-500" />, title: "دقت پیکسلی" },
    { ref: r2, icon: <CloudLightning className="text-amber-500" />, title: "خلاقیت" },
    { ref: r3, icon: <Rocket className="text-purple-500" />, title: "سرعت اجرا" },
    { ref: r4, icon: <Code2 className="text-emerald-500" />, title: "کد تمیز" },
  ];

  return (
    <section dir="rtl" className="relative py-24 overflow-hidden bg-slate-50/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            جعبه ابزار <span className="text-blue-600">من</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-relaxed">
            ترکیبی از هنر و منطق برای خلق تجربه‌های دیجیتال منحصر‌به‌فرد.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border bg-white/40 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex size-full flex-col max-w-lg items-stretch justify-between gap-10 p-12">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={r1} title="دقت پیکسلی">
                <Eye className="size-6 md:size-8" />
              </Circle>
              <Circle ref={r3} title="سرعت بالا">
                <Rocket className="size-6 md:size-8" />
              </Circle>
            </div>
            
            <div className="flex flex-row items-center justify-center">
              <Circle 
                ref={centerRef} 
                className="h-24 w-24 md:h-32 md:w-32 border-blue-100 bg-gradient-to-tr from-blue-50 to-white ring-8 ring-blue-50/50"
              >
                <div className="flex flex-col items-center">
                   <User className="size-10 text-blue-600" />
                   <span className="text-[10px] mt-2 font-bold text-blue-900 hidden md:block">مبین</span>
                </div>
              </Circle>
            </div>

            <div className="flex flex-row items-center justify-between">
              <Circle ref={r2} title="خلاقیت">
                <CloudLightning className="size-6 md:size-8" />
              </Circle>
              <Circle ref={r4} title="کدنویسی">
                <Code2 className="size-6 md:size-8" />
              </Circle>
            </div>
          </div>

          {/* Beams */}
          {skills.map((skill, idx) => (
            <AnimatedBeam
              key={idx}
              containerRef={containerRef}
              fromRef={skill.ref}
              toRef={centerRef}
              curvature={idx % 2 === 0 ? 50 : -50}
              duration={3 + idx}
              gradientStartColor={idx % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
              gradientStopColor={idx % 2 === 0 ? "#60a5fa" : "#a78bfa"}
            />
          ))}
        </div>
        
        {/* Info Cards - Desktop only for extra flair */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {skills.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 transition-colors shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-500">بهینه‌سازی شده برای بهترین تجربه کاربری.</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect, useRef, memo, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// --- انواع داده‌ها (Types) ---
interface IconProps extends React.SVGProps<SVGSVGElement> {}

interface SystemMetrics {
  cpu: number;
  ram: number;
  iops: number;
  connections: number;
  latency: number;
  requestPath: string;
}

// --- آیکون‌های بهینه داخلی ---
const ServerIcon: React.FC<IconProps> = memo(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
));
ServerIcon.displayName = "ServerIcon";

const DatabaseIcon: React.FC<IconProps> = memo(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
));
DatabaseIcon.displayName = "DatabaseIcon";

const ActivityIcon: React.FC<IconProps> = memo(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
));
ActivityIcon.displayName = "ActivityIcon";

const CpuIcon: React.FC<IconProps> = memo(({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
));
CpuIcon.displayName = "CpuIcon";

// --- کامپوننت Node جدید اقتباس شده از کد شما ---
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
            boxShadow: color
              ? `inset 1px 1px 0px 0.001px ${color}`
              : "0.1px -0.5px 0px 0.1px rgba(256,256,256,0.2)",
          } as React.CSSProperties
        }
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-2xl transition-color duration-300",
          "backdrop-blur-xs",
          "hover:scale-105 hover:bg-secondary/50",
          className,
        )}>
        {children}
      </div>
    );
  },
);
Node.displayName = "Node";


const useMetrics = (isActive: boolean): SystemMetrics => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 12,
    ram: 2.4,
    iops: 45,
    connections: 84,
    latency: 12,
    requestPath: "/api/v1/data",
  });

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setMetrics((prev) => {
        const paths = [
          "/api/v1/data",
          "/api/v1/auth",
          "/api/v2/metrics",
          "/api/v1/users",
        ];
        const randomPath =
          Math.random() > 0.7
            ? paths[Math.floor(Math.random() * paths.length)]
            : prev.requestPath;

        return {
          cpu: Math.max(5, Math.min(48, Math.round(prev.cpu + (Math.random() * 6 - 3)))),
          ram: parseFloat(Math.max(2.1, Math.min(3.2, prev.ram + (Math.random() * 0.2 - 0.1))).toFixed(1)),
          iops: Math.max(38, Math.min(52, Math.round(prev.iops + (Math.random() * 4 - 2)))),
          connections: Math.max(78, Math.min(96, Math.round(prev.connections + (Math.random() * 4 - 2)))),
          latency: Math.max(8, Math.min(22, Math.round(prev.latency + (Math.random() * 4 - 2)))),
          requestPath: randomPath,
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  return metrics;
};

// --- کامپوننت اصلی ---
export const BackendVisual: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  
  // رفرنس‌های مربوط به کانتینر و نودها برای وصل کردن AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null);
  const gatewayRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const metrics = useMetrics(hasAnimated);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] md:h-[480px] flex items-center justify-center overflow-hidden rounded-3xl bg-background text-foreground select-none"
      style={{ perspective: "1000px" }}>

      {/* هاله‌های نوری مدرن */}
      <div
        className={`absolute -top-12 -left-12 w-56 h-56 bg-cyan-500/10 rounded-full blur-[50px] transition-opacity duration-1000 ${hasAnimated ? "opacity-100" : "opacity-0"} pointer-events-none`}
      />
      <div
        className={`absolute -bottom-12 -right-12 w-56 h-56 bg-fuchsia-500/10 rounded-full blur-[50px] transition-opacity duration-1000 ${hasAnimated ? "opacity-100" : "opacity-0"} pointer-events-none`}
      />

      {/* بستر اصلی */}
      <div className="relative w-full max-w-md h-full px-6 flex flex-col justify-between items-center py-12 z-10">
        
        {/* ۱. بخش گیت‌وی (API Gateway) */}
        <motion.div
          className="relative w-full flex flex-col items-center"
          >
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-left bg-background/40 backdrop-blur-md p-2 rounded-lg border border-border/50 shadow-sm">
            <span className="text-[9px] tracking-wider text-cyan-500 dark:text-cyan-400 uppercase font-mono font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping opacity-80" />
              STATUS: ONLINE
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              CPU: <b className="text-foreground">{metrics.cpu}%</b>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              RAM: <b className="text-foreground">{metrics.ram}GB</b>
            </span>
          </div>

          {/* نود گیت‌وی با افکت جدید */}
          <Node 
            ref={gatewayRef} 
            color="rgba(6, 182, 212, 0.5)" 
            className="bg-background/60 backdrop-blur-xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl pointer-events-none" />
            <ServerIcon className="w-7 h-7 text-cyan-500 dark:text-cyan-400 relative z-10 animate-pulse" />
          </Node>

          <div className="mt-3 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
            <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-300 tracking-widest uppercase">
              API GATEWAY
            </span>
          </div>
        </motion.div>

        {/* بخش جریان داده‌ها (فقط پکت‌های شناور) */}
        <div className="absolute inset-x-0 top-[120px] bottom-[120px] flex justify-center pointer-events-none z-0">
          <motion.div
            className="absolute left-4 top-1/4 flex items-center gap-2 bg-background/80 backdrop-blur-md px-2 py-1.5 rounded-lg border border-border/60 shadow-md"
         >
            <ActivityIcon className="text-cyan-500 w-3.5 h-3.5 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[9px] text-cyan-600 dark:text-cyan-300 font-mono font-bold truncate max-w-[90px]">
                {metrics.requestPath}
              </span>
              <span className="text-[8px] text-muted-foreground font-mono">
                Method: <b className="text-foreground/80">GET</b>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-4 bottom-1/4 flex items-center gap-2 flex-row-reverse bg-background/80 backdrop-blur-md px-2 py-1.5 rounded-lg border border-border/60 shadow-md"
            initial={{ opacity: 0, x: 15 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}>
            <CpuIcon className="text-fuchsia-500 w-3.5 h-3.5" />
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-fuchsia-600 dark:text-fuchsia-300 font-mono font-bold">
                200 SUCCESS
              </span>
              <span className="text-[8px] text-muted-foreground font-mono">
                Latency: <b className="text-foreground/80">{metrics.latency}ms</b>
              </span>
            </div>
          </motion.div>
        </div>

        {/* ۲. بخش دیتابیس (Database Cluster) */}
        <motion.div
          className="relative w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}>
          
          <div className="mb-3 px-4 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-md">
            <span className="text-[9px] font-mono font-bold text-fuchsia-600 dark:text-fuchsia-300 tracking-widest uppercase">
              POSTGRESQL CLUSTER
            </span>
          </div>

          {/* نود دیتابیس با افکت جدید */}
          <Node 
            ref={dbRef} 
            color="rgba(217, 70, 239, 0.5)" 
            className="bg-background/60 backdrop-blur-xl border border-fuchsia-500/30 shadow-[0_8px_32px_rgba(217,70,239,0.15)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/10 to-transparent rounded-2xl pointer-events-none" />
            <DatabaseIcon className="w-7 h-7 text-fuchsia-500 dark:text-fuchsia-400 relative z-10" />
            <span className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-ping opacity-80" />
          </Node>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-right bg-background/40 backdrop-blur-md p-2 rounded-lg border border-border/50 shadow-sm">
            <span className="text-[9px] tracking-wider text-fuchsia-500 dark:text-fuchsia-400 uppercase font-mono font-bold">
              IOPS: {metrics.iops}k/s
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              Conns: <b className="text-foreground">{metrics.connections}</b>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              Health: <b className="text-emerald-500 dark:text-emerald-400">100%</b>
            </span>
          </div>
        </motion.div>
      </div>

      {/* اتصال نودها با پرتوهای متحرک (AnimatedBeams) جایگزین SVG قبلی */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gatewayRef}
        toRef={dbRef}
        className="text-cyan-500"
        gradientStartColor="#06b6d4" 
        gradientStopColor="#d946ef" delay={100}
  
      />
      {/* <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={gatewayRef} curvature={-30}
        className="text-fuchsia-500"
        gradientStartColor="#d946ef" 
        gradientStopColor="#06b6d4"
        duration={15}
      /> */}

      {/* حاشیه‌های محوکننده */}
      <div className="bg-gradient-to-b from-background to-transparent w-full top-0 left-0 h-30 z-50 absolute" />
      <div className="bg-gradient-to-t from-background to-transparent w-full bottom-0 left-0 h-30 z-50 absolute" />
    </div>
  );
};


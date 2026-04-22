"use client";
import { motion, useInView } from "framer-motion";
import { FiServer, FiDatabase, FiActivity, FiCpu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

export const BackendVisual = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full flex items-center overflow-hidden justify-center min-h-[280px]   bg-crd transition-colors duration-500"
      style={{ perspective: "50px" }}>
      <div className="from-card pointer-events-none absolute inset-x-0 -bottom-5 z-30 h-1/4 bg-gradient-to-t"></div>
      <div className="from-card pointer-events-none absolute inset-x-0 -top-5 z-30 h-1/4 bg-gradient-to-b"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[20%] w-64 h-64 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-fuchsia-400/20 dark:bg-fuchsia-500/10 rounded-full blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 0.4 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </div>
      <div
        className="absolute inset-0 transition-colors duration-500 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 20%, transparent 80%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-between h-[400px] py-5 w-full max-w-sm overflow-hidden">
        <motion.div
          className="relative flex flex-col items-center z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="absolute left-32 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-right items-end">
            <span className="text-[9px] tracking-[0.2em] text-cyan-600 dark:text-cyan-500 uppercase font-mono font-bold">
              Status: Online
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-white/70">
              CPU: 12%
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-white/70">
              RAM: 2.4GB
            </span>
          </div>
          <div className="relative w-20 h-20 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-xl overflow-hidden border border-cyan-400/40 dark:border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] dark:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center  transition-colors duration-500">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 dark:from-cyan-500/20 to-transparent"
              animate={{ opacity: hasAnimated ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            />
            <FiServer className="w-8 h-8 text-cyan-600 dark:text-cyan-400 relative z-10" />
          </div>
          <motion.div
            className="mt-3 px-4 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 backdrop-blur-md flex items-center gap-2 transition-colors duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}>
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              animate={hasAnimated ? { opacity: [1, 0.4, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <span className="text-[10px] font-mono font-bold text-cyan-800 dark:text-cyan-100 tracking-wider uppercase">
              API Gateway
            </span>
          </motion.div>
        </motion.div>
        <div className="absolute top-[80px] bottom-[80px] w-full flex justify-center z-10 pointer-events-none">
          <svg
            viewBox="0 0 200 240"
            className="w-[200px] h-full overflow-visible">
            <path
              d="M 100 0 C 160 80, 40 160, 100 240"
              stroke="currentColor"
              className="text-slate-200 dark:text-white/5 transition-colors duration-500"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 100 240 C 160 160, 40 80, 100 0"
              stroke="currentColor"
              className="text-slate-200 dark:text-white/5 transition-colors duration-500"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              d="M 100 0 C 160 80, 40 160, 100 240"
              stroke="#06b6d4"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))" }}
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={hasAnimated ? { pathLength: 1, pathOffset: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 100 240 C 160 160, 40 80, 100 0"
              stroke="#d946ef"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 8px rgba(217, 70, 239, 0.6))" }}
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={hasAnimated ? { pathLength: 1, pathOffset: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>
          <motion.div
            className="absolute left-5 top-1/3 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1 }}>
            <FiActivity className="text-cyan-600 dark:text-cyan-500 w-4 h-4" />
            <div className="flex flex-col">
              <span className="text-[10px] text-cyan-700 dark:text-cyan-400 font-mono font-bold">
                REQ: /api/v1/data
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-500 font-mono">
                Payload: 2.4kb
              </span>
            </div>
          </motion.div>
          <motion.div
            className="absolute right-5 top-2/3 flex items-center gap-2 flex-row-reverse"
            initial={{ opacity: 0, x: 10 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}>
            <FiCpu className="text-fuchsia-600 dark:text-fuchsia-500 w-4 h-4" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-fuchsia-700 dark:text-fuchsia-400 font-mono font-bold">
                RES: 200 OK
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-500 font-mono">
                Latency: 12ms
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative flex flex-col items-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}>
          <div className="mb-3 px-4 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/50 border border-fuchsia-200 dark:border-fuchsia-500/20 backdrop-blur-md flex items-center gap-2 transition-colors duration-500">
            <span className="text-[10px] font-mono font-bold text-fuchsia-800 dark:text-fuchsia-100 tracking-wider uppercase">
              PostgreSQL Cluster
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-fuchsia-500 dark:bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]"
              animate={hasAnimated ? { opacity: [1, 0, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity, delay: 1.5 }}
            />
          </div>
          <div className="relative w-20 h-20 rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-fuchsia-400/40 dark:border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.15)] dark:shadow-[0_0_30px_rgba(217,70,239,0.15)] flex items-center justify-center overflow-hidden transition-colors duration-500">
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-fuchsia-400/20 dark:from-fuchsia-500/20 to-transparent"
              animate={{ opacity: hasAnimated ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            />
            <FiDatabase className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400 relative z-10" />
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-left items-start">
            <span className="text-[9px] tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-500 uppercase font-mono font-bold">
              IOPS: 45k/s
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-white/70">
              Connections: 84
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-white/70">
              Health: 100%
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

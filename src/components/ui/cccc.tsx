"use client";

import { motion } from "framer-motion";
import { FiServer, FiDatabase, FiActivity, FiCpu } from "react-icons/fi";
import { useState } from "react";

export const BackendVisual = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center min-h-[550px] overflow-hidden rounded-2xl bg-[#030712] border border-white/10 group cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      {/* ================= AMBIENT LIGHTING ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[20%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.3,
          }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[100px]"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 80%)",
        }}
      />

      {/* ================= MAIN SYSTEM ARCHITECTURE ================= */}
      <div className="relative z-10 flex flex-col items-center justify-between h-[400px] w-full max-w-sm">
        
        {/* ================= 1. SERVER NODE (TOP) ================= */}
        <motion.div
          className="relative flex flex-col items-center z-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* HUD Elements */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-right items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] tracking-[0.2em] text-cyan-500 uppercase font-mono">Status: Online</span>
            <span className="text-[10px] font-mono text-white/70">CPU: 12%</span>
            <span className="text-[10px] font-mono text-white/70">RAM: 2.4GB</span>
          </div>

          {/* Core Server Box */}
          <div className="relative w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center overflow-hidden">
            {/* Spinning Outer Ring */}
            <motion.div
              className="absolute inset-[-10px] rounded-full border border-dashed border-cyan-500/40"
              animate={{ rotate: isHovered ? 360 : 180 }}
              transition={{ duration: isHovered ? 4 : 10, repeat: Infinity, ease: "linear" }}
            />
            {/* Core Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent"
              animate={{ opacity: isHovered ? 1 : 0.5 }}
            />
            <FiServer className="w-8 h-8 text-cyan-400 relative z-10" />
          </div>
          
          <div className="mt-3 px-4 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 backdrop-blur-md flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-cyan-100 tracking-wider text-[10px] uppercase">API Gateway</span>
          </div>
        </motion.div>

        {/* ================= 2. DATA TUBE (MIDDLE) ================= */}
        <div className="absolute top-[80px] bottom-[80px] w-12 flex justify-center z-10 perspective-1000">
          {/* Glass Tube */}
          <div className="absolute inset-0 w-full bg-white/[0.02] backdrop-blur-[2px] border-x border-white/10 rounded-full overflow-hidden flex justify-center">
            
            {/* Central Fiber Optic Line */}
            <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-fuchsia-500/50 to-cyan-500/50" />

            {/* Downward Data Stream (Request) */}
            <motion.div
              className="absolute w-6 h-16 flex items-start justify-center"
              animate={{ y: [0, 240] }}
              transition={{ 
                duration: isHovered ? 0.6 : 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* Data Capsule */}
              <div className="relative w-1 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400/20 rounded-full blur-md" />
                 {/* Trail */}
                 <div className="absolute bottom-full left-0 w-full h-12 bg-gradient-to-t from-cyan-400/80 to-transparent" />
              </div>
            </motion.div>

            {/* Upward Data Stream (Response) */}
            <motion.div
              className="absolute w-6 h-16 flex items-end justify-center"
              animate={{ y: [240, 0] }}
              transition={{ 
                duration: isHovered ? 0.8 : 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: isHovered ? 0.3 : 0.7 
              }}
            >
              {/* Data Capsule */}
              <div className="relative w-1 h-8 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(217,70,239,1)]">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-fuchsia-400/20 rounded-full blur-md" />
                 {/* Trail */}
                 <div className="absolute top-full left-0 w-full h-12 bg-gradient-to-b from-fuchsia-400/80 to-transparent" />
              </div>
            </motion.div>

          </div>

          {/* Floating Data Labels (Attached to tube) */}
          <motion.div 
            className="absolute left-full ml-4 top-1/3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          >
            <FiActivity className="text-cyan-500 w-4 h-4" />
            <div className="flex flex-col">
              <span className="text-[10px] text-cyan-400 font-mono font-bold">REQ: /api/v1/data</span>
              <span className="text-[9px] text-slate-500 font-mono">Payload: 2.4kb</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute right-full mr-4 top-2/3 flex items-center gap-2 flex-row-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
          >
            <FiCpu className="text-fuchsia-500 w-4 h-4" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-fuchsia-400 font-mono font-bold">RES: 200 OK</span>
              <span className="text-[9px] text-slate-500 font-mono">Latency: 12ms</span>
            </div>
          </motion.div>
        </div>

        {/* ================= 3. DATABASE NODE (BOTTOM) ================= */}
        <motion.div
          className="relative flex flex-col items-center z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="mb-3 px-4 py-1 rounded-full bg-fuchsia-950/50 border border-fuchsia-500/20 backdrop-blur-md flex items-center gap-2">
            <span className="text-xs font-mono text-fuchsia-100 tracking-wider text-[10px] uppercase">PostgreSQL Cluster</span>
            <motion.div 
              className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]"
              animate={{ opacity: isHovered ? [1, 0, 1] : 1 }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>

          {/* Core DB Box */}
          <div className="relative w-20 h-20 rounded-2xl bg-black/40 backdrop-blur-xl border border-fuchsia-500/30 shadow-[0_0_30px_rgba(217,70,239,0.15)] flex items-center justify-center overflow-hidden">
             {/* Spinning Inner Hexagon or Rings */}
             <motion.div
              className="absolute inset-[-10px] rounded-lg border-2 border-dashed border-fuchsia-500/30"
              animate={{ rotate: isHovered ? -360 : -180 }}
              transition={{ duration: isHovered ? 5 : 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Core Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/20 to-transparent"
              animate={{ opacity: isHovered ? 1 : 0.5 }}
            />
            <FiDatabase className="w-8 h-8 text-fuchsia-400 relative z-10" />
          </div>

          {/* HUD Elements */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-left items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[9px] tracking-[0.2em] text-fuchsia-500 uppercase font-mono">IOPS: 45k/s</span>
            <span className="text-[10px] font-mono text-white/70">Connections: 84</span>
            <span className="text-[10px] font-mono text-white/70">Health: 100%</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
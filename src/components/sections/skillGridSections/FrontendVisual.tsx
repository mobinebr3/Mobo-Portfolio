
'use client'
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";

export const FrontendVisual = () => {
  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden h-[400px]">
      <div className="absolute inset-0 bg-grid-black/[0.04] dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center]" />
      <motion.div
        className="relative z-10 w-[80%] max-w-sm"
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}>
        <div className="w-full bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 px-2 py-0.5 rounded-md bg-slate-200/50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2 flex-1">
              <Code2 className="w-3 h-3" /> page.tsx
            </div>
          </div>
          <div
            className="p-4 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 bg-white dark:bg-slate-950"
            dir="ltr">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="overflow-hidden whitespace-nowrap">
              <span className="text-pink-600 dark:text-pink-400">import</span>{" "}
              <span className="text-blue-600 dark:text-blue-300">
                {"{"} useState {"}"}
              </span>{" "}
              <span className="text-pink-600 dark:text-pink-400">from</span>{" "}
              <span className="text-green-600 dark:text-green-300">
                'react'
              </span>
              ;
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="overflow-hidden whitespace-nowrap">
              <span className="text-pink-600 dark:text-pink-400">
                export default function
              </span>{" "}
              <span className="text-yellow-600 dark:text-yellow-300">App</span>
              () {"{"}
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="overflow-hidden whitespace-nowrap pl-4 text-slate-400 dark:text-slate-500">
              // Super fast rendering
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pl-4">
              <span className="text-pink-600 dark:text-pink-400">return</span> ({" "}
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-600 dark:text-blue-400">{"<"}</span>
              <span className="text-blue-600 dark:text-blue-300">Layout</span>
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-blue-600 dark:text-blue-400">{"<"}</span>
              <span className="text-blue-600 dark:text-blue-300">
                Hero
              </span>{" "}
              <span className="text-emerald-600 dark:text-emerald-300">
                optimized
              </span>
              <span className="text-blue-600 dark:text-blue-400">{"/>"}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-blue-600 dark:text-blue-400">{"</"}</span>
              <span className="text-blue-600 dark:text-blue-300">Layout</span>
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.5 }}
              className="overflow-hidden whitespace-nowrap">
              {"}"}
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 -top-4 bg-blue-100/50 dark:bg-blue-500/20 backdrop-blur-md border border-blue-200 dark:border-blue-500/30 p-2 rounded-xl text-blue-600 dark:text-blue-300 shadow-xl">
          <Code2 className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -left-4 -bottom-4 bg-emerald-100/50 dark:bg-emerald-500/20 backdrop-blur-md border border-emerald-200 dark:border-emerald-500/30 p-2 rounded-xl text-emerald-600 dark:text-emerald-300 shadow-xl">
          <Zap className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

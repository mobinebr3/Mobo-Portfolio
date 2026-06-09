"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Zap,
  Globe,
  Code2,
  Terminal,
  Database,
  ArrowRight,
  Smartphone,
  Brain,
  Sparkles,
  Shield,
  Rocket,
  Layers,
  Building2,
  ShoppingCart,
  Loader2,
} from "lucide-react";

// --- Categories (معمولا دسته‌بندی‌ها در فرانت ثابت می‌مونن) ---
const CATEGORIES = [
  {
    id: "all",
    label: "همه پروژه‌ها",
    icon: Layers,
    color: "from-slate-500 to-slate-600",
  },
  { id: "web", label: "وب", icon: Globe, color: "from-blue-500 to-cyan-500" },
  {
    id: "mobile",
    label: "موبایل",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai",
    label: "هوش مصنوعی",
    icon: Brain,
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "fintech",
    label: "فین‌تک",
    icon: Building2,
    color: "from-orange-500 to-amber-500",
  },
];

const iconMap: Record<string, any> = {
  brain: Brain,
  shield: Shield,
  sparkles: Sparkles,
  globe: Globe,
  rocket: Rocket,
  code: Code2,
  building: Building2,
  cart: ShoppingCart,
  smartphone: Smartphone,
};

export function PortfolioSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // دریافت دیتا از بک‌‌اند
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("خطا در دریافت پروژه‌ها:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selected]);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#030303] dark:via-[#0a0a0a] dark:to-[#030303] py-24 px-6 overflow-hidden transition-colors duration-500"
      dir="rtl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent dark:from-violet-500/10 dark:via-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent dark:from-cyan-500/10 dark:via-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              پورتفولیو من
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tight mb-6 flex flex-col gap-3">
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              خلاقیت و کدنویسی
            </span>
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              در قالب پروژه‌های واقعی
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            مجموعه‌ای از بهترین پروژه‌ها و راهکارهایی که برای چالش‌های مختلف
            طراحی و توسعه داده‌ام.
          </motion.p>
        </div>

        {/* Loading State / Projects Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-violet-500 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">
              در حال دریافت پروژه‌ها...
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProjects.map((project, index) => {
                const IconComponent = iconMap[project.icon] || Globe;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    layoutId={`card-${project.id}`}
                    onClick={() => setSelected(project)}
                    className="group relative cursor-pointer">
                    {/* Animated Glow Effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient}  rounded-[3rem] opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500`}
                    />

                    {/* Card Container */}
                    <div className="relative h-[360px] rounded-[3rem] bg-card/50 border-0 inset-shadow-sm inset-shadow-primary/10 overflow-hidden flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      {/* Top Decorative Line */}
                      {/* <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                      /> */}

                      <div className="relative z-10 p-7 flex flex-col h-full">
                        {/* Header with Icon and Category */}
                        <div className="flex items-center justify-center mb-6">
                          <div
                            className={`relative p-4 pt-6 -mt-10 rounded-xl border-2 rounded-t-0  bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110  transition-all duration-300`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div className="flex-1 text-center mb-5">
                          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed line-clamp-2">
                            {project.desc}
                          </p>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span
                              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold bg-gradient-to-r ${project.gradient} text-white`}>
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent mb-12" />
                        {/* Footer Action */}
                        <div className="flex relative items-center justify-center pt-4 ">
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent mb-12" />
                          <div
                            className={`flex items-center gap-2 text-sm font-bold text-violet-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                            {/* <ArrowRight className="w-4 h-4" /> */}
                            مشاهده جزئیات
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence mode="wait">
        {selected && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            dir="rtl">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/60"
            />

            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative w-full max-w-4xl max-h-[95vh] bg-background border rounded-4xl z-10 flex flex-col overflow-hidden will-change-transform ease-in-out" >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 left-4 p-2.5 bg-slate-100/90 hover:bg-slate-200 rounded-full z-30 transition-colors">
                <X className="w-5 h-5 text-slate-700" />
              </button>

              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Modal Sidebar */}
                  <div
                    className={`md:col-span-5 bg-gradient-to-br ${selected.gradient} p-6 md:p-12 text-white flex flex-col justify-between`}>
                    <div>
                      <div className="bg-white/20 w-fit p-3 rounded-2xl mb-6">
                        <Zap className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-black mb-3">
                        {selected.title}
                      </h2>
                      <p className="text-white/80 font-semibold text-sm px-3 py-1.5 bg-white/10 rounded-full w-fit">
                        {selected.categoryLabel}
                      </p>
                    </div>

                    {selected.stats && (
                      <div className="mt-10 flex flex-col gap-6">
                        {Object.entries(selected.stats).map(
                          ([key, val]: any) => (
                            <div key={key}>
                              <p className="text-xs text-white/60 font-bold mb-1">
                                {key}
                              </p>
                              <p className="text-2xl font-black">{val}</p>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  {/* Modal Body */}
                  <div className="md:col-span-7 p-6 md:p-12 bg-slate-50 dark:bg-[#0a0a0a]">
                    <div className="space-y-8">
                      <section>
                        <h4 className="text-xs font-bold text-violet-600 mb-4 flex items-center gap-2">
                          <Terminal className="w-4 h-4" /> بررسی اجمالی پروژه
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                          {selected.longDesc}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-xs font-bold text-slate-500 mb-4 flex items-center gap-2">
                          <Database className="w-4 h-4" /> تکنولوژی‌های استفاده
                          شده
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selected.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="bg-white dark:bg-white/10 border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </section>

                      <div className="pt-6 border-t border-slate-200 flex gap-4">
                        {selected.link && (
                          <a
                            href={selected.link}
                            target="_blank"
                            className={`flex-1 bg-gradient-to-r ${selected.gradient} text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all`}>
                            <ExternalLink className="w-5 h-5" /> مشاهده خروجی
                          </a>
                        )}
                        {selected.github && (
                          <a
                            href={selected.github}
                            target="_blank"
                            className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <Github className="w-5 h-5" /> سورس کد
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;

"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Search, Sparkles } from "lucide-react";

import { CategoryButton } from "./CategoryButton";
import { CATEGORIES } from "./constants";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "./types";

export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = (await res.json()) as Project[];
        setProjects(data);
      } catch (error) {
        console.error("خطا در دریافت پروژه‌ها:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selected]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selected]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.tech.some((t) => t.toLowerCase().includes(query)) ||
        project.features.some((f) => f.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, search]);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 py-20 transition-colors duration-500 dark:from-[#040404] dark:via-[#090909] dark:to-[#040404] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-20 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute bottom-10 left-1/4 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-300">
            <Sparkles className="h-4 w-4" />
            نمونه‌کارها
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            پروژه‌هایی که با{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              خلاقیت
            </span>{" "}
            ساخته‌ام
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
            مجموعه‌ای از پروژه‌های واقعی با تمرکز روی فرانت‌اند، تجربه کاربری، سرعت، و پیاده‌سازی تمیز و حرفه‌ای.
          </motion.p>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-3xl border-t border-b-[0.5px] border-slate-200 bg-background/50 p-4 backdrop-blur dark:border-white/10 md:flex-row md:items-center md:justify-between md:p-5">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <CategoryButton
                key={cat.id}
                cat={cat}
                isActive={activeCategory === cat.id}
                onClick={handleCategoryClick}
              />
            ))}
          </div>

          <label className="flex w-full max-w-sm items-center gap-3 rounded-2xl border-l border-t-[0.2px] border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 md:w-auto">
            <Search className="h-4 w-4 shrink-0" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در پروژه‌ها..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="mb-4 h-10 w-10 animate-spin text-violet-600" />
            <p className="font-medium text-slate-500 dark:text-slate-400">
              در حال دریافت پروژه‌ها...
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center dark:border-white/10 dark:bg-white/5">
            <p className="text-lg font-bold text-slate-800 dark:text-white">
              پروژه‌ای پیدا نشد
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              فیلتر یا عبارت جستجو را تغییر بده.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelected}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            selected={selected}
            onClose={() => setSelected(null)}
            activeImageIndex={activeImageIndex}
            onImageIndexChange={setActiveImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Sparkles,
  Globe,
  Brain,
  Shield,
  Rocket,
  Layers,
  Building2,
  Loader2,
  Search,
  Calendar,
  UserRound,
  Star,
  Code2,
  Image as ImageIcon,
  Lock,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: "web" | "ai" | "landing";
  categoryLabel: string;
  type: "client" | "personal";
  role: string;
  year: string;
  icon: string;
  desc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  highlights?: string[];
  link?: string;
  github?: string;
  coverImage?: string;
  images?: string[];
  gradient: string;
  accentColor: string;
  confidential?: boolean;
  stats?: Record<string, string>;
};

const CATEGORIES = [
  {
    id: "all",
    label: "همه پروژه‌ها",
    icon: Layers,
  },
  {
    id: "web",
    label: "وب",
    icon: Globe,
  },
  {
    id: "landing",
    label: "لندینگ",
    icon: Rocket,
  },
  {
    id: "ai",
    label: "هوش مصنوعی",
    icon: Brain,
  },
] as const;

const iconMap: Record<string, any> = {
  brain: Brain,
  shield: Shield,
  sparkles: Sparkles,
  globe: Globe,
  rocket: Rocket,
  building: Building2,
};
import React from "react";

import { clsx } from "clsx";

interface CategoryButtonProps {
  cat: { id: string; label: string; icon: any };
  isActive: boolean;
  onClick: (id: string) => void;
}

const CategoryButton = React.memo(
  ({ cat, isActive, onClick }: CategoryButtonProps) => {
    const Icon = cat.icon;

    return (
      <button
        key={cat.id}
        onClick={() => onClick(cat.id)}
        className={clsx(
          "inline-flex items-center gap-2 rounded-2xl border-t border-b-[0.2px] px-4 py-2.5 text-sm font-semibold transition-all",
          isActive
            ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10",
        )}>
        <Icon className="h-4 w-4" />
        {cat.label}
      </button>
    );
  },
);

CategoryButton.displayName = "CategoryButton";
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

    // return () => {
    //   document.body.style.overflow = "unset";
    // };
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
  const handleCategoryClick = React.useCallback((id: string) => {
    setActiveCategory(id);
  }, []);
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 px-4 transition-colors duration-500 dark:from-[#040404] dark:via-[#090909] dark:to-[#040404] sm:px-6 lg:px-8">
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
            مجموعه‌ای از پروژه‌های واقعی با تمرکز روی فرانت‌اند، تجربه کاربری،
            سرعت، و پیاده‌سازی تمیز و حرفه‌ای.
          </motion.p>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-background/50 p-4  backdrop-blur border-t border-b-[0.5px] md:flex-row md:items-center md:justify-between md:p-5">
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
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const IconComponent = iconMap[project.icon] || Globe;
                const hasImage = Boolean(project.coverImage);

                return (
                  <motion.button
                    layout
                    key={project.id}
                    type="button"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    onClick={() => setSelected(project)}
                    className="group relative overflow-hidden rounded-[2rem]   text-right border-t border-l p-1 pt-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]`}
                    />

                    <div className="relative">
                      <div className="relative h-56 rounded-4xl overflow-hidden">
                        {hasImage ? (
                          <Image
                            src={project.coverImage as string}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        ) : (
                          <div
                            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                            <IconComponent className="h-14 w-14 text-white/95" />
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                        <div className="absolute left-4 top-4 flex gap-2">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur dark:bg-black/40 dark:text-white">
                            {project.year}
                          </span>
                          <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 p-5">
                        <div>
                          <h3 className="line-clamp-1 text-xl font-black text-slate-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                            {project.desc}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-xl bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span
                              className={`rounded-xl bg-gradient-to-r ${project.gradient} px-3 py-1.5 text-[11px] font-bold text-white`}>
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-white/10">
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                            <UserRound className="h-4 w-4" />
                            {project.role}
                          </div>

                          <span className="text-sm font-bold text-violet-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                            مشاهده جزئیات
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
            <motion.button
              type="button"
              aria-label="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative scrollbar-minimal z-10 flex max-h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-[#0b0b0b]">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-white/10 sm:px-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${selected.gradient}`}>
                    {selected.confidential ? (
                      <Lock className="h-5 w-5 text-white" />
                    ) : (
                      <Sparkles className="h-5 w-5 text-white" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                      {selected.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {selected.year}
                      </span>
                      <span>•</span>
                      <span>{selected.categoryLabel}</span>
                      <span>•</span>
                      <span>{selected.role}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full bg-slate-100 p-2.5 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12">
                <div
                  className={`lg:col-span-5 bg-gradient-to-br ${selected.gradient} p-5 text-white sm:p-8`}>
                  <div className="space-y-5">
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10">
                      {selected.coverImage ? (
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={selected.coverImage}
                            alt={selected.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] w-full items-center justify-center">
                          <Code2 className="h-16 w-16 text-white/90" />
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white/85">
                        {selected.type === "client"
                          ? "پروژه کارفرمایی"
                          : "پروژه شخصی"}
                      </p>
                      <h4 className="mt-2 text-3xl font-black leading-tight">
                        {selected.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {selected.longDesc}
                      </p>
                    </div>

                    {selected.stats && (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {Object.entries(selected.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="rounded-2xl  inset-shadow-2xs border-b border-border/50  dark:inset-shadow-white/20 bg-card/5  p-4 backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">
                              {key}
                            </p>
                            <p className="mt-1 text-lg font-black">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {selected.highlights?.length ? (
                      <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                          نکات برجسته
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selected.highlights.map((item) => (
                            <span
                              key={item}
                              className="rounded-full dark:inset-shadow-white/20  inset-shadow-2xs border-b border-border/50 bg-card/5 px-3 py-1.5 text-xs font-semibold text-white">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="lg:col-span-7 bg-slate-50 p-5 dark:bg-[#090909] sm:p-8">
                  <div className="space-y-8">
                    <section>
                      <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                        <Star className="h-4 w-4" />
                        معرفی پروژه
                      </div>

                      <p className="leading-8 text-slate-700 dark:text-slate-300">
                        {selected.longDesc}
                      </p>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                        <Code2 className="h-4 w-4" />
                        تکنولوژی‌ها
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-xl dark:inset-shadow-white/20 inset-shadow-2xs border-b border-border/50 bg-card px-3 py-2 text-sm font-semibold t">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                        <ImageIcon className="h-4 w-4" />
                        ویژگی‌ها
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {selected.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-2xl  p-4 text-sm font-semibold dark:inset-shadow-white/20 inset-shadow-2xs border-b border-border/50 bg-card">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </section>

                    {selected.images?.length ? (
                      <section>
                        <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                          <ImageIcon className="h-4 w-4" />
                          تصاویر پروژه
                        </div>

                        <div className="space-y-4">
                          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                            <div className="relative aspect-[16/10] w-full">
                              <Image
                                src={selected.images[activeImageIndex]}
                                alt={`${selected.title} - ${activeImageIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                              />
                            </div>
                          </div>

                          <div className="flex gap-3 overflow-x-auto pb-1">
                            {selected.images.map((img, index) => (
                              <button
                                key={img + index}
                                onClick={() => setActiveImageIndex(index)}
                                className={[
                                  "relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all",
                                  activeImageIndex === index
                                    ? "border-violet-500 ring-2 ring-violet-500/30"
                                    : "border-slate-200 dark:border-white/10",
                                ].join(" ")}>
                                <Image
                                  src={img}
                                  alt={`${selected.title} thumb ${index + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="112px"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </section>
                    ) : null}

                    <section>
                      <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                        <Sparkles className="h-4 w-4" />
                        جزئیات تکمیلی
                      </div>

                      {selected.confidential ? (
                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-100">
                          این پروژه عمومی نیست و لینک یا سورس آن نمایش داده
                          نمی‌شود.
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-3">
                          {selected.link && (
                            <a
                              href={selected.link}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${selected.gradient} px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5`}>
                              <ExternalLink className="h-4 w-4" />
                              مشاهده خروجی
                            </a>
                          )}

                          {selected.github && (
                            <a
                              href={selected.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
                              <Github className="h-4 w-4" />
                              سورس کد
                            </a>
                          )}
                        </div>
                      )}
                    </section>
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

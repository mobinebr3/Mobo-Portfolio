"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Lock,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import type { Project } from "./types";

interface ProjectModalProps {
  selected: Project;
  onClose: () => void;
  activeImageIndex: number;
  onImageIndexChange: (index: number) => void;
}

export function ProjectModal({
  selected,
  onClose,
  activeImageIndex,
  onImageIndexChange,
}: ProjectModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageCount = selected.images?.length ?? 0;
  const currentImage = selected.images?.[activeImageIndex] ?? selected.images?.[0] ?? "";

  const goToPreviousImage = () => {
    if (!imageCount) return;
    const prev = (activeImageIndex - 1 + imageCount) % imageCount;
    onImageIndexChange(prev);
  };

  const goToNextImage = () => {
    if (!imageCount) return;
    const next = (activeImageIndex + 1) % imageCount;
    onImageIndexChange(next);
  };

  useEffect(() => {
    if (!isFullscreen || !imageCount) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }

      if (event.key === "ArrowRight") {
        goToNextImage();
      }

      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, imageCount, activeImageIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
      <motion.button
        type="button"
        aria-label="close"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
      />

      <motion.div
        layoutId={`card-${selected.id}`}
        className="relative scrollbar-minimal z-10 flex max-h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-[#0b0b0b]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-white/10 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br ${selected.gradient}`}>
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
            onClick={onClose}
            className="rounded-full bg-slate-100 p-2.5 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12">
          <div
            className={`bg-linear-to-br ${selected.gradient} p-5 text-white sm:p-8 lg:col-span-5`}>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10">
                {selected.coverImage ? (
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={selected.coverImage}
                      alt={selected.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-4/3 w-full items-center justify-center">
                    <Code2 className="h-16 w-16 text-white/90" />
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-white/85">
                  {selected.type === "client" ? "پروژه کارفرمایی" : "پروژه شخصی"}
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
                      className="rounded-2xl border-t border-border/50 bg-card/5 p-4 backdrop-blur inset-shadow-2xs dark:inset-shadow-white/20">
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
                        className="rounded-full border-t border-border/50 bg-card/5 px-3 py-1.5 text-xs font-semibold text-white inset-shadow-2xs dark:inset-shadow-white/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="bg-slate-50 p-5 dark:bg-[#090909] sm:p-8 lg:col-span-7">
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
                      className="rounded-xl border-b border-border/50 bg-card px-3 py-2 text-sm font-semibold inset-shadow-2xs dark:inset-shadow-white/20">
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
                      className="rounded-2xl border-b border-border/50 bg-card p-4 text-sm font-semibold inset-shadow-2xs dark:inset-shadow-white/20">
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
                    <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                      <button
                        type="button"
                        onClick={() => setIsFullscreen(true)}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100">
                        <span className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                          دیدن تمام صفحه
                        </span>
                      </button>

                      <div className="relative aspect-16/10 w-full">
                        <Image
                          src={currentImage}
                          alt={`${selected.title} - ${activeImageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={goToPreviousImage}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-violet-400">
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <div className="flex-1 overflow-x-auto pb-1">
                        <div className="flex gap-3">
                          {selected.images.map((img, index) => (
                            <button
                              key={img + index}
                              type="button"
                              onClick={() => onImageIndexChange(index)}
                              className={[
                                "relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all duration-200",
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

                      <button
                        type="button"
                        onClick={goToNextImage}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-violet-400">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </section>
              ) : null}

              {isFullscreen && currentImage ? (
                <div className="fixed inset-0 z-[110] flex h-dvh items-center justify-center bg-black/90 p-4">
                  <button
                    type="button"
                    onClick={() => setIsFullscreen(false)}
                    className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-black/70">
                    <X className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={goToPreviousImage}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:bg-black/70">
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:bg-black/70">
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                    <div className="relative aspect-16/10 h-200 w-full">
                      <Image
                        src={currentImage}
                        alt={`${selected.title} - ${activeImageIndex + 1}`}
                        fill 
                        
                        className="object-contain z-99999999!"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <section>
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  <Sparkles className="h-4 w-4" />
                  جزئیات تکمیلی
                </div>

                {selected.confidential ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-100">
                    این پروژه عمومی نیست و لینک یا سورس آن  در دسترس نیست  .
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {selected.link && (
                      <a
                        href={selected.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-2xl bg-linear-to-r ${selected.gradient} px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5`}>
                        <ExternalLink className="h-4 w-4" />
                        مشاهده سایت
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
  );
}

import Image from "next/image";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

import type { Project } from "./types";
import { iconMap } from "./constants";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon] || iconMap.globe;
  const hasImage = Boolean(project.coverImage);

  return (
    <motion.button
      layout
      type="button"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onClick={() => onSelect(project)}
      className="group relative overflow-hidden rounded-[2rem] border-t border-l p-1 pt-2 text-right transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]`}
      />

      <div className="relative">
        <div className="relative h-56 overflow-hidden rounded-4xl">
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
}

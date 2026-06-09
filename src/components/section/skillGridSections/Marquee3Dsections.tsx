import React, { memo } from "react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

// Icons Import
import { FaGithub, FaReact, FaVuejs, FaDocker, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiFramer, SiPostgresql, SiNestjs, SiMongodb, SiPrisma, SiExpress, SiNuxtdotjs, SiRedis } from "react-icons/si";
import { LiaNodeJs } from "react-icons/lia";

const allSkills = [
  // Frontend (توزیع شده برای نمایش بهترین‌ها در دو ستون اول موبایل)
  { name: "React", Icon: FaReact, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Next.js", Icon: RiNextjsFill, color: "text-slate-800 dark:text-white", bg: "bg-slate-500/10" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "Tailwind", Icon: RiTailwindCssFill, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600", bg: "bg-green-600/10" },
  
  { name: "Vue.js", Icon: FaVuejs, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Nuxt", Icon: SiNuxtdotjs, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Redux", Icon: SiRedux, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Framer Motion", Icon: SiFramer, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "NestJS", Icon: SiNestjs, color: "text-red-500", bg: "bg-red-500/10" },
  
  // Backend & DB
  { name: "Express.js", Icon: SiExpress, color: "text-gray-500 dark:text-gray-300", bg: "bg-gray-500/10" },
  { name: "Prisma", Icon: SiPrisma, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-500/10" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Redis", Icon: SiRedis, color: "text-red-600", bg: "bg-red-600/10" },
  
  // DevOps & Tools
  { name: "Git", Icon: FaGithub, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Docker", Icon: FaDocker, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "GraphQL", Icon: SiFramer, color: "text-pink-600", bg: "bg-pink-600/10" },
  { name: "Jest", Icon: SiFramer, color: "text-red-700", bg: "bg-red-700/10" },
  { name: "WebSockets", Icon: LiaNodeJs, color: "text-indigo-500", bg: "bg-indigo-500/10" },
];

const col1 = allSkills.slice(0, 5);
const col2 = allSkills.slice(5, 10);
const col3 = allSkills.slice(10, 15);
const col4 = allSkills.slice(15, 20);

const SkillCard = memo(({ bg, name, color, Icon }: { bg: string; name: string; color: string; Icon: any }) => {
  return (
    <div
      className={cn(
        // Responsive Layout & Padding
        "flex items-center gap-2 md:gap-3 px-2.5 py-1.5 md:px-4 md:py-3 rounded-xl md:rounded-3xl my-2 cursor-default transition-all duration-300",
        "bg-card border-t border-b-1 border-border/70",
        // Hover effects restricted to Desktop only to prevent mobile touch bugs
        "md:hover:scale-105 md:hover:border-slate-300 dark:md:hover:border-slate-600",
        // Force GPU acceleration
        "will-change-transform"
      )}
    >
      <div className={cn("flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl shrink-0", bg)}>
        <Icon className={cn("w-4 h-4 md:w-6 md:h-6 shrink-0", color)} />
      </div>
      <span className="text-[11px] md:text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
});
SkillCard.displayName = "SkillCard";

export function Marquee3D() {
  return (
    <div
      dir="ltr"
      className="relative flex h-[380px] md:h-[480px] w-full flex-row items-center justify-center gap-2 md:gap-4 overflow-hidden"
      style={{ perspective: "800px" }}
    >
      {/* Responsive Gradient Overlays */}
      <div className="bg-gradient-to-b from-background via-background/80 to-transparent w-full top-0 left-0 h-20 md:h-32 z-50 absolute pointer-events-none" />
      <div className="bg-gradient-to-t from-background via-background/80 to-transparent w-full bottom-0 left-0 h-20 md:h-32 z-50 absolute pointer-events-none" />
      
      <div
        className={cn(
          "flex flex-row items-center gap-2  md:gap-4 will-change-transform",
          // Mobile: Flat and performance-friendly alignment | Desktop: Full premium 3D effect
          "transform-none md:[transform:translateX(-50px)_translateY(0px)_translateZ(-100px)_rotateX(20deg)_rotateY(-10deg)_rotateZ(20deg)]"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Column 1 & 2: Visible everywhere */}
        <Marquee vertical className="[--duration:25s]">
          {col1.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        
        <Marquee reverse vertical className="[--duration:30s]">
          {col2.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        
        {/* Column 3 & 4: Hidden on mobile to increase breathing room and performance */}
        <Marquee vertical className="[--duration:22s] hidden md:block">
          {col3.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        
        <Marquee reverse vertical className="[--duration:28s] hidden md:block ">
          {col4.map((skill) => (
            <SkillCard key={skill.name} {...skill}  />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
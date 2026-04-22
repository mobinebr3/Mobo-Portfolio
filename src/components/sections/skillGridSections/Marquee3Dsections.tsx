import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";
import { DiDocker, DiNodejs, DiPostgresql } from "react-icons/di";

const row1 = [
  {
    name: "React",
    Icon: FaReact,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-400/10",
  },
  {
    name: "Next.js",
    Icon: RiNextjsFill,
    color: "text-slate-800 dark:text-white",
    bg: "bg-slate-100 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    Icon: RiTailwindCssFill,
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-400/10",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "text-blue-600 dark:text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
  {
    name: "Redux",
    Icon: BiLogoRedux,
    color: "text-purple-600 dark:text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-500/10",
  },
];

const row2 = [
  {
    name: "Framer",
    Icon: FiFramer,
    color: "text-pink-500 dark:text-pink-400",
    bg: "bg-pink-100 dark:bg-pink-400/10",
  },
  {
    name: "Node.js",
    Icon: DiNodejs,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-400/10",
  },
  {
    name: "PostgreSQL",
    Icon: DiPostgresql,
    color: "text-blue-500 dark:text-blue-300",
    bg: "bg-blue-100 dark:bg-blue-300/10",
  },
  {
    name: "Git",
    Icon: FaGithub,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-400/10",
  },
  {
    name: "Docker",
    Icon: DiDocker,
    color: "text-blue-600 dark:text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-500/10",
  },
];

const secondRow = row1.slice(0, Math.floor(row1.length / 2));
const firstRow = row1.slice(Math.floor(row2.length / 2));
const thirdRow = row2.slice(0, Math.floor(row1.length / 2));
const fourthRow = row2.slice(Math.floor(row2.length / 2));

const ReviewCard = ({
  bg,
  name,
  color,
  Icon,
}: {
  bg: string;
  name: string;
  color: string;
  Icon: any;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700/50",
        bg,
      )}>
      <Icon className={cn("w-6 h-6 shrink-0", color)} />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export function Marquee3D() {
  return (
    <div
      dir="ltr"
      className="relative flex h-76 w-full flex-row items-center justify-center gap-4 overflow-hidden"
      style={{ perspective: "200px" }}>
      <div
        className="flex flex-row items-center gap-4 "
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",

          transformStyle: "preserve-3d",
        }}>
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-card to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-card to-transparent" />
    </div>
  );
}

"use client";

import FigmaIcon from "@/components/icons/FigmaIcon";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

export const UiUxVisual = () => {
  let notifications = [
    {
      name: "Figma Design",
      desc: "Pixel-perfect handoff",
      time: "1m ago",
      icon: <FigmaIcon />,
      color:
        "bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-500 border-pink-200 dark:border-pink-500/20",
    },
    {
      name: "GSAP Animation",
      desc: "Smooth scroll enabled",
      time: "3m ago",
      icon: "✨",
      color:
        "bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500 border-green-200 dark:border-green-500/20",
    },
    {
      name: "Framer Motion",
      desc: "Layout transitions added",
      time: "5m ago",
      icon: "🚀",
      color:
        "bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-500 border-purple-200 dark:border-purple-500/20",
    },
    {
      name: "Anime.js",
      desc: "Complex timeline built",
      time: "10m ago",
      icon: "🎬",
      color:
        "bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-500 border-orange-200 dark:border-orange-500/20",
    },
  ];
  notifications = Array.from({ length: 10 }, () => notifications).flat();

  const Notification = ({ name, description, icon, color, time }: any) => {
    return (
      <figure
        className={cn(
          "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
          // animation styles
          "transition-all duration-200 ease-in-out hover:scale-[103%]",
          // light styles
          "bg-background",
          // dark styles
          "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
        )}>
        <div className="flex flex-row items-center gap-3">
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-2xl",
              color,
            )}>
            <span className="text-sm ">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
              <span className="text-sm sm:text-lg">{name}</span>
              <span className="mx-1">·</span>
              <span className="text-xs text-gray-500">{time}</span>
            </figcaption>
            <p className="text-sm font-normal dark:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </figure>
    );
  };

  return (
    <div
      dir="ltr"
      className={cn(
        "relative flex h-[350px] w-full flex-col overflow-hidden  p-4",
      )}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="from-card pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "../ui/dock";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import dynamic from "next/dynamic";

const GlassSurface = dynamic(() => import("../GlassSurface"), { ssr: false });

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  github: (props: IconProps) => <Github {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  email: (props: IconProps) => <Mail {...props} />,
};

const DATA = {
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Icons.linkedin,
      },
      X: {
        name: "X (Twitter)",
        url: "https://twitter.com/yourusername",
        icon: Icons.twitter,
      },
      Email: {
        name: "Email",
        url: "mailto:your@email.com",
        icon: Icons.email,
      },
    },
  },
};

export function NavBar() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    const scrollContainer = document.getElementById("page-scroll-container");

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <GlassSurface
        width={350}
        height={65}
        blur={8}
   
    
    
        className=" dark:inset-shadow-2xs  border-0! shadow-none rounded-3xl! dark:border-0! outline-0! max-sm:backdrop-blur-[5px]!  border-gray-500/50 bg-background/30! ">
        <Dock
          direction="middle"
          className="gap-2 backdrop-blur-none  border-0 mt-0 bg-transparent">
          {/* Home / Scroll to Top */}
          <DockIcon className="bg-card/0">
            <button
              onClick={scrollToTop}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12 rounded-full hover:bg-primary/10 hover:text-primary transition-colors",
              )}
              aria-label="Go to top">
              <HomeIcon className="size-4" />
            </button>
          </DockIcon>

          <Separator orientation="vertical" className="h-8 opacity-50" />

          {/* Social Links */}
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110",
                )}>
                <social.icon className="size-4" />
              </Link>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-8 opacity-50" />

          {/* Theme Toggle */}
          <DockIcon>
            <div className="size-5">
              <AnimatedThemeToggler />
            </div>
          </DockIcon>
        </Dock>
      </GlassSurface>
    </div>
  );
}

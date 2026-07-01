import {
  Brain,
  Building2,
  Globe,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import type { CategoryItem } from "./types";

export const CATEGORIES: CategoryItem[] = [
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
];

export const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  shield: Shield,
  sparkles: Sparkles,
  globe: Globe,
  rocket: Rocket,
  building: Building2,
};

import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "web" | "ai" | "landing";
export type ProjectType = "client" | "personal";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  type: ProjectType;
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

export type CategoryItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

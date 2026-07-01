import { memo } from "react";
import { clsx } from "clsx";

import type { CategoryItem } from "./types";

interface CategoryButtonProps {
  cat: CategoryItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

const CategoryButton = memo(({ cat, isActive, onClick }: CategoryButtonProps) => {
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
});

CategoryButton.displayName = "CategoryButton";

export { CategoryButton };

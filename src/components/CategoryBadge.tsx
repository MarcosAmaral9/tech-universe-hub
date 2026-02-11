import { Category } from "@/types/blog";

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md" | "lg";
}

const categoryConfig: Record<Category, { label: string; className: string }> = {
  ia: { label: "IA", className: "category-ia" },
  invest: { label: "Finanças", className: "category-invest" },
  geek: { label: "Geek", className: "category-geek" },
  otaku: { label: "Otaku", className: "category-otaku" },
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const CategoryBadge = ({ category, size = "md" }: CategoryBadgeProps) => {
  const config = categoryConfig[category];

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${config.className} ${sizeClasses[size]}`}
    >
      {config.label}
    </span>
  );
};

export default CategoryBadge;

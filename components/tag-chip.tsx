import { cn } from "@/lib/utils";

interface TagChipProps {
  tag: string;
  active?: boolean;
  small?: boolean;
  variant?: "default" | "light";
  onClick?: () => void;
}

export function TagChip({
  tag,
  active = false,
  small = false,
  variant = "default",
  onClick,
}: TagChipProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex cursor-pointer items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        small && "px-2 py-0.5 text-[10px]",
        variant === "default" &&
          (active
            ? "bg-[#507c49] text-white"
            : "bg-[#F8F5F0] text-[#2D2A26]/75 hover:bg-[#E8E2D9]"),
        variant === "light" && "bg-white/20 text-white backdrop-blur-sm"
      )}
    >
      {tag}
    </span>
  );
}

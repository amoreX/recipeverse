"use client";

import type React from "react";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
interface SaveButtonProps {
  recipeId: string;
}

export function SaveButton({ recipeId }: SaveButtonProps) {
  const [saved, setSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setSaved(!saved);
    toast(
      saved ? "Recipe removed from favorites" : "Recipe saved to favorites"
    );
  };

  return (
    <Button
      size="icon"
      variant="secondary"
      className={`h-9 w-9 rounded-full ${
        saved
          ? "bg-[#6B8068] text-white hover:bg-[#5A6B58]"
          : "bg-white/90 text-[#2D2A26] hover:bg-white hover:text-[#6B8068]"
      } backdrop-blur-sm`}
      onClick={toggleSave}
    >
      <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
      <span className="sr-only">{saved ? "Unsave" : "Save"}</span>
    </Button>
  );
}

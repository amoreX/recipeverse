"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { TagChip } from "@/components/tag-chip";
import { SaveButton } from "@/components/save-button";
import { useRecipeStore } from "@/stores/recipeStore";
import { Recipe } from "@/lib/types";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const router = useRouter();
  const { selectRecipe } = useRecipeStore();
  const [imageLoading, setImageLoading] = useState(true);

  const handleClick = () => {
    selectRecipe(recipe);
    router.push(`/routes/recipes/${recipe.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer py-0 overflow-hidden rounded-2xl border-[#E8E2D9] transition-all hover:shadow-md"
    >
      <div className="relative block overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f3f1ed]">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#6B8068] border-t-transparent" />
          </div>
        )}
        <Image
          src={
            recipe.image_url ||
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23E8E2D9'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%236B8068' text-anchor='middle' alignment-baseline='middle'%3E🍞%3C/text%3E%3C/svg%3E"
          }
          alt={recipe.title}
          width={600}
          height={400}
          className={`aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setImageLoading(false)}
        />
        <div className="absolute right-3 top-3 z-20">
          <SaveButton recipeId={recipe.id} />
        </div>
      </div>

      <CardContent className="px-5 pb-5">
        <div className="mb-2 flex flex-wrap gap-1">
          {recipe.tags.slice(0, 2).map((tag) => (
            <TagChip key={tag} tag={tag} small />
          ))}
          {recipe.tags.length > 2 && (
            <span className="text-xs text-muted-foreground">
              +{recipe.tags.length - 2}
            </span>
          )}
        </div>
        <h3 className="mb-2 font-serif text-lg font-semibold tracking-tight text-[#2D2A26] group-hover:text-[#6B8068]">
          {recipe.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-[#2D2A26]/70">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{recipe.cook_time} mins</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

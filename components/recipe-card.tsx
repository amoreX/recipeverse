"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { TagChip } from "@/components/tag-chip";
import { UserBadge } from "@/components/user-badge";
import { SaveButton } from "@/components/save-button";
import { useRecipeStore } from "@/stores/recipeStore";
import { Recipe } from "@/lib/types";
interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { selectRecipe } = useRecipeStore();
  return (
    <Card className="group overflow-hidden rounded-2xl border-[#E8E2D9] transition-all hover:shadow-md">
      <Link
        href={`/recipes/${recipe.id}`}
        className="relative block overflow-hidden"
      >
        <Image
          src={recipe.image_url || "/placeholder.svg?height=400&width=600"}
          alt={recipe.title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 z-10">
          <SaveButton recipeId={recipe.id} />
        </div>
      </Link>
      <CardContent className="p-5">
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
        <Link href={`/recipes/${recipe.id}`}>
          <h3 className="mb-2 font-serif text-lg font-semibold tracking-tight text-[#2D2A26] hover:text-[#6B8068]">
            {recipe.title}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm text-[#2D2A26]/70">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between">
          {/* <UserBadge user={recipe.user_id} /> */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{recipe.cook_time} mins</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

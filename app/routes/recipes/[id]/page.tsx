"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Share2 } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TagChip } from "@/components/tag-chip";
import { UserBadge } from "@/components/user-badge";
import { SaveButton } from "@/components/save-button";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { useRecipeStore } from "@/stores/recipeStore";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/types";
import axios from "axios";

export default function RecipeDetailPage() {
  const params = useParams();
  const recipeId_url = params.id;
  const { selectedRecipe, selectRecipe } = useRecipeStore();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const recipe = selectedRecipe;

  useEffect(() => {
    if (!recipe) {
      const getSpecificRecipe = async () => {
        try {
          setIsLoading(true);
          const res = await axios.post("/api/getRecipe", {
            recipeId: recipeId_url,
          });
          selectRecipe(res.data.recipeDetails);
          setHasError(false);
        } catch (err) {
          console.error(err);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getSpecificRecipe();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleUser = async () => {
      const res = await axios.post("/api/getUser", {
        recipeId: recipe?.id,
      });
      setUser(res.data.user);
    };
    if (recipe) {
      handleUser();
    }
  }, [selectedRecipe]);

  const getIngredientDisplay = (ingredient: {
    description: string;
    quantity?: number;
    unit?: string;
  }) => {
    const quantityPart = ingredient.quantity ? `${ingredient.quantity} ` : "";
    const unitPart = ingredient.unit ? `${ingredient.unit} ` : "";
    return `${quantityPart}${unitPart}${ingredient.description}`.trim();
  };

  const toggleIngredient = (ingredientDisplay: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredientDisplay)
        ? prev.filter((i) => i !== ingredientDisplay)
        : [...prev, ingredientDisplay]
    );
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => toast("Link Copied!"))
      .catch((err) => console.error("Failed to copy URL: ", err));
  };

  if (isLoading) {
    return (
      <LayoutWithHeader>
        <section className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-6 w-2/5 mt-8" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
          </div>
        </section>
      </LayoutWithHeader>
    );
  }

  if (hasError) {
    return (
      <LayoutWithHeader>
        <div className="flex min-h-[400px] items-center justify-center px-4 py-12 md:px-6">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold text-[#2D2A26]">
              Recipe not found
            </h1>
            <p className="mt-2 text-muted-foreground">
              The recipe you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="mt-4 bg-[#6B8068] hover:bg-[#5A6B58]">
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </LayoutWithHeader>
    );
  }
  if (recipe)
    return (
      <LayoutWithHeader>
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${recipe.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </div>
          <div className="relative flex min-h-[300px] flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-6 md:py-24">
            <div className="flex gap-2">
              {recipe.tags.map((tag) => (
                <TagChip key={tag} tag={tag} variant="light" />
              ))}
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {recipe.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{recipe.cook_time} mins</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
            <div className="order-2 md:order-1">
              <div className="mb-8">
                <h2 className="mb-4 font-serif text-xl font-semibold text-[#2D2A26]">
                  Description
                </h2>
                <p className="text-[#2D2A26]/80">{recipe.description}</p>
              </div>
              <div className="mb-8">
                <h2 className="mb-4 font-serif text-xl font-semibold text-[#2D2A26]">
                  Instructions
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions
                    .sort((a, b) => a.step_number - b.step_number)
                    .map((instruction, index) => (
                      <li
                        key={instruction.step_number}
                        className="grid gap-4 md:grid-cols-[auto_1fr]"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B8068] font-medium text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-[#2D2A26]/80">
                            {instruction.description}
                          </p>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="sticky top-4 rounded-2xl border border-[#E8E2D9] bg-white p-6">
                <div className="mb-6 flex items-center justify-between">
                  <UserBadge user={user} />
                </div>

                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-[#2D2A26]">
                      Ingredients
                    </h3>
                    <div className="flex gap-2">
                      <SaveButton recipeId={recipe.id} />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-9 w-9 rounded-full"
                        onClick={handleShare}
                      >
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {recipe.ingredients
                      .sort((a, b) => a.order_index - b.order_index)
                      .map((ingredient, index) => {
                        const displayText = getIngredientDisplay(ingredient);
                        return (
                          <li key={index} className="flex items-start gap-2">
                            <Checkbox
                              id={`ingredient-${index}`}
                              checked={checkedIngredients.includes(displayText)}
                              onCheckedChange={() =>
                                toggleIngredient(displayText)
                              }
                              className="mt-1 border-[#E8E2D9] data-[state=checked]:border-[#6B8068] data-[state=checked]:bg-[#6B8068]"
                            />
                            <label
                              htmlFor={`ingredient-${index}`}
                              className={`cursor-pointer text-[#2D2A26]/80 ${
                                checkedIngredients.includes(displayText)
                                  ? "line-through opacity-50"
                                  : ""
                              }`}
                            >
                              {displayText}
                            </label>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutWithHeader>
    );
}

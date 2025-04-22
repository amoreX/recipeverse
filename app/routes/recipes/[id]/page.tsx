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
import { motion } from "framer-motion"; // Import framer-motion

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

  // ai slop here
  if (isLoading) {
    return (
      <LayoutWithHeader>
        <section className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
            {/* Left column: Recipe Content */}
            <div className="space-y-4">
              <Skeleton className="h-64 w-full rounded-2xl" />{" "}
              {/* Recipe Image */}
              <Skeleton className="h-6 w-1/2" /> {/* Recipe Title */}
              <Skeleton className="h-4 w-full" /> {/* Description */}
              <Skeleton className="h-4 w-5/6" /> {/* Description */}
              <Skeleton className="h-6 w-2/5 mt-8" /> {/* Instructions */}
              <Skeleton className="h-4 w-full" /> {/* Instructions */}
              <Skeleton className="h-4 w-2/3" /> {/* Instructions */}
            </div>
            {/* Right column: User and Action Buttons */}
            <div>
              <Skeleton className="h-16 w-full rounded-2xl" />{" "}
              {/* User Badge */}
              <div className="mt-6">
                <Skeleton className="h-8 w-3/4 mb-2" /> {/* Save Button */}
                <Skeleton className="h-8 w-3/4" /> {/* Share Button */}
              </div>
              <div className="mt-6">
                <Skeleton className="h-6 w-full" /> {/* Ingredients Header */}
                <Skeleton className="h-4 w-full" /> {/* Ingredients List */}
                <Skeleton className="h-4 w-full" /> {/* Ingredients List */}
              </div>
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
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${recipe.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </motion.div>

          <motion.div
            className="relative flex min-h-[300px] flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-6 md:py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-2">
              {recipe.tags.map((tag) => (
                <TagChip key={tag} tag={tag} variant="light" />
              ))}
            </div>
            <motion.h1
              className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {recipe.title}
            </motion.h1>
            <motion.div
              className="flex items-center gap-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{recipe.cook_time} mins</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">{recipe.servings} servings</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="mb-8">
                <motion.h2
                  className="mb-4 font-serif text-xl font-semibold text-[#2D2A26]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Description
                </motion.h2>
                <motion.p
                  className="text-[#2D2A26]/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {recipe.description}
                </motion.p>
              </div>
              <div className="mb-8">
                <motion.h2
                  className="mb-4 font-serif text-xl font-semibold text-[#2D2A26]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Instructions
                </motion.h2>
                <motion.ol
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {recipe.instructions
                    .sort((a, b) => a.step_number - b.step_number)
                    .map((instruction, index) => (
                      <motion.li
                        key={instruction.step_number}
                        className="grid gap-4 md:grid-cols-[auto_1fr]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B8068] font-medium text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-[#2D2A26]/80">
                            {instruction.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                </motion.ol>
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
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
                          <motion.li
                            key={index}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                          >
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
                          </motion.li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </LayoutWithHeader>
    );
}

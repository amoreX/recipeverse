"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRecipeStore } from "@/stores/recipeStore";
import { Button } from "@/components/ui/button";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { BasicInformation } from "./components/BasicInformation";
import { Ingredients } from "./components/Ingredients";
import { Instructions } from "./components/Instructions";
import { RecipeImage } from "./components/RecipeImage";
import { Tags } from "./components/Tags";
import { AdditionalDetails } from "./components/AdditionalDetails";
import { useRouter } from "next/navigation";
import { userStore } from "@/stores/userStore";
import { Ingredient, Instruction } from "@/lib/types";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";

export default function CreateRecipePage() {
  const router = useRouter();
  const { recipes, addRecipe, draftRecipes } = useRecipeStore();
  const { user, isAuthenticated, hasHydrated } = userStore();

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>(["Seasonal"]);
  const [recipetitle, setRecipetitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [cookTime, setCookTime] = useState<number>(15);
  const [servings, setServings] = useState<number>(4);
  const [diff, setDiff] = useState<string>();
  const [cuisine, setCuisine] = useState<string>();
  const [recipeUrl, setRecipeUrl] = useState<string>("");

  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.push("/");
    }
  }, [router, hasHydrated, isAuthenticated]);

  useEffect(() => {
    console.log("This is from zustand:", recipes);
    console.log("This is drafted:", draftRecipes);
  }, [recipes]);

  if (!hasHydrated) return null;

  const handleSave = async () => {
    try {
      const payload = {
        userId: user?.id,
        title: recipetitle,
        description: desc,
        image_url: recipeUrl,
        cook_time: cookTime,
        servings: servings,
        difficulty: diff,
        cuisine: cuisine,
        is_published: true,
        ingredients: ingredients.map((ing, index) => ({
          ...ing,
          order_index: index,
        })),
        instructions: instructions.map((step, index) => ({
          ...step,
          step_number: index + 1,
        })),
        tags: selectedTags,
      };

      const res = await axios.post("/api/addRecipe", payload);
      addRecipe(res.data.recipeDetails);
      if (res.status === 200) {
        toast("Recipe Published!", { style: { color: "green" } });
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (err) {
      console.error("Error saving draft:", err);
      alert("Failed to publish");
    }
  };

  const handleDraft = async () => {
    try {
      const payload = {
        userId: user?.id,
        title: recipetitle,
        description: desc,
        image_url: recipeUrl,
        cook_time: cookTime,
        servings: servings,
        difficulty: diff,
        cuisine: cuisine,
        is_published: false,
        ingredients: ingredients.map((ing, index) => ({
          ...ing,
          order_index: index,
        })),
        instructions: instructions.map((step, index) => ({
          ...step,
          step_number: index + 1,
        })),
        tags: selectedTags,
      };

      const res = await axios.post("/api/addRecipe", payload);
      addRecipe(res.data.recipeDetails);
      if (res.status === 200) {
        toast("Recipe Drafted!", { style: { color: "green" } });
      }
    } catch (err) {
      console.error("Error publishing recipe:", err);
      alert("Failed to save draft");
    }
  };

  return (
    <LayoutWithHeader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-8 md:px-6 md:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center"
        >
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/routes/profile" className="text-[#2D2A26]">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            Create New Recipe
          </h1>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <BasicInformation
                desc={desc}
                setDesc={setDesc}
                recipetitle={recipetitle}
                setRecipetitle={setRecipetitle}
                cookTime={cookTime}
                setCookTime={setCookTime}
                servings={servings}
                setServings={setServings}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Ingredients
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Instructions
                instructions={instructions}
                setInstructions={setInstructions}
              />
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <RecipeImage setRecipeUrl={setRecipeUrl} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Tags
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AdditionalDetails setDiff={setDiff} setCuisine={setCuisine} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <Button
                variant="outline"
                className="flex-1 border-[#E8E2D9] hover:bg-[#F8F5F0]"
                onClick={handleDraft}
              >
                Save Draft
              </Button>
              <Button
                className="flex-1 bg-[#6B8068] hover:bg-[#5A6B58]"
                onClick={handleSave}
              >
                Publish Recipe
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </LayoutWithHeader>
  );
}

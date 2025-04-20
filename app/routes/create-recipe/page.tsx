"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
import { Ingredient } from "@/lib/types";
import { Instruction } from "@/lib/types";
export default function CreateRecipePage() {
  const router = useRouter();
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
  const [recipeUrl, setRecipeUrl] = useState<string>();
  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.push("/");
    }
  }, [router, hasHydrated, isAuthenticated]);
  if (!hasHydrated) return null;

  const handleDraft = () => {
    console.log("Wont lemme push");
    console.log("Wont lemme push");
    console.log("Wont lemme push");
  };

  const handleSave = () => {};
  return (
    <LayoutWithHeader>
      <div className=" px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/routes/profile" className="text-[#2D2A26]">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            Create New Recipe
          </h1>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
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
            <Ingredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <Instructions
              instructions={instructions}
              setInstructions={setInstructions}
            />
          </div>
          <div className="space-y-8">
            <RecipeImage setRecipeUrl={setRecipeUrl} />
            <Tags
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
            <AdditionalDetails setDiff={setDiff} setCuisine={setCuisine} />
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-[#E8E2D9] hover:bg-[#F8F5F0]"
                onClick={() => {
                  handleSave();
                }}
              >
                Save Draft
              </Button>
              <Button
                className="flex-1 bg-[#6B8068] hover:bg-[#5A6B58]"
                onClick={() => {
                  handleDraft();
                }}
              >
                Publish Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithHeader>
  );
}

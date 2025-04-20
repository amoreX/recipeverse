"use client";

import { useState } from "react";
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

export default function CreateRecipePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [newInstruction, setNewInstruction] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(["Seasonal"]);

  return (
    <LayoutWithHeader>
      <div className=" px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/" className="text-[#2D2A26]">
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
            <BasicInformation />
            <Ingredients
              ingredients={ingredients}
              setIngredients={setIngredients}
              newIngredient={newIngredient}
              setNewIngredient={setNewIngredient}
            />
            <Instructions
              instructions={instructions}
              setInstructions={setInstructions}
              newInstruction={newInstruction}
              setNewInstruction={setNewInstruction}
            />
          </div>
          <div className="space-y-8">
            <RecipeImage />
            <Tags
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
            <AdditionalDetails />
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 border-[#E8E2D9] hover:bg-[#F8F5F0]"
              >
                Save Draft
              </Button>
              <Button className="flex-1 bg-[#6B8068] hover:bg-[#5A6B58]">
                Publish Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithHeader>
  );
}

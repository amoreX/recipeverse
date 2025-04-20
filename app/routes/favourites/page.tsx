"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { popularTags } from "@/lib/data";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { NoRecipeSvg } from "@/components/noRecipeSvg";
import axios from "axios";
import { userStore } from "@/stores/userStore";
import { Recipe } from "@/lib/types";

export default function FavoritesPage() {
  const { user } = userStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const getfav = async () => {
    if (!user?.id) return;
    const res = await axios.post("/api/getFavourites", {
      userId: user.id,
    });
    setSavedRecipes(res.data.favs || []);
  };

  useEffect(() => {
    getfav();
  }, [user?.id]);

  const filteredRecipes = savedRecipes.filter((recipe) => {
    const matchesSearch =
      searchQuery === "" ||
      recipe.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => recipe.tags?.includes(tag));

    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <LayoutWithHeader>
      <div className=" px-4 py-8 md:px-6 md:py-12 space-y-8">
        <div>
          <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            My Favorite Recipes
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your collection of saved recipes for easy access.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-[#E8E2D9] pl-10 focus-visible:ring-[#6B8068]"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button key={tag} onClick={() => toggleTag(tag)}>
              <TagChip tag={tag} active={selectedTags.includes(tag)} />
            </button>
          ))}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E2D9] bg-white p-8 text-center">
            <NoRecipeSvg />
            <h3 className="mb-2 font-serif text-lg font-semibold text-[#2D2A26]">
              No favorites yet
            </h3>
            <p className="mb-4 text-muted-foreground">
              Start exploring recipes and save your favorites to see them here.
            </p>
            <Button asChild className="bg-[#6B8068] hover:bg-[#5A6B58]">
              <Link href="/">Explore Recipes</Link>
            </Button>
          </div>
        )}
      </div>
    </LayoutWithHeader>
  );
}

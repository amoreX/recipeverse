"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { Search, Plus } from "lucide-react";
import { popularTags } from "@/lib/data";
import { NoRecipeSvg } from "@/components/noRecipeSvg";
import { RecipesTabContentProps } from "@/lib/types";
export function RecipesTabContent({
  recipes,
  searchQuery,
  setSearchQuery,
  selectedTags,
  setSelectedTags,
  view,
  setView,
}: RecipesTabContentProps) {
  const allRecipes =
    view === "all"
      ? [...recipes.published, ...recipes.drafts]
      : view === "published"
      ? recipes.published
      : recipes.drafts;

  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch =
      searchQuery === "" ||
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => recipe.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={view === "all" ? "default" : "outline"}
          onClick={() => setView("all")}
          className={
            view === "all"
              ? "bg-[#6B8068] hover:bg-[#5A6B58]"
              : "border-[#E8E2D9] hover:bg-[#F8F5F0]"
          }
        >
          All Recipes
        </Button>
        <Button
          variant={view === "published" ? "default" : "outline"}
          onClick={() => setView("published")}
          className={
            view === "published"
              ? "bg-[#6B8068] hover:bg-[#5A6B58]"
              : "border-[#E8E2D9] hover:bg-[#F8F5F0]"
          }
        >
          Published
        </Button>
        <Button
          variant={view === "drafts" ? "default" : "outline"}
          onClick={() => setView("drafts")}
          className={
            view === "drafts"
              ? "bg-[#6B8068] hover:bg-[#5A6B58]"
              : "border-[#E8E2D9] hover:bg-[#F8F5F0]"
          }
        >
          Drafts
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search your recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-[#E8E2D9] pl-10 focus-visible:ring-[#6B8068]"
          />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px] border-[#E8E2D9] focus-visible:ring-[#6B8068]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="z-a">Z-A</SelectItem>
              <SelectItem value="cook-time">Cook Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTags((prev: string[]) =>
                prev.includes(tag)
                  ? prev.filter((t: string) => t !== tag)
                  : [...prev, tag]
              )
            }
          >
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
            No recipes yet
          </h3>
          <p className="mb-4 text-muted-foreground">
            {view === "all"
              ? "You haven't created any recipes yet."
              : view === "published"
              ? "You don't have any published recipes yet."
              : "You don't have any draft recipes yet."}
          </p>
          <Button asChild className="bg-[#6B8068] hover:bg-[#5A6B58]">
            <a href="/routes/create-recipe">Create Your First Recipe</a>
          </Button>
        </div>
      )}
    </div>
  );
}

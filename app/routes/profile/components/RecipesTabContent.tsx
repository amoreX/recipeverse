"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { Search, Plus } from "lucide-react";
import { popularTags } from "@/lib/data";
import { NoRecipeSvg } from "@/components/noRecipeSvg";
import { RecipesTabContentProps } from "@/lib/types";
import { motion } from "framer-motion";

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
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button
          variant={view === "all" ? "default" : "outline"}
          onClick={() => setView("all")}
          className={
            view === "all"
              ? "bg-[#507c49] hover:bg-[#5A6B58]"
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
              ? "bg-[#507c49] hover:bg-[#5A6B58]"
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
              ? "bg-[#507c49] hover:bg-[#5A6B58]"
              : "border-[#E8E2D9] hover:bg-[#F8F5F0]"
          }
        >
          Drafts
        </Button>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-[1fr_auto]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search your recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-[#E8E2D9] pl-10 focus-visible:ring-[#507c49]"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {popularTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() =>
              setSelectedTags((prev: string[]) =>
                prev.includes(tag)
                  ? prev.filter((t: string) => t !== tag)
                  : [...prev, tag]
              )
            }
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <TagChip tag={tag} active={selectedTags.includes(tag)} />
          </motion.button>
        ))}
      </motion.div>

      {filteredRecipes.length > 0 ? (
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <RecipeCard recipe={recipe} isDraft={view === "drafts"} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E2D9] bg-white p-8 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
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
          <Button asChild className="bg-[#507c49] hover:bg-[#5A6B58]">
            <a href="/routes/create-recipe">Create Your First Recipe</a>
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

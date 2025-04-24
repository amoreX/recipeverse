"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { popularTags } from "@/lib/data";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { NoRecipeSvg } from "@/components/noRecipeSvg";
import axios from "axios";
import { userStore } from "@/stores/userStore";
import { Recipe } from "@/lib/types";
import { RecipeCardSkeleton } from "@/components/recipe-skeleton-card";

export default function FavoritesPage() {
  const router = useRouter();
  const { user, hasHydrated, isAuthenticated } = userStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const getfav = async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/getFavourites", {
        userId: user.id,
      });
      setSavedRecipes(res.data.favs || []);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setLoading(false);
    }
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

  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.push("/routes/signin");
    }
  }, [router, hasHydrated, isAuthenticated]);

  if (!hasHydrated) return null;

  return (
    <LayoutWithHeader>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" px-4 py-8 md:px-6 md:py-12 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
              My Favorite Recipes
            </h1>
            <p className="mt-2 text-muted-foreground">
              Your collection of saved recipes for easy access.
            </p>
          </motion.div>

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
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <TagChip tag={tag} active={selectedTags.includes(tag)} />
              </motion.button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <>
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
              </>
            ) : filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <RecipeCard key={recipe.id} recipe={recipe} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex min-h-[300px] w-screen flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E2D9] bg-white p-8 text-center"
              >
                <NoRecipeSvg />
                <h3 className="mb-2 font-serif text-lg font-semibold text-[#2D2A26]">
                  No favorites yet
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Start exploring recipes and save your favorites to see them
                  here.
                </p>
                <Button asChild className="bg-[#6B8068] hover:bg-[#5A6B58]">
                  <Link href="/routes/explore">Explore Recipes</Link>
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </LayoutWithHeader>
  );
}

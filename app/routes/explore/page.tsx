"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { popularTags } from "@/lib/data";
import { LayoutWithHeader } from "@/components/layout-with-header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Recipe, placeholder } from "@/lib/types";
import { useRouter } from "next/navigation";
import { RecipeCardSkeleton } from "@/components/recipe-skeleton-card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function Explore() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImage, setHeroImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [heroLoading, setHeroLoading] = useState(true);

  useEffect(() => {
    const gettingAllRecipe = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/getAllRecipes");
        setRecipes(res.data.allRecipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    gettingAllRecipe();
  }, [router]);

  useEffect(() => {
    if (recipes?.length === 0) return;
    if (!recipes) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [recipes]);

  useEffect(() => {
    if (!recipes) return;
    setHeroImage(
      recipes.length > 0
        ? recipes[currentImageIndex]?.image_url || placeholder
        : placeholder
    );
  }, [currentImageIndex]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredRecipes = recipes?.filter((recipe) => {
    const matchesTags =
      selectedTags.length === 0 ||
      recipe.tags.some((tag) => selectedTags.includes(tag));
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTags && matchesSearch;
  });

  return (
    <LayoutWithHeader>
      <section className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImage && (
            <img
              src={heroImage}
              alt="Hero"
              onLoad={() => setHeroLoading(false)}
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                heroLoading ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {heroLoading && (
            <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex min-h-[400px] flex-col items-center justify-center gap-4 px-4 py-24 text-center md:px-6"
        >
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Discover & Share Delicious Recipes
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-lg">
            Join our community of food lovers to find inspiration and share your
            culinary creations.
          </p>
          <div className="mt-4 flex w-full max-w-md flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full rounded-full border-none bg-white/90 pl-10 py-6 text-[#2D2A26] placeholder:text-muted-foreground duration-300 transition-all ease-in-out focus-visible:ring-2 focus-visible:ring-[#507c49]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-8 md:px-6 md:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            Popular Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {popularTags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TagChip
                    tag={tag}
                    active={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            Featured Recipes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <>
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
                <RecipeCardSkeleton />
              </>
            ) : filteredRecipes?.length ? (
              <AnimatePresence>
                {filteredRecipes.map((recipe) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RecipeCard recipe={recipe} />
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <p className="text-[#2D2A26]">No recipes found.</p>
            )}
          </div>
        </div>
      </motion.section>
    </LayoutWithHeader>
  );
}

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
export default function Explore() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImage, setHeroImage] = useState<string>("");
  const [loading, setLoading] = useState(true);

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
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [recipes]);
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  useEffect(() => {
    if (!recipes) return;
    setHeroImage(
      recipes.length > 0
        ? recipes[currentImageIndex]?.image_url || placeholder
        : placeholder
    );
  }, [currentImageIndex]);

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
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-4 px-4 py-24 text-center md:px-6">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Discover & Share Delicious Recipes
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-lg">
            Join our community of food lovers to find inspiration and share your
            culinary creations.
          </p>
          <div className="mt-4 flex w-full max-w-md flex-col gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full rounded-full border-none bg-white/90 pl-10 text-[#2D2A26] placeholder:text-muted-foreground focus-visible:ring-[#6B8068]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
            Popular Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <TagChip
                key={tag}
                tag={tag}
                active={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        </div>

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
              filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p className="text-[#2D2A26]">No recipes found.</p>
            )}
          </div>
        </div>
      </section>
    </LayoutWithHeader>
  );
}

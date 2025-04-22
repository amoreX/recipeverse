"use client";

import { useState, useEffect } from "react";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { userStore } from "@/stores/userStore";
import { useRecipeStore } from "@/stores/recipeStore";
import { ProfileTabs } from "./components/ProfileTabs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, hasHydrated } = userStore();
  const { recipes, publishedRecipes, draftRecipes, setRecipes } = useRecipeStore();

  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [view, setView] = useState<string>("all");

  useEffect(() => {
    if (hasHydrated && !isAuthenticated) {
      router.push("/");
    }
  }, [router, hasHydrated, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const getRecipes = async () => {
        const res = await axios.post("/api/getRecipes", {
          userId: user?.id,
        });
        const allRecipes = res.data.recipeDetails;
        if (allRecipes) {
          setRecipes(allRecipes);
        }
      };
      getRecipes();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log("This is from zustand profile page:", recipes);
  }, [recipes]);

  if (!hasHydrated) return null;

  return (
    <LayoutWithHeader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-8 md:px-6 md:py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ProfileTabs
            user={user}
            recipes={{
              all: recipes,
              published: publishedRecipes,
              drafts: draftRecipes,
            }}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            view={view}
            setView={setView}
          />
        </motion.div>
      </motion.div>
    </LayoutWithHeader>
  );
}

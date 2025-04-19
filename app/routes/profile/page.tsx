"use client";

import { useState, useEffect } from "react";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { userStore } from "@/stores/userStore";
import { useRecipeStore } from "@/stores/recipeStore";
import { ProfileTabs } from "./components/ProfileTabs";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated } = userStore();
  const { recipes, publishedRecipes, draftRecipes } = useRecipeStore();
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [view, setView] = useState<string>("all");
  console.log(user);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // avoid rendering during redirect
  return (
    <LayoutWithHeader>
      <div className="px-4 py-8 md:px-6 md:py-12">
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
      </div>
    </LayoutWithHeader>
  );
}

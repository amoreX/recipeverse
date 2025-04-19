"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { ProfileTabContent } from "./ProfileTabContent";
import { RecipesTabContent } from "./RecipesTabContent";
import { ProfileTabsProps } from "@/lib/types";
import { userStore } from "@/stores/userStore";
import { useState } from "react";
export function ProfileTabs({
  user,
  recipes,
  activeTab,
  setActiveTab,
  isEditing,
  setIsEditing,
  searchQuery,
  setSearchQuery,
  selectedTags,
  setSelectedTags,
  view,
  setView,
}: ProfileTabsProps) {
  const { setUser } = userStore();
  const [name, setName] = useState<String>("");
  const [bio, setBio] = useState<String>("");
  const [avatar, setAvatar] = useState<String>("");
  const handleEditSave = () => {
    if (user) {
      setUser({
        ...user,
        name: name.trim() !== "" ? name : user.name,
        bio: bio?.trim() !== "" ? bio : user.bio,
      });
    }
    //logic to update it in backend as well
    console.log("edit succesfful");
    setIsEditing(false);
  };
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <TabsList className="h-auto p-1">
          <TabsTrigger value="profile" className="rounded-lg px-4 py-2">
            Profile
          </TabsTrigger>
          <TabsTrigger value="recipes" className="rounded-lg px-4 py-2">
            My Recipes
          </TabsTrigger>
        </TabsList>
        <div>
          {activeTab === "profile" ? (
            isEditing ? (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#E8E2D9] hover:bg-[#F8F5F0]"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#6B8068] hover:bg-[#5A6B58]"
                  onClick={() => {
                    handleEditSave();
                  }}
                >
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#6B8068] hover:bg-[#5A6B58]"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            )
          ) : (
            <Button asChild className="bg-[#6B8068] hover:bg-[#5A6B58]">
              <a href="/routes/create-recipe">
                <Plus className="mr-2 h-4 w-4" />
                Create New Recipe
              </a>
            </Button>
          )}
        </div>
      </div>

      <TabsContent value="profile">
        <ProfileTabContent
          user={user}
          isEditing={isEditing}
          setName={setName}
          name={name}
          bio={bio}
          setBio={setBio}
          setAvatar={setAvatar}
        />
      </TabsContent>

      <TabsContent value="recipes">
        <RecipesTabContent
          recipes={recipes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          view={view}
          setView={setView}
        />
      </TabsContent>
    </Tabs>
  );
}

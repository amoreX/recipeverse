"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { ProfileTabContent } from "./ProfileTabContent";
import { RecipesTabContent } from "./RecipesTabContent";
import { ProfileTabsProps } from "@/lib/types";
import { userStore } from "@/stores/userStore";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleEditSave = async () => {
    if (!user) return;

    const updatedUser = {
      ...user,
      name: name.trim() !== "" ? name : user.name,
      bio: bio?.trim() !== "" ? bio : user.bio,
      avatar_url: avatar?.trim() !== "" ? avatar : user.avatar_url,
    };

    setLoading(true);
    try {
      await handleBackendSave(updatedUser);
      setUser(updatedUser);
      setIsEditing(false);
      toast("Profile Updated !", {
        style: {
          backgroundColor: "white",
          color: "green",
          textAlign: "center",
        },
      });
    } catch (err) {
      toast("Profile Update Failed!", {
        style: {
          backgroundColor: "white",
          color: "red",
          textAlign: "center",
        },
      });
      console.log("Backend profile update ERROR!");
    } finally {
      setLoading(false);
    }
  };

  const handleBackendSave = async (updatedUser: NonNullable<typeof user>) => {
    await axios.post("/api/updateUser", {
      userId: updatedUser.id,
      name: updatedUser.name || "",
      bio: updatedUser.bio || "",
      avatarurl: updatedUser.avatar_url || "",
    });
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
      <div className="flex items-center sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <TabsList className="h-auto p-1 flex-grow sm:flex-grow-0">
          <TabsTrigger value="profile" className="rounded-lg px-4 py-2">
            Profile
          </TabsTrigger>
          <TabsTrigger value="recipes" className="rounded-lg px-4 py-2">
            My Recipes
          </TabsTrigger>
        </TabsList>
        <div className="flex justify-end sm:justify-start">
          {activeTab === "profile" ? (
            isEditing ? (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="border-[#E8E2D9]  hover:bg-[#F8F5F0]"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#507c49] hover:bg-[#5A6B58]"
                  onClick={handleEditSave}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#507c49]  hover:bg-[#5A6B58]"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            )
          ) : (
            <Button asChild className="bg-[#507c49] hover:bg-[#5A6B58]">
              <a href="/routes/create-recipe">
                <Plus className="mr-2 h-4 w-4" />
                New Recipe
              </a>
            </Button>
          )}
        </div>
      </div>

      <TabsContent value="profile">
        <motion.div
          key="profile-tab"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProfileTabContent
            user={user}
            isEditing={isEditing}
            setName={setName}
            name={name}
            bio={bio}
            setBio={setBio}
            setAvatar={setAvatar}
          />
        </motion.div>
      </TabsContent>

      <TabsContent value="recipes">
        <motion.div
          key="recipes-tab"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <RecipesTabContent
            recipes={recipes}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            view={view}
            setView={setView}
          />
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}

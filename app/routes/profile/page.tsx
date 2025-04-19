"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Camera, Filter, Pencil, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecipeCard } from "@/components/recipe-card";
import { TagChip } from "@/components/tag-chip";
import { popularTags } from "@/lib/data";
import { LayoutWithHeader } from "@/components/layout-with-header";
import { userStore } from "@/stores/userStore";
export default function ProfilePage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const { user } = userStore();
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState<String>("");
  const [bio, setBio] = useState<String>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [view, setView] = useState<"all" | "published" | "drafts">("all");

  // Set active tab based on URL parameter
  useEffect(() => {
    if (tabParam === "recipes") {
      setActiveTab("recipes");
    }
  }, [tabParam]);

  // Redirect if not logged in

  // Initialize form values when user data is loaded
  if (user && name === "" && bio === "") {
    setName(user.email);
    setBio(user.bio || "");
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to the database
    setIsEditing(false);
    // Show success message
  };

  // Simulate user's recipes (in a real app, this would come from a database or API)
  //   const publishedRecipes = [filteredRecipes[0]];
  //   const draftRecipes = [
  //     {
  //       ...featuredRecipes[1],
  //       id: "draft1",
  //       title: "Work in Progress Pasta Recipe",
  //       description: "A draft recipe I'm still working on...",
  //       isDraft: true,
  //     },
  //   ];

  // Filter recipes based on view, search query and selected tags
  //   const allRecipes =
  //     view === "all"
  //       ? [...publishedRecipes, ...draftRecipes]
  //       : view === "published"
  //       ? publishedRecipes
  //       : draftRecipes;

  //   const filteredRecipes = allRecipes.filter((recipe) => {
  //     const matchesSearch =
  //       searchQuery === "" ||
  //       recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesTags =
  //       selectedTags.length === 0 ||
  //       selectedTags.some((tag) => recipe.tags.includes(tag));

  //     return matchesSearch && matchesTags;
  //   });

  //   if (isLoading) {
  //     return (
  //       <LayoutWithHeader>
  //         <div className="container flex min-h-[400px] items-center justify-center px-4 py-12 md:px-6">
  //           <div className="text-center">
  //             <p>Loading...</p>
  //           </div>
  //         </div>
  //       </LayoutWithHeader>
  //     );
  //   }

  return (
    <LayoutWithHeader>
      <div className=" px-4 py-8 md:px-6 md:py-12 ">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
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
                      onClick={handleSaveProfile}
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
                  <Link href="/create-recipe">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Recipe
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <TabsContent value="profile" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-[#F8F5F0] shadow-md">
                    {user?.avatar_url ? (
                      <Image
                        src={user.avatar_url || "/placeholder.svg"}
                        alt={"user_name"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-[#6B8068]">
                        {user?.email.charAt(0)}
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <div className="absolute bottom-2 right-2 rounded-full bg-[#6B8068] p-2 text-white shadow-md">
                      <label htmlFor="avatar-upload" className="cursor-pointer">
                        <Camera className="h-5 w-5" />
                        <span className="sr-only">Upload avatar</span>
                        <input
                          id="avatar-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  )}
                </div>
                {!isEditing && (
                  <div className="text-center">
                    <h2 className="font-serif text-xl font-semibold text-[#2D2A26]">
                      {user?.email}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {isEditing ? (
                  <div className="space-y-4 rounded-xl border border-[#E8E2D9] bg-white p-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={String(name)}
                        onChange={(e) => setName(e.target.value)}
                        className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </label>
                      <Textarea
                        id="bio"
                        value={String(bio)}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        className="min-h-[150px] resize-none border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-[#E8E2D9] bg-white p-6">
                    <h3 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
                      About
                    </h3>
                    <p className="text-[#2D2A26]/80">
                      {user?.bio || "No bio yet."}
                    </p>
                  </div>
                )}

                <div className="rounded-xl border border-[#E8E2D9] bg-white p-6">
                  <h3 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
                    Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-[#F8F5F0] p-4 text-center">
                      <p className="font-serif text-2xl font-semibold text-[#6B8068]">
                        2
                      </p>
                      <p className="text-sm text-muted-foreground">Recipes</p>
                    </div>
                    <div className="rounded-lg bg-[#F8F5F0] p-4 text-center">
                      <p className="font-serif text-2xl font-semibold text-[#6B8068]">
                        15
                      </p>
                      <p className="text-sm text-muted-foreground">Favorites</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E8E2D9] bg-white p-6">
                  <h3 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
                    Find Other Chefs
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search for other users..."
                        className="w-full border-[#E8E2D9] pl-10 focus-visible:ring-[#6B8068]"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Popular chefs you might like to follow:
                      </p>
                      <div className="space-y-2">
                        {[
                          {
                            id: "user2",
                            name: "Marcus Rivera",
                            avatar: "/placeholder.svg?height=100&width=100",
                          },
                          {
                            id: "user3",
                            name: "Sophia Kim",
                            avatar: "/placeholder.svg?height=100&width=100",
                          },
                        ].map((chef) => (
                          <Link
                            key={chef.id}
                            href={`/profile/${chef.id}`}
                            className="flex items-center gap-3 rounded-lg border border-[#E8E2D9] p-3 transition-colors hover:bg-[#F8F5F0]"
                          >
                            <div className="h-10 w-10 overflow-hidden rounded-full border border-[#E8E2D9]">
                              <Image
                                src={chef.avatar || "/placeholder.svg"}
                                alt={chef.name}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-[#2D2A26]">
                                {chef.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                12 recipes
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recipes">
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
                  <Button
                    variant="outline"
                    className="border-[#E8E2D9] hover:bg-[#F8F5F0]"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button key={tag} onClick={() => toggleTag(tag)}>
                    <TagChip tag={tag} active={selectedTags.includes(tag)} />
                  </button>
                ))}
              </div>

              {/* {filteredRecipes.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="relative">
                      {"isDraft" in recipe && (
                        <div className="absolute right-4 top-4 z-20 rounded-full bg-[#F8F5F0] px-2 py-1 text-xs font-medium text-[#2D2A26]">
                          Draft
                        </div>
                      )}
                      <RecipeCard recipe={recipe} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#E8E2D9] bg-white p-8 text-center">
                  <div className="mb-4 rounded-full bg-[#F8F5F0] p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
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
                    <Link href="/create-recipe">Create Your First Recipe</Link>
                  </Button>
                </div>
              )} */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </LayoutWithHeader>
  );
}

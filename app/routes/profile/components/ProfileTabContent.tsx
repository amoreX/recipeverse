"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PictureUpload } from "./PictureUpload";
import Image from "next/image";
import { ProfileTabContentProps, placeholder } from "@/lib/types";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRecipeStore } from "@/stores/recipeStore";
export function ProfileTabContent({
  user,
  isEditing,
  name,
  bio,
  setName,
  setBio,
  setAvatar,
}: ProfileTabContentProps) {
  const [loading, setLoading] = useState(true);
  const [numfav, setNumfav] = useState<number>(0);
  useEffect(() => {
    const handleNumfav = async () => {
      try {
        const res = await axios.post("/api/countFav", {
          userId: user?.id,
        });
        setNumfav(res.data.numfav);
      } catch (err) {
        console.log(err);
      }
    };
    handleNumfav();
  }, [user]);
  const { recipes } = useRecipeStore();
  return (
    <div className="grid gap-8 md:grid-cols-[240px_1fr]">
      <div className="flex flex-col items-center gap-4 ">
        <div className="relative ">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white  bg-[#F8F5F0] shadow-md">
            {user?.avatar_url ? (
              <>
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-[#F8F5F0] ${
                    user.avatar_url ? "hidden" : "block"
                  }`}
                >
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-transparent border-[#507c49]"></div>
                </div>
                <Image
                  src={user.avatar_url || placeholder}
                  alt={"user_name"}
                  fill
                  className="object-cover"
                  onLoadingComplete={() => setLoading(false)}
                />
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-[#507c49]">
                {user?.name?.charAt(0)}
              </div>
            )}
          </div>
        </div>
        {user?.name}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-[#E8E2D9] focus-visible:ring-[#507c49]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium">
                Bio
              </label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself..."
                className="min-h-[150px] resize-none border-[#E8E2D9] focus-visible:ring-[#507c49]"
              />
            </div>
            <PictureUpload setAvatar={setAvatar} />
          </div>
        ) : (
          <>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-6">
              <h3 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
                About
              </h3>
              <p className="text-[#2D2A26]/80">{user?.bio || "No bio yet."}</p>
            </div>
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-6">
              <h3 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#F8F5F0] p-4 text-center">
                  <p className="font-serif text-2xl font-semibold text-[#507c49]">
                    {recipes.length}
                  </p>
                  <p className="text-sm text-muted-foreground">Recipes</p>
                </div>
                <div className="rounded-lg bg-[#F8F5F0] p-4 text-center">
                  <p className="font-serif text-2xl font-semibold text-[#507c49]">
                    {numfav == 0 ? "No Favourites yet" : numfav}
                  </p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { userStore } from "@/stores/userStore";
import axios from "axios";
import { SignInModal } from "@/components/signin-modal"; // adjust path as needed

interface SaveButtonProps {
  recipeId: string;
}

export function SaveButton({ recipeId }: SaveButtonProps) {
  const [saved, setSaved] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const { user, isAuthenticated } = userStore();

  useEffect(() => {
    const fetchFavourites = async () => {
      if (!user?.id) return;
      try {
        const res = await axios.post("/api/getFavourites", {
          userId: user.id,
        });
        const isAlreadySaved = res.data.favs?.some(
          (recipe: { id: string }) => recipe.id === recipeId
        );
        setSaved(isAlreadySaved);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavourites();
  }, [user?.id, recipeId]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      setShowSignIn(true);
      return;
    }

    const handleSave = async () => {
      await axios.post("/api/addFavourite", {
        userId: user?.id,
        recipeId: recipeId,
      });
    };
    handleSave();
    setSaved(!saved);
    toast(
      saved ? "Recipe removed from favorites" : "Recipe saved to favorites"
    );
  };

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className={`h-9 w-9 rounded-full ${
          saved
            ? "bg-[#6B8068] text-white hover:bg-[#5A6B58]"
            : "bg-white/90 text-[#2D2A26] hover:bg-white hover:text-[#6B8068]"
        } backdrop-blur-sm`}
        onClick={toggleSave}
      >
        <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
        <span className="sr-only">{saved ? "Unsave" : "Save"}</span>
      </Button>
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </>
  );
}

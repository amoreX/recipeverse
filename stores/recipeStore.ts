// stores/recipeStore.ts
import { create } from "zustand";

type Ingredient = {
  description: string;
  quantity?: number;
  unit?: string;
};

type Instruction = {
  step_number: number;
  description: string;
};

type Recipe = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url?: string;
  cook_time: number;
  prep_time: number;
  servings: number;
  difficulty: string;
  cuisine?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  published_at?: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  user_id: string;
};

type RecipeStore = {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  setRecipes: (recipes: Recipe[]) => void;
  selectRecipe: (recipe: Recipe | null) => void;
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: string) => void;
};

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  selectedRecipe: null,

  setRecipes: (recipes) => set({ recipes }),

  selectRecipe: (recipe) => set({ selectedRecipe: recipe }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

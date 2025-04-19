export type User = {
  id: String;
  email: String;
  name?: String;
  avatar_url?: string;
  bio?: String;
};

export type Ingredient = {
  description: string;
  quantity?: number;
  unit?: string;
};

export type Instruction = {
  step_number: number;
  description: string;
};

export type Recipe = {
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

export interface RecipeTypes {
  all: Recipe[];
  published: Recipe[];
  drafts: Recipe[];
}

export interface RecipesTabContentProps {
  recipes: RecipeTypes;
  view: string;
  setView: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedTags: string[];
  setSelectedTags: (value: string[] | ((prev: string[]) => string[])) => void;
}

export interface ProfileTabContentProps {
  user: User | null;
  isEditing: Boolean;
  name: String | undefined;
  setName: (value: string) => void;
  bio: String | undefined;
  setBio: (value: string) => void;
}

export interface ProfileTabsProps {
  user: User | null;
  recipes: RecipeTypes;
  activeTab: string;
  setActiveTab: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  name: String | undefined;
  setName: (value: string) => void;
  bio: String | undefined;
  setBio: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedTags: string[];
  setSelectedTags: (value: string[] | ((prev: string[]) => string[])) => void;
  view: string;
  setView: (value: string) => void;
}

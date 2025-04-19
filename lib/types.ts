export type User = {
  id: String;
  email: String;
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

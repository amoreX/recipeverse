import { create } from "zustand";
import { devtools } from "zustand/middleware";

type User = {
  id: String;
  email: String;
  avatar_url?: string;
  bio?: String;
};

type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
};

export const userStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set(() => {
      console.log("User Added");
      return {
        user,
        isAuthenticated: !!user,
      };
    }),
  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { LogOut, Settings, User } from "lucide-react";
import { placeholder } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { userStore } from "@/stores/userStore";

export function SiteHeader() {
  const pathname = usePathname();
  const { user } = userStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  return (
    <header className="border-b border-[#E8E2D9] bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/routes/explore" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-[#2D2A26]">
            RecipeVerse
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/routes/explore"
            className={`text-sm font-medium ${
              isActive("/routes/explore") &&
              !isActive("/routes/favorites") &&
              !isActive("/routes/sign-in")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Explore
          </Link>
          <Link
            href="/routes/favourites"
            className={`text-sm font-medium ${
              isActive("/routes/favourites")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Favorites
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Button
                className="hidden bg-[#6B8068] text-white hover:bg-[#5A6B58] md:flex"
                asChild
              >
                <Link href="/routes/create-recipe">Create Recipe</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                    asChild
                  >
                    <Link href="/routes/profile">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user.avatar_url || placeholder}
                          className="object-cover"
                        />
                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Link>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/routes/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      //   signOut();
                      window.location.href = "/";
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                className="hidden bg-[#6B8068] text-white hover:bg-[#5A6B58] md:flex"
                asChild
              >
                <Link href="/routes/create-recipe">Create Recipe</Link>
              </Button>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
                asChild
              >
                <Link href="/">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#F8F5F0] text-[#6B8068]">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Sign in</span>
                </Link>
              </Button>
            </>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle menu state
          >
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 px-4 py-6">
          <Link
            href="/routes/explore"
            className={`text-sm font-medium ${
              isActive("/routes/explore") &&
              !isActive("/routes/favorites") &&
              !isActive("/routes/sign-in")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Explore
          </Link>
          <Link
            href="/routes/favourites"
            className={`text-sm font-medium ${
              isActive("/routes/favorites")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

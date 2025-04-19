"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";

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
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="border-b border-[#E8E2D9] bg-white">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-[#2D2A26]">
            RecipeVerse
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium ${
              isActive("/") &&
              !isActive("/favorites") &&
              !isActive("/profile") &&
              !isActive("/sign-in")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Explore
          </Link>
          <Link
            href="/favorites"
            className={`text-sm font-medium ${
              isActive("/favorites")
                ? "text-[#6B8068]"
                : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
            }`}
          >
            Favorites
          </Link>
          {user && (
            <Link
              href="/profile"
              className={`text-sm font-medium ${
                isActive("/profile")
                  ? "text-[#6B8068]"
                  : "text-[#2D2A26] transition-colors hover:text-[#6B8068]"
              }`}
            >
              My Profile
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Button
                className="hidden bg-[#6B8068] text-white hover:bg-[#5A6B58] md:flex"
                asChild
              >
                <Link href="/create-recipe">Create Recipe</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                    asChild
                  >
                    <Link href="/profile">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user.avatar_url || "/placeholder.svg"}
                        />
                        <AvatarFallback>{user.email.charAt(0)}</AvatarFallback>
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
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
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
                <Link href="/create-recipe">Create Recipe</Link>
              </Button>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
                asChild
              >
                <Link href="/sign-in">
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
          <Button size="icon" variant="ghost" className="md:hidden">
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
    </header>
  );
}

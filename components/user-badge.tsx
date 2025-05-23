import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, placeholder } from "@/lib/types";

interface UserBadgeProps {
  user?: User | null;
}

export function UserBadge({ user }: UserBadgeProps) {
  if (!user) return null;
  return (
    <Link
      href={`/users/${user.id}`}
      className="flex items-center gap-2 hover:opacity-80"
    >
      <Avatar className="h-6 w-6 border border-[#E8E2D9]">
        <AvatarImage src={user.avatar_url || placeholder} />
        <AvatarFallback>{user.email.charAt(0)}</AvatarFallback>
      </Avatar>
      <span className="text-xs font-medium text-[#2D2A26]">{user.name}</span>
    </Link>
  );
}

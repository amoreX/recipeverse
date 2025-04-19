import type React from "react";
import { SiteHeader } from "@/components/site-header";

interface LayoutWithHeaderProps {
  children: React.ReactNode;
}

export function LayoutWithHeader({ children }: LayoutWithHeaderProps) {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}

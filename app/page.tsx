"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/routes/explore");
  }, [router]);

  return (
    <div className="h-screen bg-[#FFFCF8] flex justify-center items-center max-h-screen max-w-screen overflow-hidden"></div>
  );
}

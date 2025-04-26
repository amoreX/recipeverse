"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function GenerateTokenPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(email);
      const res = await axios.post("/api/generateToken", { email });
      const message = res.data?.message;

      if (res.status === 200) {
        toast(message || "Reset link sent to your email!", {
          style: {
            backgroundColor: "white",
            color: "green",
            textAlign: "center",
          },
        });

        setTimeout(() => {
          router.push("/routes/signin");
        }, 2000);
      } else {
        toast(message || "Something went wrong!", {
          style: {
            backgroundColor: "white",
            color: "red",
            textAlign: "center",
          },
        });
      }
    } catch (err: any) {
      const message =
        err.response?.data?.message || "Failed to send reset link";
      toast(message, {
        style: {
          backgroundColor: "white",
          color: "red",
          textAlign: "center",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen bg-[#FFFCF8] flex justify-center items-center">
      <div className="sm:container sm:max-w-md max-w-md p-8 bg-white rounded-2xl shadow-sm border border-[#E8E2D9]">
        <h1 className="text-center font-serif text-2xl font-semibold text-[#2D2A26] mb-6">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="pb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#E8E2D9] focus-visible:ring-[#507c49]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#507c49] hover:bg-[#5A6B58]"
            disabled={loading}
          >
            {loading ? "Sending..." : "OK"}
          </Button>
        </form>
      </div>
    </div>
  );
}

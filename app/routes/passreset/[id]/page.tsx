"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function GenerateTokenPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const token = params.id;
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 4) {
      toast.error("Password must be at least 4 characters long!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/changePass", {
        token: token,
        password: password,
      });

      if (res.status === 200) {
        toast.success("Password successfully reset!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(res.data?.message || "Something went wrong!");
      }
    } catch (err: any) {
      if (err.response) {
        const { status, data } = err.response;
        if (status === 404) {
          toast.error("Invalid or expired token.");
        } else if (status === 400) {
          toast.error("Token has expired.");
        } else {
          toast.error(data?.message || "Something went wrong!");
        }
      } else {
        toast.error("Network error or server not responding.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#FFFCF8] flex justify-center items-center">
      <div className="container max-w-md p-8 bg-white rounded-2xl shadow-sm border border-[#E8E2D9]">
        <h1 className="text-center font-serif text-2xl font-semibold text-[#2D2A26] mb-6">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="password" className="pb-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6B8068] hover:bg-[#5A6B58]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

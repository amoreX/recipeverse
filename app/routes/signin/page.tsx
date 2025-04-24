"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useLoginForm } from "@/hooks/formValidation";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { userStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FloatingEmojis } from "@/components/floatingEmojis";
export default function SignInPage() {
  const { setUser } = userStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();
  const [loading, setLoading] = useState(false);

  const submitForm = (data: any) => {
    setLoading(true);
    const handleLogin = async () => {
      try {
        console.log("submit butt clicked");
        console.log(data.email);
        console.log(data.password);
        const res = await axios.post("/api/auth", {
          email: data.email,
          password: data.password,
        });
        setUser(res.data.userDetails);
        router.push("/routes/explore");
        toast("Login Successful!", {
          style: {
            backgroundColor: "white",
            color: "green",
            textAlign: "center",
          },
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast("Wrong Password", {
          style: {
            backgroundColor: "white",
            color: "red",
            textAlign: "center",
          },
        });
        console.log(err);
      }
    };
    handleLogin();
  };

  return (
    <div className="h-screen bg-[#FFFCF8] flex justify-center items-center max-h-screen max-w-screen overflow-hidden">
      <motion.div
        className="container flex min-h-screen flex-col items-center justify-center px-4 py-12 md:px-6 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <FloatingEmojis />
        </div>
        <motion.div
          className="mx-auto w-full max-w-md z-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-8 flex items-center justify-center">
            <div className="w-9" />
          </div>

          <motion.div
            className="rounded-2xl border border-[#E8E2D9] bg-white p-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">
                RecipeVerse
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to your account or Create one
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Label htmlFor="email" className="pb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  {...register("email")}
                  className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                />
                {errors?.email?.message && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Label htmlFor="password" className="pb-2">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                />
                {errors?.password?.message && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </motion.div>

              <motion.div
                className="text-right"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <a
                  href="/routes/passreset/gentoken"
                  className="text-sm text-[#6B8068] hover:underline"
                >
                  Forgot Password?
                </a>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {!loading ? (
                  <Button
                    type="submit"
                    className="w-full bg-[#6B8068] hover:bg-[#5A6B58]"
                  >
                    Sign in
                  </Button>
                ) : (
                  <div className="flex justify-center items-center">
                    <Button className="w-fit rounded-full bg-[#6B8068] hover:bg-[#5A6B58]">
                      <Loader className="animate-spin" />
                    </Button>
                  </div>
                )}
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

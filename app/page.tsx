"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useLoginForm } from "@/hooks/formValidation";
import { Loader } from "lucide-react";
import { prisma } from "@/lib/prisma"

export default function SignInPage() {
  const{register,handleSubmit,formState:{errors}} =useLoginForm();
  const [loading,setLoading]=useState(false);
  const submitForm=(data:any)=>{
    console.log(data);
    setLoading(true);
    const handleLogin=async()=>{
      //login
      try{
        
      }catch (err){
        setLoading(false);
        console.log(err);
      }
    }
    handleLogin();
  }
  return (
    <div className="min-h-screen bg-[#FFFCF8] flex justify-center ">
      <div className="container flex min-h-screen flex-col items-center justify-center px-4 py-12 md:px-6">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center  justify-center">
            <div className="w-9" />
          </div>
          <div className="rounded-2xl border border-[#E8E2D9] bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#2D2A26]">RecipeVerse</h1>
              <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to continue</p>
            </div>
            <div className="space-y-4">

              <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
                
                <div>
                  <Label htmlFor="email" className="pb-2">Email</Label>
                  <Input id="email" {...register("email")} className="border-[#E8E2D9] focus-visible:ring-[#6B8068]" />
                  {errors?.email?.message && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="password" className="pb-2">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                  />
                  {errors?.password?.message && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                
                {loading==false?
                <Button type="submit" className="w-full bg-[#6B8068] hover:bg-[#5A6B58]">Sign in</Button>
                :
                <div className="flex justify-center items-center">
                <Button className="w-fit rounded-full  bg-[#6B8068] hover:bg-[#5A6B58]"><Loader className="animate-spin"/></Button>
                </div>
              }
              
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

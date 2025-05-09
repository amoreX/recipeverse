"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email, Please use a valid email address",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be 4 characters or more" })
    .max(16, { message: "Password too long" }),
});

export type FormInput = z.infer<typeof formSchema>;

export const useLoginForm = () => {
  return useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
};

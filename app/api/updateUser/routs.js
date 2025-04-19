import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req, res) => {
  const { userId, name, bio } = await req.json();
  try {
    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return new Response(JSON.stringify({ message: "Edit Succesfull" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Login Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

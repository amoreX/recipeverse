import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { token, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: {
        token: token,
      },
    });

    if (!resetToken) {
      return new Response(
        JSON.stringify({ message: "Invalid or expired token." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const now = new Date();
    if (resetToken.expires_at < now) {
      return new Response(JSON.stringify({ message: "Token has expired." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Update user's password
    await prisma.user.update({
      where: { id: resetToken.user_id },
      data: { password: hashedPassword },
    });

    // Delete the reset token
    await prisma.passwordResetToken.delete({
      where: { token: token },
    });

    return new Response(
      JSON.stringify({ message: "Password successfully reset." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error resetting password:", err);
    return new Response(JSON.stringify({ message: "Something went wrong." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

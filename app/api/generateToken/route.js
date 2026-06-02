import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const POST = async (req) => {
  const { email } = await req.json();
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
  try {
    let user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      const res = await prisma.passwordResetToken.create({
        data: {
          user_id: user.id,
          token,
          expires_at: expiresAt,
        },
      });
      if (res) {
        const url = `${process.env.NEXT_PUBLIC_APP_URL}/routes/passreset/${token}`;
        console.log("[DEV] Password reset link:", url);
        return new Response(
          JSON.stringify({
            message: "Reset link generated (check server console for URL)",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        return new Response(
          JSON.stringify({
            message: "Failed to generate reset token",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      return new Response(JSON.stringify({ message: "User Doesn't Exist!" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Request failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

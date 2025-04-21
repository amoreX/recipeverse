import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
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
        const url = `https://recipev.vercel.app/routes/passreset/${token}`;
        await sendResetEmail(email, url);
        return new Response(
          JSON.stringify({
            message: "Mail Sent",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      } else {
        return new Response(
          JSON.stringify({
            message: "Mail Not Sent!",
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
    return new Response(JSON.stringify({ message: "User Doesn't Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

async function sendResetEmail(toEmail, url) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Recipe App" <no-reply@recipe.com>',
    to: toEmail,
    subject: "Password Reset Request",
    html: `<p>You requested a password reset. Click the link below to reset your password:</p>
             <p><a href="${url}">${url}</a></p>
             <p>This link will expire in 1 hour.</p>`,
  };

  await transporter.sendMail(mailOptions);
}

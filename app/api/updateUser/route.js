import { prisma } from "@/lib/prisma";
export const POST = async (req, res) => {
  const { userId, name, bio, avatarurl } = await req.json();
  console.log("is this undefined", name);
  try {
    const res = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name,
        bio: bio,
        avatar_url: avatarurl,
      },
    });

    console.log(res);

    return new Response(
      JSON.stringify({ message: "Edit Succesfull in Backend" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Login Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

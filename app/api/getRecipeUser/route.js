import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { userId } = await req.json();

  try {
    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return new Response(
      JSON.stringify({
        user: user,
        message: "Fetching User Succesfull!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Fetching User Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

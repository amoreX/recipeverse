import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { userId } = await req.json();

  try {
    const fav = await prisma.favourite.findMany({
      where: {
        user_id: userId,
      },
    });

    return new Response(
      JSON.stringify({
        numfav: fav ? fav.length : 0,
        message: "Fetching Count Fav succesfull",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({ message: "Fetching count Fav Failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

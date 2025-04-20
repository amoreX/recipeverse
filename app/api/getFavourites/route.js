import { prisma } from "@/lib/prisma";

export const POST = async (req) => {
  const { userId } = await req.json();

  try {
    const fav = await prisma.favourite.findMany({
      where: {
        user_id: userId,
      },
    });

    const recipes = await Promise.all(
      fav.map((f) =>
        prisma.recipe.findUnique({
          where: { id: f.recipe_id },
        })
      )
    );

    return new Response(
      JSON.stringify({
        favs: recipes,
        message: "Fetching favorite recipes successful",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Fetching favorites failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

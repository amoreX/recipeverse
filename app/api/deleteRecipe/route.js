import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { recipeId, userId } = await req.json();

  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: recipeId,
      },
    });

    if (recipe && recipe.user_id === userId) {
      await prisma.favourite.deleteMany({
        where: {
          recipe_id: recipeId,
        },
      });

      await prisma.recipe.delete({
        where: {
          id: recipeId,
        },
      });

      return new Response(
        JSON.stringify({
          message: "Delete Successful!",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          message: "Unauthorized!",
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Fetching User Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

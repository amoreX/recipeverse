import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { recipeId } = await req.json();

  try {
    let recipe = await prisma.recipe.delete({
      where: {
        id: recipeId,
      },
    });
    try {
      if (recipe.user_id == userId) {
        let fav = await prisma.favourite.delete({
          where: {
            recipe_id: recipeId,
          },
        });
      } else {
        return new Response(
          JSON.stringify({
            message: "You are not the Owner!",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
    return new Response(
      JSON.stringify({
        message: "Delete Succesfull!",
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

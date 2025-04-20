import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { recipeId } = await req.json();

  try {
    let recipe = await prisma.recipe.findUnique({
      where: {
        id: recipeId,
      },
    });

    return new Response(
      JSON.stringify({
        recipeDetails: recipe,
        message: "Fetching Recipe Succesfull!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Fetching Recipe Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

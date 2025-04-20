import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { userId } = await req.json();

  try {
    let recipe = await prisma.recipe.findMany({
      where: {
        user_id: userId,
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

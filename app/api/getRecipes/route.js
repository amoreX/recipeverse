import { prisma } from "@/lib/prisma";

export const GET = async (req, res) => {
  try {
    let recipe = await prisma.recipe.findMany({
      where: {
        is_published: true,
      },
    });

    return new Response(
      JSON.stringify({
        recipes: recipe,
        message: "Fetching All Recipe Succesfull!",
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

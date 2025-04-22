import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { recipeId } = await req.json();

  try {
    const res = await prisma.recipe.update({
      where: { id: recipeId },
      data: { is_published: true },
    });
    return new Response(
      JSON.stringify({
        message: "Publish Succesfull!",
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

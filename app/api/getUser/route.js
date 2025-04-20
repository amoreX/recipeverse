import { prisma } from "@/lib/prisma";

export const POST = async (req) => {
  const { recipeId } = await req.json();

  try {
    const fav = await prisma.recipe.findUnique({
      where: {
        id: recipeId,
      },
    });
    // console.log(fav);
    const user = await prisma.user.findUnique({
      where: {
        id: fav.user_id,
      },
    });

    return new Response(
      JSON.stringify({
        user: user,
        message: "Fetching user successful",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Fetching recipe user failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

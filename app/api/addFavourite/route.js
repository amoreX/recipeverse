import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const { userId, recipeId } = await req.json();

  try {
    const fav = await prisma.favourite.findFirst({
      where: {
        user_id: userId,
        recipe_id: recipeId,
      },
    });

    if (fav) {
      await prisma.favourite.delete({
        where: {
          id: fav.id, // Use the primary key for deletion
        },
      });
      return new Response(JSON.stringify({ message: "Favourite Removed" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      await prisma.favourite.create({
        data: {
          user_id: userId,
          recipe_id: recipeId,
        },
      });
      return new Response(JSON.stringify({ message: "Favourite Added" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({ message: "Favourite Operation Failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

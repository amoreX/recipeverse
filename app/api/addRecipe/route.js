import { prisma } from "@/lib/prisma";

export const POST = async (req, res) => {
  const {
    userId,
    title,
    description,
    image_url,
    cook_time,
    servings,
    difficulty,
    cuisine,
    is_published,
  } = await req.json();

  try {
    let recipe = await prisma.recipe.create({
      data: {
        user_id: userId,
        title: title,
        description: description,
        image_url: image_url,
        cook_time: cook_time,
        servings: servings,
        difficulty: difficulty,
        cuisine: cuisine,
        is_published: is_published,
      },
    });

    return new Response(
      JSON.stringify({
        recipeDetails: recipe,
        message: "Recipe Creation Succesfull!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Login Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

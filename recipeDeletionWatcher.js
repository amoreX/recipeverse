const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://nihal:nihal@recipeverse.utkcj01.mongodb.net/prod?retryWrites=true&w=majority&appName=recipeverse";

async function watchRecipeDeletions() {
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("prod");
  const collection = db.collection("Recipes");

  const changeStream = collection.watch([
    { $match: { operationType: "delete" } },
  ]);

  console.log("👀 Watching for recipe deletions...");

  changeStream.on("change", async (change) => {
    console.log("🔴 Recipe Deleted:");
    console.log(`Document ID: ${change.documentKey._id}`);

    const logs = db.collection("DeletionLogs");
    await logs.insertOne({
      deleted_id: change.documentKey._id,
      deleted_at: new Date(),
    });

    console.log("📝 Deletion logged in DeletionLogs collection.");
  });
}

watchRecipeDeletions().catch(console.error);

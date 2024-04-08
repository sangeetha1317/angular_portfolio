import { MongoClient } from "mongodb";

export async function POST(request: Request) {
  try {
    const mongoClient = new MongoClient(process.env.MONGODB_URI!);
    const clientPromise = mongoClient.connect();

    const database = (await clientPromise).db(process.env.MONGODB_DATABASE!);
    const collection = database.collection(process.env.MONGODB_COLLECTION!);

    await collection.insertOne(await request.json());

    return new Response('{\"message\": \"Thank you for contacting me\"}', {status: 200});
  } catch (error) {
    return new Response(null, {status: 500});
  }
}

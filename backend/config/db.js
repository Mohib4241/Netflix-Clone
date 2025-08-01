import 'dotenv/config'
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGO_URI;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export async function connectToDB() {
  try {
    const conn = await client.connect();
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1);
  }
}


await connectToDB();
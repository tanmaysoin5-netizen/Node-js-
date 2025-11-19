
import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log(" Connected to MongoDB");

    const db = client.db("shopDB");
    await db.createCollection("products");
    console.log(" DDL: 'products' collection created");

    const products = db.collection("products");

    await products.insertMany([
      { name: "T-shirt", price: 499, category: "Clothing" },
      { name: "Jeans", price: 999, category: "Clothing" },
    ]);
    console.log(" DML: Documents inserted");

    await products.updateOne(
      { name: "T-shirt" },
      { $set: { price: 599 } }
    );
    console.log("✏️ DML: Document updated");

    await products.deleteOne({ name: "Jeans" });
    console.log(" DML: Document deleted");

    const adminDb = client.db("admin");
    try {
      await adminDb.command({
        createUser: "shopUser",
        pwd: "password123",
        roles: [{ role: "readWrite", db: "shopDB" }],
      });
      console.log("🔐 DCL: User 'shopUser' created with readWrite role");
    } catch (err) {
      console.log("⚠️ DCL skipped or user already exists");
    }

  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await client.close();
    console.log(" Connection closed");
  }
}

main();

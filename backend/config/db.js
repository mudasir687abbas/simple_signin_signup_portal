import  mongoose from "mongoose";

// Replace with your MongoDB connection string
// const MONGO_URI = "mongodb+srv://mudasir687abbas_db_user:Risadumm786$@mern-mudasir.iljvu9x.mongodb.net/?appName=mern-mudasir";
const MONGO_URI = "mongodb://mudasir687abbas_db_user:Risadumm786$@ac-i9hprga-shard-00-00.sv3ndmo.mongodb.net:27017,ac-i9hprga-shard-00-01.sv3ndmo.mongodb.net:27017,ac-i9hprga-shard-00-02.sv3ndmo.mongodb.net:27017/?ssl=true&replicaSet=atlas-yrfa3c-shard-0&authSource=admin&appName=portalDB";
let con = null;
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    con = await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed",error.message);
    // process.exit(1); // Exit process with failur//e
  }
  return con;
};

export default connectDB;
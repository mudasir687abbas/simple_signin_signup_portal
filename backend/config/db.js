import  mongoose from "mongoose";

// Replace with your MongoDB connection string
// const MONGO_URI = "mongodb+srv://mudasir687abbas_db_user:Risadumm786$@mern-mudasir.iljvu9x.mongodb.net/?appName=mern-mudasir";
const MONGO_URI = "mongodb://mudasir687abbas_db_user:risadumm786$@ac-hxmwou3-shard-00-00.iljvu9x.mongodb.net:27017,ac-hxmwou3-shard-00-01.iljvu9x.mongodb.net:27017,ac-hxmwou3-shard-00-02.iljvu9x.mongodb.net:27017/?ssl=true&replicaSet=atlas-11umx3-shard-0&authSource=admin&appName=mern-mudasir"
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
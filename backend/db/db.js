import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodb_connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB : ${mongodb_connection.connection.host}`);
  } catch (error) {
    console.error(
      `Error occoured while connecting to mongoDB: ${error.message}`
    );
    process.exit(1);
  }
};

export default connectDB;

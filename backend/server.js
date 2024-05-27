import express from "express";
import dotenv from "dotenv";

//Internal imports
import authRoutes from "./routes/auth.route.js";
import connectDB from "./db/db.js";

dotenv.config({ path: "./.env" });

const app = express();

const port = process.env.PORT || 8000;

connectDB();

// console.log(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

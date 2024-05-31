import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Internal imports
import authRoutes from "./routes/auth.route.js";
import connectDB from "./db/db.js";

dotenv.config({ path: "./.env" });

const app = express();

const port = process.env.PORT || 8000;

connectDB();

// console.log(process.env.PORT);

app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true })); //form data
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

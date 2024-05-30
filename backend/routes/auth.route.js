import express from "express";

//Internal imports
import {
  getMe,
  signup,
  login,
  logout,
} from "../controllers/auth.controller.js";

import { protectRoute } from "../middlewares/protectRoute.middleware.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;

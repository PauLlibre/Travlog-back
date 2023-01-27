import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import likesRouter from "./routes/likes.js";

//routes

router.use("/", indexRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/likes", likesRouter);

export default router;

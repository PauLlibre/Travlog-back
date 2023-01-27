import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import likesRouter from "./routes/likes.js";
import postsRouter from "./routes/post.js";

//routes

router.use("/", indexRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/likes", likesRouter);
router.use("/post", postsRouter);

export default router;

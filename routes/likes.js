import { Router } from "express";
var router = Router();

import LikesController from "../controllers/LikesController.js";

/* GET users listing. */
router.post("/", LikesController.giveLike);
router.get("/postLikes/:id", LikesController.getPostLikes);
router.get("/userLikes/:id", LikesController.getUserLikes);

export default router;

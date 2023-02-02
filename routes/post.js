import { Router } from "express";
var router = Router();

import PostController from "../controllers/PostController.js";

router.post("/", PostController.makePost);
router.get("/:id", PostController.getById);
router.delete("/:id", PostController.deleteById);
router.patch("/:id", PostController.updateById);
router.get("/user/:id", PostController.getByUserId)

export default router;

import { Router } from "express";
var router = Router();

import PostController from "../controllers/PostController.js";

/* GET users listing. */
router.post("/", PostController.makePost);

export default router;

import { Router } from "express";
var router = Router();

import LikesController from "../controllers/LikesController.js";

/* GET users listing. */
router.post("/", LikesController.giveLike);

export default router;

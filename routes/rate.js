import express from "express";
var router = express.Router();

import RatingsController from "../controllers/RatingsController.js";

router.post("/:parentType/:parentId/:commentId", RatingsController.rateComment);

export default router;

import express from "express";
const router = express.Router();

import GlobalSearchController from "../controllers/GlobalSearchController.js";

router.get("/", GlobalSearchController.getAllRoutesAndPosts);

export default router;

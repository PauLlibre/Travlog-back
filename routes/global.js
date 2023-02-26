import express from "express";
const router = express.Router();

import GlobalSearchController from "../controllers/GlobalSearchController.js";

router.get("/", GlobalSearchController.getAllRoutesAndPosts);
router.get("/:id", GlobalSearchController.getRouteOrPostById);
router.get("/user/:userId", GlobalSearchController.getRoutesAndPostsByUser);

export default router;

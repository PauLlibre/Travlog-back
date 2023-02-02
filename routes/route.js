import { Router } from "express";
var router = Router();

import RouteController from "../controllers/RouteController.js";
import CommentsController from "../controllers/CommentsController.js";
import RatingsController from "../controllers/RatingsController.js";

router.post("/", RouteController.makeRoute);
router.get("/:id", RouteController.getById);
router.delete("/:id", RouteController.deleteById);
router.patch("/:id", RouteController.updateById);
router.get("/user/:id", RouteController.getByUserId);
router.post("/:route_id/user/:user_id", CommentsController.makeRoutesComment);
router.post("/:route_id/like", RatingsController.rateRoute);

export default router;

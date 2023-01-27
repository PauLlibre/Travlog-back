import express from "express";
var router = express.Router();

import AuthController from "../controllers/AuthController.js";

/* POST register login. */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;

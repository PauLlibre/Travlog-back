import express from "express";
const router = express.Router();

// Homepage
router.get("/", (req, res, next) => {
  return res.send("Welcome to Travlogs API");
});

export default router;

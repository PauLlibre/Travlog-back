import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/database.js";
import router from "./router.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//middelware
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use(router);

const port = process.env.PORT || 3000;

db()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running: " + port);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to mongoDB", error);
  });

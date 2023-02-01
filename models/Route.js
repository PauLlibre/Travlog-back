import { Schema, model } from "mongoose";

const RouteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    comments: {
      type: Array,
    },
    likes: {
      type: Array,
    },
    map: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Route = model("Route", RouteSchema, "routesLog");

export default Route;

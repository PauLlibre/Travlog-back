import { Schema, model } from "mongoose";
import Comment from "./Comment.js";
const CommentSchema = Comment.schema;

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
    comments: [CommentSchema],
    upvotes: {
      type: Array,
    },
    downvotes: {
      type: Array,
    },
    rating: {
      type: Number,
      default: 0,
    },
    city: {
      type: String,
      required: true,
    },
    map: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(https?:\/\/)/.test(value);
        },
        message: "{VALUE} is not a valid URL!",
      },
    },
    route_description: {
      type: Array,
      required: true,
    },
    duration: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Route = model("Route", RouteSchema, "routesLog");

export default Route;

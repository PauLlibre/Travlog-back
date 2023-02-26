import { Schema, model } from "mongoose";
import Comment from "./Comment.js";
const CommentSchema = Comment.schema;

const PostSchema = new Schema(
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

    likes: {
      type: Array,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", PostSchema, "postsLog");

export default Post;

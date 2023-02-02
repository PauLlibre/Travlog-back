import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Array,
    },
    downvotes: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", CommentSchema);

export default Comment;

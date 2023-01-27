import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/,
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
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", PostSchema, "postsLog");

export default Post;

import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    user_likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    birthday: {
      type: Date,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
    },
    nationality: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema, "usersLog");

export default User;

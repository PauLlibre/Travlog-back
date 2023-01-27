import Post from "../models/Post.js";
import User from "../models/User.js";
const PostController = {};

PostController.makePost = async (req, res) => {
  console.log("hola");

  try {
    const { title, description, user_id } = req.body;

    const newPost = {
      title,
      description,
      user_id,
    };

    const user = await User.findById({ _id: user_id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exist",
        error: error?.message || error,
      });
    }
    const createdPost = await Post.create(newPost);
    user.user_posts.push(createdPost._id);
    await user.save();

    await Post.create(newPost);

    return res.status(200).json({
      success: true,
      message: "Post created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error?.message || error,
    });
  }
};

export default PostController;

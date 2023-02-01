import Post from "../models/Post.js";
import User from "../models/User.js";
const PostController = {};

PostController.makePost = async (req, res) => {
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

    return res.status(200).json({
      success: true,
      message: "Post created successfully",
      data: createdPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error?.message || error,
    });
  }
};

PostController.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findOne({ _id: id });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post Data Retrieved Successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

PostController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findOneAndDelete({ _id: id });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

PostController.updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, user_id } = req.body;

    const post = await Post.findOne({ _id: id });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const { role } = await User.findOne({ _id: user_id });
    console.log(role);
    if (role !== "admin") {
      if (post.user_id.toString() !== user_id.toString()) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized access",
        });
      }
    }

    post.title = title;
    post.description = description;
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default PostController;

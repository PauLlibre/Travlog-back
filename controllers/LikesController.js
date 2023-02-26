import Post from "../models/Post.js";
import User from "../models/User.js";

const LikesController = {};

LikesController.giveLike = async (req, res) => {
  try {
    // Find the user who is giving the like
    const user = await User.findById(req.body.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user already liked the post, and removing his like

    if (user.user_likes.includes(req.body.post_id)) {
      user.user_likes = user.user_likes.filter(
        (like) => like !== req.body.post_id
      );
      const post = await Post.findById(req.body.post_id);
      post.likes = post.likes.filter((likeId) => likeId !== req.body.id);
      post.rating -= 1;
      const updatedUser = await user.save();
      const updatedPost = await post.save();

      return res.json({
        message: "Like removed successfully!",
        user_data: updatedUser,
        post_data: updatedPost,
      });
    }

    const post = await Post.findById(req.body.post_id);
    if (!post) {
      return res.status(404).json({ error: "This post doesn't exist" });
    }
    // Add the post ID to the user's user_likes array
    user.user_likes.push(req.body.post_id);
    post.likes.push(req.body.id);
    post.rating += 1;
    // Save the updated user document
    const updatedUser = await user.save();
    const updatedPost = await post.save();
    // Send a response to the client
    return res.json({
      message: "Like added successfully!",
      user_data: updatedUser,
      post_data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

LikesController.getPostLikes = async (req, res) => {
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
      message: "Likes retrieved successfully",
      data: post.likes.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

LikesController.getUserLikes = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Likes retrieved successfully",
      data: user.user_likes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default LikesController;

import Post from "../models/Post.js";
import Route from "../models/Route.js";
import User from "../models/User.js";

const CommentsController = {};

CommentsController.makeRoutesComment = async (req, res) => {
  const { user_id, route_id } = req.params;
  const { content } = req.body;

  try {
    const newComment = {
      user_id,
      content,
    };

    const user = await User.findById({ _id: user_id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exist",
        error: error?.message || error,
      });
    }

    let route = await Route.findById({ _id: route_id });
    let post;
    if (!route) {
      post = await Post.findById({ _id: route_id });
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Route/Post doesn't exist",
        });
      }
    }

    if (route) {
      route = await Route.findOneAndUpdate(
        { _id: route_id },
        {
          $push: {
            comments: newComment,
          },
        }
      );
      route = await route.save();
    } else if (post) {
      post = await Post.findOneAndUpdate(
        { _id: route_id },
        {
          $push: {
            comments: newComment,
          },
        }
      );
      post = await post.save();
    }

    return res.status(200).json({
      success: true,
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default CommentsController;

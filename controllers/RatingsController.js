import Route from "../models/Route.js";
import User from "../models/User.js";

const RatingsController = {};

RatingsController.rateRoute = async (req, res) => {
  const { route_id } = req.params;
  const { rating, user_id } = req.body;

  try {
    let route = await Route.findById({ _id: route_id });
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    const user = await User.findById({ _id: user_id });

    switch (rating) {
      case "+":
        if (route.downvotes.includes(user_id)) {
          route.downvotes = route.downvotes.filter((id) => id !== user_id);
          route.rating += 1;
        }
        if (route.upvotes.includes(user_id)) {
          console.log(route.upvotes, user_id);
          route.upvotes = route.upvotes.filter((id) => id !== user.id);
          route.rating -= 1;
        } else {
          route.rating += 1;
          route.upvotes.push(user_id);
        }
        route = await route.save();
        return res.status(200).json({
          success: true,
          message: "Upvote Registered",
          data: route,
        });

      case "-":
        if (route.upvotes.includes(user_id)) {
          route.upvotes = route.upvotes.filter((id) => id !== user_id);
          route.rating -= 1;
        }
        if (route.downvotes.includes(user_id)) {
          console.log(route.upvotes, user_id);
          route.downvotes = route.downvotes.filter((id) => id !== user.id);
          route.rating += 1;
        } else {
          route.rating -= 1;
          route.downvotes.push(user_id);
        }
        route = await route.save();
        return res.status(200).json({
          success: true,
          message: "Downvote Registered",
          data: route,
        });

      default:
        return res.status(400).json({ message: "Invalid rating type" });
    }
  } catch (error) {
    console.log(error);
  }
};

RatingsController.rateComment = async (req, res) => {
  const { parentType, parentId, commentId } = req.params;
  const { rating, user_id } = req.body;

  try {
    let parentDocument;
    switch (parentType) {
      case "route":
        parentDocument = await Route.findById({ _id: parentId });
        break;
      case "post":
        parentDocument = await Post.findById({ _id: parentId });
        break;
      default:
        return res.status(400).json({ message: "Invalid parent type" });
    }

    if (!parentDocument) {
      return res.status(404).json({ message: "Parent document not found" });
    }

    const commentIndex = parentDocument.comments.findIndex(
      (c) => c._id == commentId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const comment = parentDocument.comments[commentIndex];

    const user = await User.findById({ _id: user_id });

    switch (rating) {
      case "+":
        if (comment.downvotes.includes(user_id)) {
          comment.downvotes = comment.downvotes.filter((id) => id !== user_id);
          comment.rating += 1;
        }
        if (comment.upvotes.includes(user_id)) {
          comment.upvotes = comment.upvotes.filter((id) => id !== user_id);
          comment.rating -= 1;
        } else {
          comment.rating += 1;
          comment.upvotes.push(user_id);
        }
        parentDocument.comments[commentIndex] = comment;
        parentDocument = await parentDocument.save();
        return res.status(200).json({
          success: true,
          message: "Upvote Registered",
          data: parentDocument,
        });

      case "-":
        if (comment.upvotes.includes(user_id)) {
          comment.upvotes = comment.upvotes.filter((id) => id !== user_id);
          comment.rating -= 1;
        }
        if (comment.downvotes.includes(user_id)) {
          comment.downvotes = comment.downvotes.filter((id) => id !== user_id);
          comment.rating += 1;
        } else {
          comment.rating -= 1;
          comment.downvotes.push(user_id);
        }
        parentDocument.comments[commentIndex] = comment;
        parentDocument = await parentDocument.save();
        return res.status(200).json({
          success: true,
          message: "Downvote Registered",
          data: parentDocument,
        });

      default:
        return res.status(400).json({ message: "Invalid rating type" });
    }
  } catch (error) {
    console.log(error);
  }
};

export default RatingsController;

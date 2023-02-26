import Route from "../models/Route.js";
import Post from "../models/Post.js";

const GlobalSearchController = {};

GlobalSearchController.getAllRoutesAndPosts = async (req, res) => {
  try {
    const routes = await Route.find({});
    const posts = await Post.find({});

    // Combine the routes and posts into one array
    const combined = routes.concat(posts);

    // Sort the array based on the order query parameter
    let sorted;
    switch (req.query.order) {
      case "date":
        sorted = combined.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));
        break;
      case "rating":
        sorted = combined.sort((a, b) => {
          const aRating = a.rating || 0;
          const bRating = b.rating || 0;
          return bRating - aRating || (b.createdAt > a.createdAt ? 1 : -1);
        });
        break;
      default:
        sorted = combined;
        break;
    }

    return res.status(200).json({
      success: true,
      message: "Routes and posts retrieved successfully",
      data: sorted,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    });
  }
};

GlobalSearchController.getRouteOrPostById = async (req, res) => {
  try {
    const { id } = req.params;
    // Search for a route with the matching id
    const route = await Route.findOne({ _id: id });
    if (route) {
      return res.status(200).json({
        success: true,
        message: "Route found successfully",
        data: route,
      });
    }

    // If no route was found, search for a post with the matching id
    const post = await Post.findOne({ _id: id });
    if (post) {
      return res.status(200).json({
        success: true,
        message: "Post found successfully",
        data: post,
      });
    }

    // If no route or post was found, return a 404 error
    return res.status(404).json({
      success: false,
      message: "Route or post not found",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    });
  }
};

GlobalSearchController.getRoutesAndPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const routes = await Route.find({ user_id: userId });
    const posts = await Post.find({ user_id: userId });
    // Combine the routes and posts into one array
    const combined = routes.concat(posts);

    // Sort the array based on the order query parameter
    let sorted;
    switch (req.query.order) {
      case "date":
        sorted = combined.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));
        break;
      case "rating":
        sorted = combined.sort((a, b) => {
          const aRating = a.rating || 0;
          const bRating = b.rating || 0;
          return bRating - aRating || (b.createdAt > a.createdAt ? 1 : -1);
        });
        break;
      default:
        sorted = combined;
        break;
    }

    return res.status(200).json({
      success: true,
      message: "Routes and posts created by user retrieved successfully",
      data: sorted,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error?.message || error,
    });
  }
};

export default GlobalSearchController;

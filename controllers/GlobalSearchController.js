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

export default GlobalSearchController;

import User from "../models/User.js";

const LikesController = {};

LikesController.giveLike = async (req, res) => {
  console.log("hola");
  try {
    console.log(req);
    // Find the user who is giving the like
    const user = await User.findById(req.body.id).select("-password");
    // Check if the post is already in the user_likes array
    if (user.user_likes.indexOf(req.body.post_id) !== -1) {
      return res.status(400).json({ error: "You already liked this post" });
    }
    // Add the post ID to the user's user_likes array
    user.user_likes.push(req.body.user_id);
    // Save the updated user document
    const updatedUser = await user.save();
    // Send a response to the client
    return res.json({ message: "Like added successfully!", data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error hola" });
  }
};

export default LikesController;

import Route from "../models/Route.js";
import User from "../models/User.js";
const RouteController = {};

RouteController.makeRoute = async (req, res) => {
  try {
    const { title, description, user_id, map } = req.body;

    const newRoute = {
      title,
      description,
      user_id,
      map,
    };

    const user = await User.findById({ _id: user_id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User doesn't exist",
        error: error?.message || error,
      });
    }
    const createdRoute = await Route.create(newRoute);

    return res.status(200).json({
      success: true,
      message: "Route created successfully",
      data: createdRoute,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating route",
      error: error?.message || error,
    });
  }
};

RouteController.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const route = await Route.findOne({ _id: id });
    if (!route) {
      return res.status(404).json({
        success: false,
        message: "Route not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Route Data Retrieved Successfully",
      data: route,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

RouteController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const route = await Route.findOneAndDelete({ _id: id });
    if (!route) {
      return res.status(404).json({
        success: false,
        message: "Route not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Route deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

RouteController.getByUserId = async (req, res) => {
  try {
    const id = req.params.id;

    const route = await Route.find({ user_id: id });
    if (!route) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Route Data Retrieved Successfully",
      data: route,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

RouteController.updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, user_id, map } = req.body;
    const route = await Route.findOne({ _id: id });
    if (!route) {
      return res.status(404).json({
        success: false,
        message: "Route not found",
      });
    }
    const { role } = await User.findOne({ _id: user_id });
    console.log(role);
    if (role !== "admin") {
      if (route.user_id.toString() !== user_id.toString()) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized access",
        });
      }
    }

    route.title = title || route.title;
    route.description = description || route.description;
    route.map = map || route.map;
    await route.save();

    return res.status(200).json({
      success: true,
      message: "Route updated successfully",
      data: route,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default RouteController;

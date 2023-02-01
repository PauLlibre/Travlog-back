import User from "../models/User.js";
import bcrypt from "bcrypt";

const UserController = {};

UserController.getAll = async (req, res) => {
  console.log("hola");
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

UserController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const users = await User.findByIdAndDelete({ _id: id });
    if (!users) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

UserController.getById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const user = await User.findOne({ _id: id }).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Data Retrieved Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

UserController.modifyById = async (req, res) => {
  try {
    const id = req.params.id;
    let { name, email, password } = req.body;

    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: "false",
        message: "User not found",
      });
    }
    if (password) {
      if (password.length < 6) {
        return res.status(500).json({
          success: false,
          message: "Password is shorter than 6 characters",
        });
      }
      password = bcrypt.hashSync(password, 10);
    } else {
      password = false;
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    const updated_user = await user.save();

    return res.status(200).json({
      success: "true",
      message: "User data updated successfully",
      data: updated_user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default UserController;

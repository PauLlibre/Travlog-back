import Post from "../models/Post";
const PostController = {};

PostController.makePost = async (req, res) => {
  console.log("hola");

  try {
    const { title, description, user_id } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword,
      birthday,
      sex,
    };

    await User.create(newUser);

    return res.status(200).json({
      success: true,
      message: "Create user successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error?.message || error,
    });
  }
};

export default LikesController;

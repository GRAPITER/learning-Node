const userModal = require("../modal/auth-modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//register functionality
async function handleRegister(req, res) {
  try {
    const { userName, email, password, role } = req.body;
    //check if usernamr or email exsit
    const checkUnique = await userModal.findOne({
      $or: [{ userName }, { email }],
    });
    if (checkUnique) {
      return res.status(404).json({
        succeess: false,
        message: "this username or email is already exist",
      });
    }
    //if not now we have to store all this in databse but first we have to encrpt the password
    //so we have to i the depedance bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newlyCreatedUser = await userModal.create({
      userName,
      email,
      password: hashPassword,
      role: role || "user",
    });
    if (!newlyCreatedUser) {
      res.status(404).json({
        succeess: false,
        message: "this data will be not added",
      });
    } else {
      res.status(202).json({
        succeess: true,
        message: "data added",
        data: newlyCreatedUser,
      });
    }
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      success: false,
      message: "there is an error for registration",
    });
  }
}

//login functionality
async function handleLogin(req, res) {
  try {
    const { userName, password } = req.body;
    const user = await userModal.findOne({ userName });
    if (!user) {
      return res.status(404).json({
        success: false,
        messgae: "username in this is not exist",
      });
    }
    //check if the password is correct or not
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(404).json({
        success: false,
        messgae: "your password is wrong",
      });
    }

    //create tocken
    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
        role: user.role,
      },
      process.env.PRIVATE_KEY_JWT,
      {
        expiresIn: "30m",
      }
    );

    res.status(202).json({
      sucess: true,
      message: "login successful",
      token,
    });
  } catch (error) {
    console.log("there is an error", error);
    res.status(404).json({
      success: false,
      message: "there is an error for login",
    });
  }
}

module.exports = { handleRegister, handleLogin };

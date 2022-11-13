// IMPORT JSON WEBTOKEN TO ASSIST WITH TOKEN
const jwt = require("jsonwebtoken");

// IMPORT USER TO MANIPULATE DATA ON THE DATABASE LEVEL
const User = require("./../../models/userModel");

// Define a route handler for creating users
exports.createUser = async (request, response) => {
  try {
    // Create new user
    const currentUser = await User.create({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    });

    // Remove password from output
    currentUser.password = undefined;

    // Create token
    const token = await jwt.sign(
      { id: currentUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRATION_DATE,
      }
    );

    // Send JSON RESPONSE
    response.status(201).json({
      status: "success",
      data: {
        currentUser,
        token,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.login = async (request, response) => {
  try {
    // 1. Retrieve email and password
    const { email, password } = request.body;

    // Assuming email or password was not provided
    if (!email || !password) {
      throw new Error("Email and password are required fields");
    }

    // 2. Use the email to find user
    const currentUser = await User.findOne({ email }).select("+password");

    // 3. Create an instance method to compare password
    if (
      !currentUser ||
      !(await currentUser.comparePassword(password, currentUser.password))
    ) {
      throw new Error("Invalid email or password");
    }

    // 4. If the code reach this point it means that the password was correct
    const token = jwt.sign(
      { id: currentUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRATION_DATE }
    );

    // 5. Remove password from output
    currentUser.password = undefined;

    // 6. Send response
    response.status(200).json({
      status: "success",
      data: {
        currentUser,
        token,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Define a route handler for retrieving the a single user
exports.getUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);

    // Assuming no user if found with that id
    if (!user) {
      throw new Error("No user found with that id");
    }

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAllUser = async (request, response) => {
  try {
    const user = await User.find();

    // Assuming no user if found with that id
    if (!user) {
      throw new Error("No user found with that id");
    }

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

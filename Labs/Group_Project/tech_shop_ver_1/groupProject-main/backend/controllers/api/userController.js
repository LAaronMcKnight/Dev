// IMPORT JSON WEBTOKEN TO ASSIST WITH TOKEN
const jwt = require("jsonwebtoken");

const User = require('./../../models/userModel')

exports.createUser = async (request, response) => {
  try {
    // Create new user
    const newUser = await User.create({
      name: request.body.name, // ------------
      email: request.body.email, 
      password: request.body.password,
    });
    // Remove password from output
    newUser.password = undefined;

    // Create token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRATION_DATE,
      }
    );

    // Send JSON RESPONSE
    response.status(201).json({
      status: "success",
      data: {
        newUser,
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
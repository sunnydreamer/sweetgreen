// IMPORT MONGOOSE TO CREATE USER MODEL
const mongoose = require("mongoose");

// IMPORT BCRYPT
const bcrypt = require("bcryptjs");

// Use mongoose to create userSchema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Each user must have a name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is a required field"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: [3, "Password must be at least 3 characters long"],
      required: [true, "Password is a required field"],
      select: false,
    },
    cart: { type: Object, default: {} },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    minimize: false,
  }
);

// Create a document middleware to encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    // Call the next middleware in the stack
    next();

    // Return early
    return;
  }

  // Encrypt password
  this.password = await bcrypt.hash(this.password, 12);

  // Call the next middleware in the stack
  next();
});

// Create an instance method to compare password using bcryptjs
userSchema.methods.comparePassword = async function (
  plainText,
  hashedPassword
) {
  return await bcrypt.compare(plainText, hashedPassword);
};

// Use mongoose and schema to create user model
const User = mongoose.model("User", userSchema);

// EXPORT MODEL TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = User;
